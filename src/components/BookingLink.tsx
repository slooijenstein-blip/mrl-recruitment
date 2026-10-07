import { bookingHref, bookingIsExternal } from "@/lib/site";

type BookingLinkProps = {
  className?: string;
  children: React.ReactNode;
};

export function BookingLink({ className, children }: BookingLinkProps) {
  if (bookingIsExternal) {
    return (
      <a
        href={bookingHref}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <a href={bookingHref} className={className}>
      {children}
    </a>
  );
}
