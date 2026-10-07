/** Activated FormSubmit alias. The public form must not use the inbox address. */
export const formSubmitAlias = "fbc9b65698c1d85ed52a8636ce9a7177";

export const formSubmitActionUrl = `https://formsubmit.co/${formSubmitAlias}`;

export const formSubmitAjaxUrl = `https://formsubmit.co/ajax/${formSubmitAlias}`;

export const contactSubject = "New message from the MRL website";

export function enquirySubject(firstName: string, lastName: string) {
  return `Enquiry from ${firstName} ${lastName}`;
}

export type ContactFields = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export type ContactErrorCode = "incomplete" | "invalid_email" | "too_long" | "send_failed";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 80;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

export function readContactFields(input: {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  message?: unknown;
}): ContactFields {
  return {
    firstName: singleLine(input.firstName),
    lastName: singleLine(input.lastName),
    email: singleLine(input.email),
    message: messageText(input.message),
  };
}

export function validateContact(fields: ContactFields): ContactErrorCode | null {
  if (!fields.firstName || !fields.lastName || !fields.email || !fields.message) {
    return "incomplete";
  }

  if (
    fields.firstName.length > MAX_NAME ||
    fields.lastName.length > MAX_NAME ||
    fields.email.length > MAX_EMAIL ||
    fields.message.length > MAX_MESSAGE
  ) {
    return "too_long";
  }

  if (!EMAIL_PATTERN.test(fields.email)) {
    return "invalid_email";
  }

  return null;
}

export function contactErrorMessage(code: Exclude<ContactErrorCode, "send_failed">): string {
  switch (code) {
    case "incomplete":
      return "Please complete every field.";
    case "invalid_email":
      return "Enter a valid email address.";
    case "too_long":
      return "That message is too long. Please shorten it and try again.";
  }
}

function singleLine(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").replace(/\s+/g, " ").trim();
}

function messageText(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
}
