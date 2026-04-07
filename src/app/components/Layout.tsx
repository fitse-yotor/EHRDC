import { Outlet, Link, useLocation } from "react-router";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";
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
import { GlobalSearch } from "./GlobalSearch";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSections, setMobileSections] = useState({
    about: false,
    programs: false,
    publication: false,
    resources: false,
  });
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;
  const toggleMobileSection = (key: keyof typeof mobileSections) => {
    setMobileSections((current) => ({ ...current, [key]: !current[key] }));
  };

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
                        {t("nav.home")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground">
                      {t("nav.about")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-[120]">
                      <ul className="grid w-[260px] gap-1 p-2">
                        <li>
                          <Link to="/about">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.aboutUs")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/impact">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.impactDashboard")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/press-kit">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.pressKit")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li className="px-4 pt-2 pb-1 text-xs font-semibold text-muted-foreground">
                          {t("nav.whoWeAre")}
                        </li>
                        <li>
                          <Link to="/board-members">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              {t("nav.boardMembers")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/staff">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              {t("nav.staff")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li className="px-4 pt-2 pb-1 text-xs font-semibold text-muted-foreground">
                          {t("nav.whatWeDo")}
                        </li>
                        <li>
                          <Link to="/capacity-building">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              {t("nav.capacityBuilding")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/advocacy">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              {t("nav.advocacy")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/protection">
                            <NavigationMenuLink className="block px-6 py-2 rounded-md text-sm text-foreground/80 hover:bg-muted">
                              {t("nav.protection")}
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
                        {t("nav.campaigns")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground">
                      {t("nav.publication")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-[120]">
                      <ul className="grid w-[220px] gap-1 p-2">
                        <li>
                          <Link to="/research-papers">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.researchPapers")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/statistics">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.statistics")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/annual-reports">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.annualReports")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground">
                      {t("nav.resources")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="z-[120]">
                      <ul className="grid w-[200px] gap-1 p-2">
                        <li>
                          <Link to="/news">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.newsUpdates")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/events">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.events")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/publications">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.publications")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.blogStories")}
                            </NavigationMenuLink>
                          </Link>
                        </li>
                        <li>
                          <Link to="/violence-reporting-map">
                            <NavigationMenuLink className="block px-4 py-2 rounded-md hover:bg-muted">
                              {t("nav.reportsMap")}
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
                        {t("nav.gallery")}
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
                        {t("nav.jobs")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/contact">
                      <NavigationMenuLink
                        className={`px-4 py-2 rounded-md transition-colors ${
                          isActive("/contact")
                            ? "bg-primary/10 text-primary"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {t("nav.contactUs")}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center gap-2 ml-2">
                <GlobalSearch />
                <LanguageToggle />
                <Link to="/join">
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                    {t("nav.joinUs")}
                  </Button>
                </Link>
                <Link to="/report-case">
                  <Button className="bg-primary hover:bg-primary/90">
                    {t("nav.reportCase")}
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <GlobalSearch />
              <LanguageToggle />
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>{t("nav.menu")}</SheetTitle>
                  </SheetHeader>
                  <nav className="mt-8 space-y-5">
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-base font-semibold hover:text-primary transition-colors"
                      >
                        {t("nav.home")}
                      </Link>
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <button
                        type="button"
                        onClick={() => toggleMobileSection("about")}
                        className="flex w-full items-center justify-between text-base font-semibold text-foreground"
                      >
                        {t("nav.about")}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileSections.about ? "rotate-180" : ""}`} />
                      </button>
                      {mobileSections.about && (
                        <>
                          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.aboutUs")}</Link>
                          <Link to="/impact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.impactDashboard")}</Link>
                          <Link to="/press-kit" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.pressKit")}</Link>
                          <p className="mt-3 py-1 text-sm text-foreground/80">{t("nav.whoWeAre")}</p>
                          <Link to="/board-members" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.boardMembers")}</Link>
                          <Link to="/staff" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.staff")}</Link>
                          <p className="mt-3 py-1 text-sm text-foreground/80">{t("nav.whatWeDo")}</p>
                          <Link to="/capacity-building" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.capacityBuilding")}</Link>
                          <Link to="/advocacy" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.advocacy")}</Link>
                          <Link to="/protection" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.protection")}</Link>
                        </>
                      )}
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <button
                        type="button"
                        onClick={() => toggleMobileSection("programs")}
                        className="flex w-full items-center justify-between text-base font-semibold text-foreground"
                      >
                        {t("nav.programs")}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileSections.programs ? "rotate-180" : ""}`} />
                      </button>
                      {mobileSections.programs && (
                        <>
                          <Link to="/campaigns" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.campaigns")}</Link>
                          <Link to="/events" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.events")}</Link>
                          <Link to="/violence-reporting-map" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.reportsMap")}</Link>
                          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.gallery")}</Link>
                          <Link to="/jobs" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.jobs")}</Link>
                          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.contactUs")}</Link>
                        </>
                      )}
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <button
                        type="button"
                        onClick={() => toggleMobileSection("publication")}
                        className="flex w-full items-center justify-between text-base font-semibold text-foreground"
                      >
                        {t("nav.publication")}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileSections.publication ? "rotate-180" : ""}`} />
                      </button>
                      {mobileSections.publication && (
                        <>
                          <Link to="/publications" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.publicationsLibrary")}</Link>
                          <Link to="/research-papers" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.researchPapers")}</Link>
                          <Link to="/statistics" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.statistics")}</Link>
                          <Link to="/annual-reports" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm text-foreground/80 hover:text-primary transition-colors">{t("nav.annualReports")}</Link>
                        </>
                      )}
                    </div>
                    <div className="rounded-lg border bg-muted/30 p-3">
                      <button
                        type="button"
                        onClick={() => toggleMobileSection("resources")}
                        className="flex w-full items-center justify-between text-base font-semibold text-foreground"
                      >
                        {t("nav.resources")}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileSections.resources ? "rotate-180" : ""}`} />
                      </button>
                      {mobileSections.resources && (
                        <>
                          <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.newsUpdates")}</Link>
                          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-base hover:text-primary transition-colors">{t("nav.blogStories")}</Link>
                        </>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                      <Link to="/join" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full border-secondary text-secondary">
                          {t("nav.joinUs")}
                        </Button>
                      </Link>
                      <Link to="/report-case" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full bg-primary hover:bg-primary/90">
                          {t("nav.reportCase")}
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
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
              <h3 className="mb-4">{t("footer.about")}</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">{t("nav.aboutUs")}</Link></li>
                <li><Link to="/impact" className="text-gray-300 hover:text-white transition-colors">{t("nav.impactDashboard")}</Link></li>
                <li><Link to="/press-kit" className="text-gray-300 hover:text-white transition-colors">{t("nav.pressKit")}</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">{t("nav.contactUs")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4">{t("footer.getInvolved")}</h3>
              <ul className="space-y-2">
                <li><Link to="/join" className="text-gray-300 hover:text-white transition-colors">{t("nav.joinUs")}</Link></li>
                <li><Link to="/campaigns" className="text-gray-300 hover:text-white transition-colors">{t("nav.campaigns")}</Link></li>
                <li><Link to="/report-case" className="text-gray-300 hover:text-white transition-colors">{t("hero.reportCase")}</Link></li>
                <li><Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">{t("nav.jobs")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4">{t("footer.resources")}</h3>
              <ul className="space-y-2">
                <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">{t("nav.newsUpdates")}</Link></li>
                <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">{t("nav.events")}</Link></li>
                <li><Link to="/publications" className="text-gray-300 hover:text-white transition-colors">{t("nav.publications")}</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">{t("nav.blogStories")}</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4">{t("footer.connect")}</h3>
              <p className="text-gray-300 mb-4">{t("footer.stayUpdated")}</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  className="rounded-md border border-white/30 bg-white px-4 py-2 text-foreground placeholder:text-gray-500"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  {t("footer.subscribe")}
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
