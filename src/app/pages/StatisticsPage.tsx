import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

const statsFiles = [
  { title: "Annual Incident Statistics Dashboard Pack", type: "PPT" },
  { title: "Regional Case Trends Dataset", type: "Word" },
  { title: "Quarterly Indicators Snapshot", type: "PDF" },
];

export function StatisticsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl mb-3">Statistics</h1>
        <p className="mb-8 text-muted-foreground">Mock statistics publication files.</p>
        <div className="space-y-4">
          {statsFiles.map((item) => (
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
