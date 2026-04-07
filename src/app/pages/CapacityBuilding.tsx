import { Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const trainings = [
  {
    id: 1,
    title: "Digital Safety for Human Rights Defenders",
    summary:
      "A practical training focused on secure communication, account protection, and online risk mitigation.",
  },
  {
    id: 2,
    title: "Legal Literacy and Case Documentation Workshop",
    summary:
      "Participants learned how to document violations, preserve evidence, and navigate legal referral pathways.",
  },
  {
    id: 3,
    title: "Community Advocacy and Campaign Strategy",
    summary:
      "A regional workshop on advocacy planning, stakeholder mapping, and campaign message design.",
  },
];

export function CapacityBuilding() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl mb-3">Capacity Building</h1>
        <p className="mb-8 text-muted-foreground">
          Training updates and practical learning programs delivered by EHRDC.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {trainings.map((training) => (
            <Card key={training.id}>
              <CardContent className="pt-6">
                <ImageWithFallback
                  src={`https://placehold.co/640x380/eef2ff/334155?text=Training+${training.id}`}
                  alt={`${training.title} placeholder`}
                  className="mb-4 h-44 w-full rounded-md object-cover"
                />
                <h3 className="text-lg mb-2">{training.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{training.summary}</p>
                <Link to="/capacity-building">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
