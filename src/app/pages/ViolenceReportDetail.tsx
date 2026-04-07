import { Link, useParams } from "react-router";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { violenceReports } from "../data/violenceReports";

const statusStyles = {
  urgent: "bg-[#C62828] text-white",
  verified: "bg-[#1976D2] text-white",
  review: "bg-[#F9A825] text-white",
} as const;

const statusLabels = {
  urgent: "Urgent",
  verified: "Verified",
  review: "Under Review",
} as const;

export function ViolenceReportDetail() {
  const { id } = useParams();
  const report = violenceReports.find((item) => String(item.id) === id);

  if (!report) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="mb-4 text-muted-foreground">Report not found.</p>
        <Link to="/violence-reporting-map">
          <Button>Back to Reports Map</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Card>
        <CardContent className="space-y-5 pt-6">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-3xl">{report.title}</h1>
            <Badge className={statusStyles[report.status]}>{statusLabels[report.status]}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">{report.caseId}</p>
          <p>{report.description}</p>
          <div className="grid gap-3 rounded-md border p-4 text-sm md:grid-cols-2">
            <p><strong>Location:</strong> {report.location}</p>
            <p><strong>Date:</strong> {report.date}</p>
            <p><strong>Latitude:</strong> {report.latitude}</p>
            <p><strong>Longitude:</strong> {report.longitude}</p>
          </div>
          <Link to="/violence-reporting-map">
            <Button variant="outline">Back to Reports Map</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
