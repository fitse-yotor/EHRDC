import { Link, useParams } from "react-router";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { jobs } from "../data/jobs";
import { Briefcase, DollarSign, MapPin } from "lucide-react";

export function JobDetail() {
  const { id } = useParams();
  const job = jobs.find((item) => String(item.id) === id);

  if (!job) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="mb-4 text-muted-foreground">Job post not found.</p>
        <Link to="/jobs">
          <Button>Back to Jobs</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Card>
        <CardHeader>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <Badge>{job.type}</Badge>
            <Badge variant="outline">{job.department}</Badge>
          </div>
          <CardTitle className="text-3xl">{job.title}</CardTitle>
          <p className="text-sm text-muted-foreground">Posted {job.posted}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              {job.location}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Briefcase className="h-4 w-4 text-primary" />
              {job.type}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="h-4 w-4 text-primary" />
              {job.salary}
            </div>
          </div>
          <p className="text-muted-foreground">{job.description}</p>
          <div>
            <h3 className="mb-2">Requirements</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {job.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href={`mailto:EHRDCenter@ethdefenders.org?subject=Application%20for%20${encodeURIComponent(job.title)}`}>
                Apply Now
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/jobs">Back to Jobs</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
