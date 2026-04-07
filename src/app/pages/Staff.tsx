import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const staffMembers = [
  { name: "Yared Hailemariam", role: "Executive Director" },
  { name: "Tarikawit Fikadu", role: "Program Director" },
  { name: "Kalkidan Tesfaye", role: "Advocacy and Communications Manager" },
  { name: "Bersabeh Solomon", role: "Program and Resource Mobilization Manager" },
  { name: "Noah Yesuf", role: "Protection and Research Manager" },
  { name: "Leilt Tilahun", role: "Administrative Manager" },
  { name: "Fikadu Dufera", role: "Finance Manager" },
  { name: "Hana Lale", role: "Advocacy and Communications Officer" },
  { name: "Hewan Ayalew", role: "Finance Officer" },
  { name: "Rediet Gezahegne", role: "Junior Program Officer" },
  { name: "Natnael Tilahun", role: "Junior Finance and Admin Officer" },
];

export function Staff() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl mb-3">EHRDC Staff</h1>
        <p className="mb-8 text-muted-foreground">
          Core team members working across programs, advocacy, protection, and operations.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((staff) => (
            <Card key={staff.name} className="shadow-sm">
              <CardContent className="pt-6">
                <ImageWithFallback
                  src={`https://placehold.co/420x280/f1f3f5/495057?text=${encodeURIComponent(staff.name)}`}
                  alt={`${staff.name} placeholder`}
                  className="mb-4 h-44 w-full rounded-md object-cover"
                />
                <h3 className="text-lg">{staff.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{staff.role}</p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
