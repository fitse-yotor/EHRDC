import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Shield, Users, Target, Heart, Globe, Scale } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const teamMembers = [
  { name: "Dr. Amina Hassan", role: "Executive Director", initials: "AH" },
  { name: "James Kimani", role: "Legal Director", initials: "JK" },
  { name: "Sarah Tesfaye", role: "Advocacy Director", initials: "ST" },
  { name: "Michael Odhiambo", role: "Programs Director", initials: "MO" },
];

export function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6">About Us</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We are an independent human rights organization dedicated to defending and
            promoting human rights for all people, regardless of their background,
            identity, or circumstances.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-l-4 border-primary">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mb-4" />
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To protect and promote human rights through advocacy, legal support,
                community empowerment, and policy reform. We work to create a society where
                every person's dignity and rights are respected and protected.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-secondary">
            <CardHeader>
              <Globe className="h-12 w-12 text-secondary mb-4" />
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A world where all people live with dignity, equality, and justice. Where
                human rights are universally recognized, respected, and upheld without
                exception.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Work */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Scale className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Legal Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Providing free legal aid and representation to victims of human rights
                  violations, and pursuing strategic litigation for systemic change.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-secondary mb-4" />
                <CardTitle>Community Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Training and educating communities about their rights, building
                  grassroots movements, and strengthening civil society.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-accent mb-4" />
                <CardTitle>Policy Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Working with governments and institutions to reform laws, policies, and
                  practices that violate human rights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Values */}
        <Card className="mb-16 bg-muted">
          <CardContent className="py-12">
            <h2 className="text-3xl mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Independence",
                  description: "We maintain strict political and financial independence",
                },
                {
                  icon: Scale,
                  title: "Impartiality",
                  description: "We treat all cases with objectivity and fairness",
                },
                {
                  icon: Heart,
                  title: "Compassion",
                  description: "We approach our work with empathy and humanity",
                },
                {
                  icon: Users,
                  title: "Accountability",
                  description: "We are transparent and accountable to those we serve",
                },
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Leadership Team */}
        <div className="mb-16">
          <h2 className="text-3xl mb-8 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary">{member.initials}</span>
                  </div>
                  <h4 className="mb-1">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our History */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">Our History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="mb-2">2015 - Foundation</h4>
              <p className="text-muted-foreground">
                Established by a group of human rights lawyers, activists, and community
                organizers committed to defending fundamental rights.
              </p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <h4 className="mb-2">2018 - Major Legal Victory</h4>
              <p className="text-muted-foreground">
                Landmark case securing press freedom protections for journalists nationwide.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h4 className="mb-2">2021 - Regional Expansion</h4>
              <p className="text-muted-foreground">
                Expanded operations to cover 12 regions, reaching thousands more communities.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="mb-2">2023 - Policy Reform Success</h4>
              <p className="text-muted-foreground">
                Our advocacy led to major legislative changes protecting children's rights to
                education.
              </p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <h4 className="mb-2">2026 - Present</h4>
              <p className="text-muted-foreground">
                Continuing to fight for justice, with over 2,500 cases handled and 15,000
                people supported.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-primary text-white text-center">
          <CardContent className="py-12">
            <h2 className="text-3xl mb-4 text-white">Join Our Mission</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white">
              Whether through membership, volunteering, or supporting our campaigns, you can
              be part of the movement for human rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-primary hover:bg-white/90 border-white"
                >
                  Become a Member
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10 border-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
