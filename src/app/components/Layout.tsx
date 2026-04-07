import { Link, Outlet, useLocation } from "react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Reports", to: "/report-case" },
    { label: "Events", to: "/events" },
    { label: "Join Us", to: "/join" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/logo.png" alt="EHRDC" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="text-sm font-semibold tracking-wide text-primary">EHRDC</p>
              <p className="text-xs text-muted-foreground">Ethiopian Human Rights Defenders Center</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-4 py-2 text-sm transition-colors ${
                  isActive(item.to) ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button size="icon" variant="ghost">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="mt-8 flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-md px-3 py-2 text-sm hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="min-h-[calc(100vh-16rem)]">
        <Outlet />
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-4 py-8 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="EHRDC" className="h-10 w-10 rounded-full object-cover" />
              <p className="text-sm text-muted-foreground">Protecting rights, documenting violations, and building accountability.</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              {navItems.map((item) => (
                <Link key={item.to} to={item.to} className="text-muted-foreground transition-colors hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground">© 2026 Ethiopian Human Rights Defenders Center (EHRDC). All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
