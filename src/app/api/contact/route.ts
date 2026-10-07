import {
  enquirySubject,
  formSubmitAjaxUrl,
  readContactFields,
  validateContact,
  type ContactFields,
} from "@/lib/contact";

const FORM_SUBMIT_URL = formSubmitAjaxUrl;

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return Response.json({ ok: false, error: "send_failed" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "incomplete" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, error: "incomplete" }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const honeypot = typeof record.company === "string" ? record.company.trim() : "";
  if (honeypot) {
    return Response.json({ ok: true });
  }

  const fields = readContactFields(record);
  const error = validateContact(fields);
  if (error) {
    return Response.json({ ok: false, error }, { status: 400 });
  }

  const delivered = await deliverContact(fields);
  if (!delivered) {
    return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}

async function deliverContact(fields: ContactFields): Promise<boolean> {
  try {
    const response = await fetch(FORM_SUBMIT_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${fields.firstName} ${fields.lastName}`,
        email: fields.email,
        message: fields.message,
        _replyto: fields.email,
        _subject: enquirySubject(fields.firstName, fields.lastName),
        _template: "table",
        _captcha: "false",
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(15_000),
    });

    const payload = (await response.json().catch(() => null)) as {
      success?: boolean | string;
      message?: unknown;
    } | null;

    const successFlag = payload?.success;
    const accepted = successFlag === true || successFlag === "true";
    const providerMessage = typeof payload?.message === "string" ? payload.message : "";
    const awaitingActivation = /activat/i.test(providerMessage);

    if (!response.ok || !accepted || awaitingActivation) {
      console.error("Contact form delivery failed", {
        status: response.status,
        providerMessage,
      });
      return false;
    }

    return true;
  } catch (error) {
    console.error("Contact form delivery failed", error);
    return false;
  }
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;

  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return false;
  }

  const forwardedHost = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  const host = forwardedHost || request.headers.get("host");
  return Boolean(host) && originHost === host;
}
