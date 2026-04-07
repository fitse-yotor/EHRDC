import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Users, Target, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const campaigns = [
  {
    id: 1,
    title: "Protect Freedom of Expression",
    status: "active",
    image: "https://images.unsplash.com/photo-1664866651877-b42cea398f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RpdmlzbSUyMGNhbXBhaWduJTIwcG9zdGVyJTIwZGVtb25zdHJhdGlvbnxlbnwxfHx8fDE3NzU1NDY2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Defending journalists, activists, and citizens' right to free speech and peaceful assembly.",
    supporters: 12500,
    goal: 20000,
    category: "Civil Liberties",
  },
  {
    id: 2,
    title: "Education Access for All",
    status: "active",
    image: "https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTU0NjYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Ensuring every child has access to quality education regardless of their background or location.",
    supporters: 18000,
    goal: 15000,
    category: "Education",
  },
  {
    id: 3,
    title: "Women's Economic Empowerment",
    status: "active",
    image: "https://images.unsplash.com/photo-1681949215173-fe0d15c790c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwZ3JvdXAlMjBtZWV0aW5nfGVufDF8fHx8MTc3NTU0NjYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Fighting discrimination and promoting equal economic opportunities and workplace rights for women.",
    supporters: 8500,
    goal: 10000,
    category: "Gender Equality",
  },
  {
    id: 4,
    title: "End Arbitrary Detention",
    status: "urgent",
    image: "https://images.unsplash.com/photo-1643149005402-ecac920f1d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXN0aWNlJTIwc2NhbGVzJTIwY291cnRob3VzZXxlbnwxfHx8fDE3NzU1NDY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Advocating for due process and protection against unlawful imprisonment and detention.",
    supporters: 15200,
    goal: 25000,
    category: "Justice",
  },
  {
    id: 5,
    title: "Digital Rights and Privacy",
    status: "active",
    image: "https://images.unsplash.com/photo-1641057324798-c05769de628a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwaGFuZHMlMjB0b2dldGhlciUyMHNvbGlkYXJpdHl8ZW58MXx8fHwxNzc1NTQ2NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Protecting online privacy, fighting surveillance, and ensuring digital freedoms in the modern age.",
    supporters: 9300,
    goal: 12000,
    category: "Digital Rights",
  },
  {
    id: 6,
    title: "Healthcare as a Right",
    status: "active",
    image: "https://images.unsplash.com/photo-1763705135060-4850b45494b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwZGlzY3Vzc2lvbiUyMGdyb3VwfGVufDF8fHx8MTc3NTU0NjQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Ensuring access to quality healthcare services for all, particularly marginalized communities.",
    supporters: 6800,
    goal: 10000,
    category: "Health",
  },
];

export function Campaigns() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">Active Campaigns</h1>
          <p className="text-muted-foreground text-lg">
            Join our advocacy campaigns to create real change in human rights protection
          </p>
        </div>

        {/* Featured Campaign */}
        <Card className="mb-12 overflow-hidden border-primary/50">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <ImageWithFallback
                src={campaigns[0].image}
                alt={campaigns[0].title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-destructive">URGENT</Badge>
            </div>
            <div className="p-8">
              <Badge className="mb-4">{campaigns[0].category}</Badge>
              <h2 className="text-3xl mb-4">{campaigns[0].title}</h2>
              <p className="text-muted-foreground mb-6">{campaigns[0].description}</p>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>{campaigns[0].supporters.toLocaleString()} supporters</span>
                  <span>Goal: {campaigns[0].goal.toLocaleString()}</span>
                </div>
                <Progress
                  value={(campaigns[0].supporters / campaigns[0].goal) * 100}
                  className="h-2"
                />
              </div>
              <div className="flex gap-4">
                <Link to={`/campaigns/${campaigns[0].id}`}>
                  <Button className="bg-primary hover:bg-primary/90">
                    Join Campaign
                  </Button>
                </Link>
                <Button variant="outline">Share</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.slice(1).map((campaign) => (
            <Card key={campaign.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <ImageWithFallback
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
                {campaign.status === "urgent" && (
                  <Badge className="absolute top-4 right-4 bg-destructive">URGENT</Badge>
                )}
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2" variant="outline">
                  {campaign.category}
                </Badge>
                <CardTitle className="text-xl">{campaign.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{campaign.description}</p>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">
                      {campaign.supporters.toLocaleString()} supporters
                    </span>
                    <span className="text-muted-foreground">
                      {Math.round((campaign.supporters / campaign.goal) * 100)}%
                    </span>
                  </div>
                  <Progress
                    value={(campaign.supporters / campaign.goal) * 100}
                    className="h-2"
                  />
                </div>
                <Link to={`/campaigns/${campaign.id}`}>
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90"
                  >
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 bg-muted">
          <CardContent className="py-12 text-center">
            <h3 className="text-2xl mb-4">Start Your Own Campaign</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have an idea for a human rights campaign? We can help you organize, mobilize,
              and create change.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Propose a Campaign
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
