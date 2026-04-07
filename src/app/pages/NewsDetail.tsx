import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const newsDetails = [
  {
    id: 1,
    title: "New Report: State of Human Rights 2026",
    date: "April 5, 2026",
    body:
      "Our annual report presents key national trends affecting human rights defenders, freedom of expression, and access to justice. The publication highlights institutional gaps and practical recommendations for state and civil society actors.",
  },
  {
    id: 2,
    title: "Campaign Victory: Education Access Expanded",
    date: "April 3, 2026",
    body:
      "Following coordinated advocacy efforts, policymakers adopted stronger inclusion standards for education access. The campaign also mobilized community-level monitoring to track implementation commitments.",
  },
  {
    id: 3,
    title: "Upcoming: Regional Human Rights Summit",
    date: "April 1, 2026",
    body:
      "The summit convenes defenders, legal experts, and institutions to strengthen coordinated response mechanisms. Sessions will focus on defender safety, legal aid systems, and digital rights protections.",
  },
  {
    id: 4,
    title: "URGENT: Statement on Recent Events",
    date: "March 30, 2026",
    body:
      "EHRDC reiterates its call for independent investigations and accountability measures concerning recent incidents. Immediate protections are required for at-risk defenders and affected communities.",
  },
  {
    id: 5,
    title: "Training Workshop: Know Your Rights",
    date: "March 28, 2026",
    body:
      "This announcement introduces a community-centered legal awareness workshop series. The training is designed to increase practical understanding of legal rights and available referral pathways.",
  },
  {
    id: 6,
    title: "Research Paper: Digital Rights in Modern Society",
    date: "March 25, 2026",
    body:
      "The paper examines surveillance risks, online expression limits, and privacy concerns within evolving digital spaces. It proposes policy and practice actions to strengthen rights-based digital governance.",
  },
];

export function NewsDetail() {
  const { id } = useParams();
  const item = newsDetails.find((entry) => String(entry.id) === id);

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="mb-4 text-muted-foreground">News article not found.</p>
        <Link to="/news">
          <Button>Back to News</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <h1 className="text-3xl">{item.title}</h1>
          <p className="text-sm text-muted-foreground">{item.date}</p>
          <p>{item.body}</p>
          <Link to="/news">
            <Button variant="outline">Back to News</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
