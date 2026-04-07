import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  AlertCircle,
  Users,
  BookOpen,
  Calendar,
  Shield,
  TrendingUp,
  Heart,
  FileText,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import logo from "../../../assets/logo.png";
import { useLanguage } from "../context/LanguageContext";

export function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1641057324798-c05769de628a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwaGFuZHMlMjB0b2dldGhlciUyMHNvbGlkYXJpdHl8ZW58MXx8fHwxNzc1NTQ2NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Human Rights"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6 text-white">{t("hero.title")}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report-case">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <AlertCircle className="mr-2 h-5 w-5" />
                {t("hero.reportCase")}
              </Button>
            </Link>
            <Link to="/join">
              <Button size="lg" variant="outline" className="bg-white text-foreground hover:bg-white/90">
                <Users className="mr-2 h-5 w-5" />
                {t("hero.joinMovement")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Urgent Alerts */}
      <section className="bg-primary text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6" />
              <span className="text-white">
                <strong>URGENT:</strong> {t("urgent.text")}
              </span>
            </div>
            <Link to="/campaigns">
              <Button variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                {t("urgent.learnMore")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl text-primary mb-2">2,500+</div>
                <div className="text-muted-foreground">{t("stats.casesHandled")}</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl text-secondary mb-2">15,000+</div>
                <div className="text-muted-foreground">{t("stats.peopleSupported")}</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl text-primary mb-2">12</div>
                <div className="text-muted-foreground">{t("stats.regionsCovered")}</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">{t("stats.activeCampaigns")}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">{t("howWeWork.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("howWeWork.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t("howWeWork.caseAdvocacy")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t("howWeWork.caseAdvocacyDesc")}</p>
                <Link to="/report-case">
                  <Button variant="link" className="p-0 text-primary">{t("link.reportCase")}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>{t("howWeWork.communityEngagement")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t("howWeWork.communityEngagementDesc")}</p>
                <Link to="/events">
                  <Button variant="link" className="p-0 text-secondary">{t("link.viewEvents")}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t("howWeWork.research")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t("howWeWork.researchDesc")}</p>
                <Link to="/publications">
                  <Button variant="link" className="p-0 text-primary">{t("link.viewPublications")}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>{t("howWeWork.campaigns")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t("howWeWork.campaignsDesc")}</p>
                <Link to="/campaigns">
                  <Button variant="link" className="p-0 text-secondary">{t("link.activeCampaigns")}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{t("howWeWork.impactTracking")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t("howWeWork.impactTrackingDesc")}</p>
                <Link to="/impact">
                  <Button variant="link" className="p-0 text-primary">{t("link.viewImpact")}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>{t("howWeWork.policyAdvocacy")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{t("howWeWork.policyAdvocacyDesc")}</p>
                <Link to="/about">
                  <Button variant="link" className="p-0 text-secondary">{t("link.learnMore")}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl">{t("news.title")}</h2>
            <Link to="/news">
              <Button variant="outline">{t("news.viewAll")}</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "New Report: State of Human Rights 2026",
                date: "April 5, 2026",
                excerpt: "Our comprehensive annual report highlights progress and challenges in human rights protection...",
              },
              {
                title: "Campaign Victory: Education Access Expanded",
                date: "April 3, 2026",
                excerpt: "After 6 months of advocacy, new legislation ensures education access for all children...",
              },
              {
                title: "Upcoming: Regional Human Rights Summit",
                date: "April 1, 2026",
                excerpt: "Join us for a three-day summit bringing together activists, policymakers, and communities...",
              },
            ].map((news, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{news.date}</div>
                  <CardTitle className="text-xl">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <Link to="/news">
                    <Button variant="link" className="p-0 text-primary">{t("news.readMore")}</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl mb-3">{t("partnerships.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("partnerships.subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Consortium for Ethiopian Human Rights Organizations (CEHRO)",
              "Ethiopian Women Lawyers Association (EWLA)",
              "Ethiopian Human Rights Council (EHRCO)",
              "Advocates Ethiopia",
            ].map((partner) => (
              <Card key={partner} className="border-primary/10 shadow-sm">
                <CardContent className="pt-6 text-center">
                  <img src={logo} alt={`${partner} logo`} className="mx-auto mb-4 h-16 w-16 rounded-full border object-cover" />
                  <h3 className="text-sm">{partner}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 text-white">{t("cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-white">
                {t("cta.becomeMember")}
              </Button>
            </Link>
            <Link to="/campaigns">
              <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10 border-white">
                {t("cta.supportCampaign")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
