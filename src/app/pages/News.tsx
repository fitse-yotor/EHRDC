import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "New Report: State of Human Rights 2026",
    date: "April 5, 2026",
    category: "Report",
    excerpt:
      "Our comprehensive annual report highlights progress and challenges in human rights protection across the region. The report covers key areas including freedom of expression, access to justice, and economic rights.",
    type: "report",
  },
  {
    id: 2,
    title: "Campaign Victory: Education Access Expanded",
    date: "April 3, 2026",
    category: "Press Release",
    excerpt:
      "After 6 months of intensive advocacy, new legislation ensures education access for all children regardless of their background. This represents a major victory for educational equity.",
    type: "press-release",
  },
  {
    id: 3,
    title: "Upcoming: Regional Human Rights Summit",
    date: "April 1, 2026",
    category: "Announcement",
    excerpt:
      "Join us for a three-day summit bringing together activists, policymakers, and communities to discuss pressing human rights challenges and solutions. Registration now open.",
    type: "announcement",
  },
  {
    id: 4,
    title: "URGENT: Statement on Recent Events",
    date: "March 30, 2026",
    category: "Statement",
    excerpt:
      "We strongly condemn the recent incidents of violence and call for immediate investigation and accountability. Human rights must be protected at all times.",
    type: "alert",
  },
  {
    id: 5,
    title: "Training Workshop: Know Your Rights",
    date: "March 28, 2026",
    category: "Announcement",
    excerpt:
      "Free community workshop series launching next month to educate citizens about their fundamental rights and how to access justice mechanisms.",
    type: "announcement",
  },
  {
    id: 6,
    title: "Research Paper: Digital Rights in Modern Society",
    date: "March 25, 2026",
    category: "Report",
    excerpt:
      "New research explores the intersection of technology and human rights, examining privacy concerns, surveillance, and digital access as fundamental rights.",
    type: "report",
  },
];

export function News() {
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "alert":
        return "destructive";
      case "report":
        return "default";
      case "announcement":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">News & Updates</h1>
          <p className="text-muted-foreground text-lg">
            Stay informed about our latest reports, statements, and announcements
          </p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <Badge variant={getBadgeVariant(item.type) as any}>
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
