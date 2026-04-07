import { Link, useParams } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const trainingDetails = [
  {
    id: 1,
    title: "Digital Safety for Human Rights Defenders",
    body:
      "This training equips defenders with secure communication techniques, account safety practices, and practical incident response methods. Participants complete real-world simulation exercises and build individual digital risk plans.",
  },
  {
    id: 2,
    title: "Legal Literacy and Case Documentation Workshop",
    body:
      "The workshop focuses on legal basics, evidence handling, witness protection, and case documentation standards. It supports consistent and reliable referral pathways for legal aid and emergency response.",
  },
  {
    id: 3,
    title: "Community Advocacy and Campaign Strategy",
    body:
      "This training develops participant skills in advocacy planning, campaign messaging, and coalition building. Sessions include practical frameworks for influencing policy and engaging local communities.",
  },
];

export function CapacityBuildingDetail() {
  const { id } = useParams();
  const training = trainingDetails.find((item) => String(item.id) === id);

  if (!training) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="mb-4 text-muted-foreground">Training article not found.</p>
        <Link to="/capacity-building">
          <Button>Back to Capacity Building</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Card>
        <CardContent className="space-y-5 pt-6">
          <h1 className="text-3xl">{training.title}</h1>
          <ImageWithFallback
            src={`https://placehold.co/1200x500/eef2ff/334155?text=Training+${training.id}`}
            alt={training.title}
            className="h-64 w-full rounded-lg object-cover"
          />
          <p className="text-muted-foreground">{training.body}</p>
          <Link to="/capacity-building">
            <Button variant="outline">Back to Capacity Building</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
