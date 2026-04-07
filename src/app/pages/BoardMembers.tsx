import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const boardMembers = [
  {
    name: "Mesud Gebeyehu",
    role: "Board Chairman",
    org: "Executive Director of Consortium for Ethiopian Human Rights Organizations (CEHRO)",
  },
  {
    name: "Lensa Biyena",
    role: "Vice Board of Directors",
    org: "Executive Directress of Ethiopian Women Lawyers Association (EWLA)",
  },
  {
    name: "Dan Yirga",
    role: "Member",
    org: "Executive Director of Ethiopian Human Rights Council (EHRCO)",
  },
  {
    name: "Dagneachew Melese",
    role: "Member",
    org: "Executive Director of Advocates Ethiopia",
  },
  {
    name: "Tsegemariam Alawi",
    role: "Member",
    org: "Executive Directress of Sarah Justice for All",
  },
];

export function BoardMembers() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl mb-3">EHRDC Board of Directors</h1>
        <p className="mb-8 text-muted-foreground">
          Leadership and governance members guiding EHRDC strategy and oversight.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {boardMembers.map((member) => (
            <Card key={member.name} className="shadow-sm">
              <CardContent className="pt-6">
                <ImageWithFallback
                  src={`https://placehold.co/480x320/e9ecef/495057?text=${encodeURIComponent(member.name)}`}
                  alt={`${member.name} placeholder`}
                  className="mb-4 h-48 w-full rounded-md object-cover"
                />
                <Badge className="mb-2">{member.role}</Badge>
                <h3 className="text-xl mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.org}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
