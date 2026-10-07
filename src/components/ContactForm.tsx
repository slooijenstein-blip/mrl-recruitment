"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import {
  contactErrorMessage,
  contactSubject,
  formSubmitActionUrl,
  readContactFields,
  validateContact,
  type ContactErrorCode,
  type ContactFields,
} from "@/lib/contact";
import { outlineButtonClass, site } from "@/lib/site";

type FieldName = "firstName" | "lastName" | "email" | "message";

type Fields = Record<FieldName, string>;

const emptyFields: Fields = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const fieldMeta: Array<{
  name: FieldName;
  formName: string;
  label: string;
  type: string;
  autoComplete: string;
  maxLength: number;
  multiline?: boolean;
}> = [
  {
    name: "firstName",
    formName: "First Name",
    label: "First Name",
    type: "text",
    autoComplete: "given-name",
    maxLength: 80,
  },
  {
    name: "lastName",
    formName: "Last Name",
    label: "Last Name",
    type: "text",
    autoComplete: "family-name",
    maxLength: 80,
  },
  {
    name: "email",
    formName: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
    maxLength: 254,
  },
  {
    name: "message",
    formName: "message",
    label: "Message",
    type: "text",
    autoComplete: "off",
    maxLength: 5000,
    multiline: true,
  },
];

const formSubmitUrl = formSubmitActionUrl;

export function ContactForm() {
  const sent = useSearchParams().get("sent") === "1";
  return <ContactFormFields returned={sent} />;
}

export function ContactFormFields({ returned = false }: { returned?: boolean }) {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState<ContactErrorCode | null>(null);
  const [pending, setPending] = useState(false);
  const [sentEmail, setSentEmail] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const replyToRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const nextRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const sendingRef = useRef(false);
  const showReturned = returned && !sentEmail && !error && !pending;

  useEffect(() => {
    if (sentEmail || showReturned || error) statusRef.current?.focus();
  }, [sentEmail, showReturned, error]);

  function deliverInBrowser(nextFields: ContactFields) {
    const form = formRef.current;
    if (
      !form ||
      !fullNameRef.current ||
      !replyToRef.current ||
      !subjectRef.current ||
      !nextRef.current
    ) {
      sendingRef.current = false;
      setError("send_failed");
      setPending(false);
      return;
    }

    fullNameRef.current.name = "name";
    fullNameRef.current.value = `${nextFields.firstName} ${nextFields.lastName}`;
    replyToRef.current.name = "_replyto";
    replyToRef.current.value = nextFields.email;
    subjectRef.current.value = contactSubject;
    nextRef.current.value = `${window.location.origin}/contact?sent=1`;
    form.submit();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sendingRef.current) return;

    const nextFields = readContactFields(fields);
    const company =
      honeypot || formRef.current?.querySelector<HTMLInputElement>("#contact-company")?.value || "";
    const validationError = validateContact(nextFields);

    if (validationError) {
      setSentEmail(null);
      setError(validationError);
      return;
    }

    if (company.trim()) {
      setError(null);
      setFields(emptyFields);
      setSentEmail(nextFields.email);
      return;
    }

    sendingRef.current = true;
    setError(null);
    setSentEmail(null);
    setPending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(nextFields),
      });
      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: ContactErrorCode;
      } | null;

      if (response.ok && payload?.ok) {
        sendingRef.current = false;
        setFields(emptyFields);
        setSentEmail(nextFields.email);
        setPending(false);
        return;
      }

      const code = payload?.error ?? "send_failed";
      if (code !== "send_failed") {
        sendingRef.current = false;
        setError(code);
        setPending(false);
        return;
      }
    } catch {
      // The browser post below is the reliable delivery path.
    }

    deliverInBrowser(nextFields);
  }

  return (
    <form
      ref={formRef}
      action={formSubmitUrl}
      method="POST"
      onSubmit={onSubmit}
      className="relative space-y-6"
      aria-busy={pending}
      noValidate={false}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {fieldMeta.slice(0, 2).map((field) => (
          <Field
            key={field.name}
            field={field}
            value={fields[field.name]}
            invalid={error === "incomplete" && !fields[field.name].trim()}
            onChange={(value) => setFields((current) => ({ ...current, [field.name]: value }))}
          />
        ))}
      </div>
      {fieldMeta.slice(2).map((field) => (
        <Field
          key={field.name}
          field={field}
          value={fields[field.name]}
          invalid={
            (error === "incomplete" && !fields[field.name].trim()) ||
            (error === "invalid_email" && field.name === "email") ||
            (error === "too_long" && field.name === "message")
          }
          onChange={(value) => setFields((current) => ({ ...current, [field.name]: value }))}
        />
      ))}

      <input ref={fullNameRef} type="hidden" />
      <input ref={replyToRef} type="hidden" />
      <input ref={subjectRef} type="hidden" name="_subject" defaultValue={contactSubject} />
      <input
        ref={nextRef}
        type="hidden"
        name="_next"
        defaultValue={`${site.url}/contact?sent=1`}
      />
      <input type="hidden" name="_template" defaultValue="table" />
      <input type="hidden" name="_captcha" defaultValue="false" />

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      {error ? (
        <p ref={statusRef} tabIndex={-1} role="alert" className="max-w-xl text-sm leading-6 outline-none">
          {error === "send_failed" ? (
            <>
              We could not send your message. Please try again, or email us at{" "}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </>
          ) : (
            contactErrorMessage(error)
          )}
        </p>
      ) : null}

      <button
        type="submit"
        className={`${outlineButtonClass} disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent disabled:hover:text-ink`}
        disabled={pending}
      >
        {pending ? "Sending…" : "Send"}
      </button>

      {sentEmail ? (
        <p
          ref={statusRef}
          tabIndex={-1}
          role="status"
          className="max-w-xl text-sm leading-6 text-ink/80 outline-none"
        >
          Thank you. Your message has been sent. We will reply to you at {sentEmail}.
        </p>
      ) : showReturned ? (
        <p
          ref={statusRef}
          tabIndex={-1}
          role="status"
          className="max-w-xl text-sm leading-6 text-ink/80 outline-none"
        >
          Thank you. Your message has been sent. We will reply to the email address you entered.
        </p>
      ) : pending ? (
        <p role="status" className="max-w-xl text-sm leading-6 text-ink/70">
          Sending your message…
        </p>
      ) : (
        <p className="max-w-xl text-sm leading-6 text-ink/70">
          Send delivers your message by email. We reply to the address you enter.
        </p>
      )}
    </form>
  );
}

function Field({
  field,
  value,
  invalid,
  onChange,
}: {
  field: (typeof fieldMeta)[number];
  value: string;
  invalid: boolean;
  onChange: (value: string) => void;
}) {
  const id = `contact-${field.name}`;
  const shared =
    "mt-2 w-full border border-ink/25 bg-white px-3 py-3 text-base text-ink outline-none focus-visible:border-ink";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {field.label} <span aria-hidden="true">*</span>
        <span className="sr-only"> (required)</span>
      </label>
      {field.multiline ? (
        <textarea
          id={id}
          name={field.formName}
          required
          rows={7}
          maxLength={field.maxLength}
          value={value}
          autoComplete={field.autoComplete}
          aria-invalid={invalid || undefined}
          onChange={(event) => onChange(event.target.value)}
          className={`${shared} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={field.formName}
          type={field.type}
          required
          maxLength={field.maxLength}
          value={value}
          autoComplete={field.autoComplete}
          aria-invalid={invalid || undefined}
          onChange={(event) => onChange(event.target.value)}
          className={shared}
        />
      )}
    </div>
  );
}
