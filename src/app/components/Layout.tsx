import { Outlet, Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
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
import logo from "../../../assets/logo.png";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-[1200] w-full border-b bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="EHRDC logo" className="h-14 w-14 rounded-full border object-cover" />
              <span className="text-xl text-foreground">EHRDC</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavigationMenu viewport={false}>
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
                      About EHRDC
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-[120]">
                      <ul className="grid w-[260px] gap-1 p-2">
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
                        <li className="px-4 pt-2 pb-1 text-xs font-semibold text-muted-foreground">
                          Who We Are
                        </li>
                        <li>
                          <Link to="/board-members">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              Board Members
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/staff">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              Staff
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li className="px-4 pt-2 pb-1 text-xs font-semibold text-muted-foreground">
                          What We Do
                        </li>
                        <li>
                          <Link to="/capacity-building">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              Capacity Building
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/advocacy">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              Advocacy
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/protection">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              Protection
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
                      Publication
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-[120]">
                      <ul className="grid w-[220px] gap-1 p-2">
                        <li>
                          <Link to="/research-papers">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              Research Papers
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/statistics">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              Statistics
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/annual-reports">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              Annual Reports
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-[120]">
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
                        <li>
                          <Link to="/violence-reporting-map">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              Reports Map
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
                <nav className="mt-8 space-y-5">
                  <Link
                    to="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                  <div className="rounded-lg border bg-muted/30 p-3">
                    <p className="mb-2 text-base font-semibold text-foreground">About EHRDC</p>
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-base hover:text-primary transition-colors"
                    >
                      About Us
                    </Link>
                    <Link
                      to="/impact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-base hover:text-primary transition-colors"
                    >
                      Impact Dashboard
                    </Link>
                    <Link
                      to="/press-kit"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-base hover:text-primary transition-colors"
                    >
                      Press Kit
                    </Link>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Who We Are
                    </p>
                    <Link
                      to="/board-members"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      Board Members
                    </Link>
                    <Link
                      to="/staff"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      Staff
                    </Link>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      What We Do
                    </p>
                    <Link
                      to="/capacity-building"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      Capacity Building
                    </Link>
                    <Link
                      to="/advocacy"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      Advocacy
                    </Link>
                    <Link
                      to="/protection"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      Protection
                    </Link>
                  </div>
                  <div className="rounded-lg border bg-muted/30 p-3">
                    <p className="mb-2 text-base font-semibold text-foreground">Programs</p>
                    <Link to="/campaigns" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">Campaigns</Link>
                    <Link to="/events" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">Events</Link>
                    <Link to="/violence-reporting-map" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">Reports Map</Link>
                    <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">Gallery</Link>
                    <Link to="/jobs" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">Jobs</Link>
                  </div>
                  <div className="rounded-lg border bg-muted/30 p-3">
                    <p className="mb-2 text-base font-semibold text-foreground">Publication</p>
                    <Link to="/publications" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">Publications Library</Link>
                    <Link to="/research-papers" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">Research Papers</Link>
                    <Link to="/statistics" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">Statistics</Link>
                    <Link to="/annual-reports" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">Annual Reports</Link>
                  </div>
                  <div className="rounded-lg border bg-muted/30 p-3">
                    <p className="mb-2 text-base font-semibold text-foreground">Resources</p>
                    <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">News & Updates</Link>
                    <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">Blog & Stories</Link>
                  </div>
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
              <div className="mb-4 flex items-center gap-2">
                <img src={logo} alt="EHRDC logo" className="h-10 w-10 rounded-full border border-white/30 object-cover" />
                <h3>EHRDC</h3>
              </div>
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
                  className="rounded-md border border-white/30 bg-white px-4 py-2 text-foreground placeholder:text-gray-500"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2026 EHRDC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
