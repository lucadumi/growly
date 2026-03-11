import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Todos", href: "/dashboard/todos" },
  { label: "Habits", href: "/dashboard/habits" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Support", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-muted/60 bg-card">
      <div className="mx-auto px-6 lg:px-10 xl:px-16 2xl:px-28 py-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold text-foreground">Growly</span>
          <nav className="flex items-center gap-4 text-xs text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
          {legalLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <span>&copy; {year}</span>
        </div>
      </div>
    </footer>
  );
}
