type PageIntroProps = {
  title: string;
  children?: React.ReactNode;
};

export function PageIntro({ title, children }: PageIntroProps) {
  return (
    <header className="mx-auto w-full max-w-[1440px] px-5 pb-2 pt-14 sm:px-8 lg:px-12 lg:pt-20">
      <h1 className="max-w-4xl text-[clamp(2.6rem,5.4vw,4.5rem)] font-medium leading-[1.05] tracking-tight">
        {title}
      </h1>
      <div className="mt-6 h-0.5 w-12 bg-gold" aria-hidden="true" />
      {children ? (
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-ink/90">{children}</div>
      ) : null}
    </header>
  );
}
