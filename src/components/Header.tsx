"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import logo from "@/images/logo.png";
import { headerBookingClass, nav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-canvas">
      <div className="relative mx-auto flex h-[88px] max-w-[1500px] items-center justify-between px-5 sm:h-[96px] sm:px-8 lg:px-10">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center min-[1120px]:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((current) => !current)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true" fill="none">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>

        <nav className="hidden items-center gap-7 min-[1120px]:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[15px] tracking-wide ${
                  active ? "underline underline-offset-[7px]" : "hover:underline hover:underline-offset-[7px]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <span className="relative block h-[52px] w-[77px] sm:h-[68px] sm:w-[100px]">
            <Image
              src={logo}
              alt="MRL Recruitment"
              fill
              sizes="100px"
              className="object-contain"
            />
          </span>
        </Link>

        <Link
          href="/booking"
          aria-current={isActive(pathname, "/booking") ? "page" : undefined}
          className={headerBookingClass}
        >
          Booking
        </Link>
      </div>

      {open ? (
        <nav
          id={menuId}
          aria-label="Mobile"
          className="border-t border-ink/10 bg-canvas px-6 py-6 min-[1120px]:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 text-2xl font-medium tracking-tight ${
                      active ? "underline underline-offset-4" : ""
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
