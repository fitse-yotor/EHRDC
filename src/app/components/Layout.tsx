import { Outlet, Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xl">HR</span>
              </div>
              <span className="text-xl text-foreground">Human Rights Commission</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink
                        className={`px-4 py-2 rounded-md transition-colors ${
                          isActive("/")
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground">
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        <li>
                          <Link to="/about">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              About Us
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/impact">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              Impact Dashboard
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/press-kit">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              Press Kit
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/campaigns">
                      <NavigationMenuLink
                        className={`px-4 py-2 rounded-md transition-colors ${
                          isActive("/campaigns")
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        Campaigns
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-1 p-2">
                        <li>
                          <Link to="/news">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              News & Updates
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/events">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              Events
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/publications">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              Publications
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              Blog & Stories
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/gallery">
                      <NavigationMenuLink
                        className={`px-4 py-2 rounded-md transition-colors ${
                          isActive("/gallery")
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        Gallery
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <Link to="/jobs">
                      <NavigationMenuLink
                        className={`px-4 py-2 rounded-md transition-colors ${
                          isActive("/jobs")
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        Jobs
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Link to="/join" className="ml-4">
                <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                  Join Us
                </Button>
              </Link>
              <Link to="/report-case">
                <Button className="bg-primary hover:bg-primary/90">
                  Report Case
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/campaigns"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Campaigns
                  </Link>
                  <Link
                    to="/news"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    News & Updates
                  </Link>
                  <Link
                    to="/events"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Events
                  </Link>
                  <Link
                    to="/publications"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Publications
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Blog & Stories
                  </Link>
                  <Link
                    to="/gallery"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Gallery
                  </Link>
                  <Link
                    to="/jobs"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Jobs
                  </Link>
                  <Link
                    to="/impact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Impact Dashboard
                  </Link>
                  <Link
                    to="/press-kit"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    Press Kit
                  </Link>
                  <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                    <Link to="/join" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-secondary text-secondary">
                        Join Us
                      </Button>
                    </Link>
                    <Link to="/report-case" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Report Case
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/impact" className="text-gray-300 hover:text-white transition-colors">
                    Impact Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/press-kit" className="text-gray-300 hover:text-white transition-colors">
                    Press Kit
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4">Get Involved</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/join" className="text-gray-300 hover:text-white transition-colors">
                    Join Us
                  </Link>
                </li>
                <li>
                  <Link to="/campaigns" className="text-gray-300 hover:text-white transition-colors">
                    Campaigns
                  </Link>
                </li>
                <li>
                  <Link to="/report-case" className="text-gray-300 hover:text-white transition-colors">
                    Report a Case
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">
                    Jobs & Opportunities
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                    News & Updates
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/publications" className="text-gray-300 hover:text-white transition-colors">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog & Stories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4">Connect</h3>
              <p className="text-gray-300 mb-4">
                Stay updated with our latest news and campaigns
              </p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md text-foreground"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2026 Human Rights Commission. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
