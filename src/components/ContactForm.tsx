"use client";

import { useState, type FormEvent } from "react";
import { site, outlineButtonClass } from "@/lib/site";

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
  label: string;
  type: string;
  autoComplete: string;
  multiline?: boolean;
}> = [
  { name: "firstName", label: "First Name", type: "text", autoComplete: "given-name" },
  { name: "lastName", label: "Last Name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "message", label: "Message", type: "text", autoComplete: "off", multiline: true },
];

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [error, setError] = useState<string | null>(null);
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const firstName = fields.firstName.trim();
    const lastName = fields.lastName.trim();
    const email = fields.email.trim();
    const message = fields.message.trim();

    if (!firstName || !lastName || !email || !message) {
      setOpened(false);
      setError("Please complete every field.");
      return;
    }

    const subject = encodeURIComponent(`Enquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
    );

    setError(null);
    setOpened(true);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        {fieldMeta.slice(0, 2).map((field) => (
          <Field
            key={field.name}
            field={field}
            value={fields[field.name]}
            onChange={(value) => setFields((current) => ({ ...current, [field.name]: value }))}
          />
        ))}
      </div>
      {fieldMeta.slice(2).map((field) => (
        <Field
          key={field.name}
          field={field}
          value={fields[field.name]}
          onChange={(value) => setFields((current) => ({ ...current, [field.name]: value }))}
        />
      ))}

      {error ? (
        <p role="alert" className="text-sm">
          {error}
        </p>
      ) : null}

      <button type="submit" className={outlineButtonClass}>
        Send
      </button>

      {opened ? (
        <p role="status" className="max-w-xl text-sm leading-6 text-ink/80">
          Your email app should open with this message addressed to us. If it does not, write
          directly to{" "}
          <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
      ) : (
        <p className="max-w-xl text-sm leading-6 text-ink/70">
          Sending opens your email app with this message. Nothing is stored on this website.
        </p>
      )}
    </form>
  );
}

function Field({
  field,
  value,
  onChange,
}: {
  field: (typeof fieldMeta)[number];
  value: string;
  onChange: (value: string) => void;
}) {
  const id = `contact-${field.name}`;
  const shared =
    "mt-2 w-full border border-ink/25 bg-white px-3 py-3 text-base text-ink outline-none focus-visible:border-ink";

  return (
    <div className={field.multiline ? "" : undefined}>
      <label htmlFor={id} className="block text-sm font-medium">
        {field.label} <span aria-hidden="true">*</span>
        <span className="sr-only"> (required)</span>
      </label>
      {field.multiline ? (
        <textarea
          id={id}
          name={field.name}
          required
          rows={7}
          value={value}
          autoComplete={field.autoComplete}
          onChange={(event) => onChange(event.target.value)}
          className={`${shared} resize-y`}
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          required
          value={value}
          autoComplete={field.autoComplete}
          onChange={(event) => onChange(event.target.value)}
          className={shared}
        />
      )}
    </div>
  );
}
