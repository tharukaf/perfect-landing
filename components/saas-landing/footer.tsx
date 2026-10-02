import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center border-t border-border/40 px-6 py-8 md:px-[4vw]">
      <div className="flex w-full max-w-[1700px] flex-col-reverse items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
          Nipun Fernando
        </p>
        {/* <Link
          href="/privacy"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Privacy Policy
        </Link> */}
      </div>
    </footer>
  );
}
