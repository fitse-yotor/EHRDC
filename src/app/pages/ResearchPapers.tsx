import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const papers = [
  { title: "Digital Rights and Civic Space 2026", type: "PDF" },
  { title: "Women Human Rights Defenders Status Brief", type: "Word" },
  { title: "Election Period HRD Safety Findings", type: "PPT" },
];

export function ResearchPapers() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl mb-3">Research Papers</h1>
        <p className="mb-8 text-muted-foreground">Mock publication library for research outputs.</p>
        <div className="space-y-4">
          {papers.map((item) => (
            <Card key={item.title}>
              <CardContent className="flex items-center justify-between gap-4 pt-6">
                <div>
                  <h3>{item.title}</h3>
                  <Badge variant="secondary" className="mt-2">{item.type}</Badge>
                </div>
                <Button variant="outline">Download</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
