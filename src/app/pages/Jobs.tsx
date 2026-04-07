import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Briefcase, MapPin, DollarSign } from "lucide-react";
import { Link } from "react-router";
import { jobs } from "../data/jobs";

export function Jobs() {
  const getTypeBadge = (type: string) => {
    if (type === "Full-time") return "default";
    if (type === "Part-time") return "secondary";
    return "outline";
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">Jobs & Opportunities</h1>
          <p className="text-muted-foreground text-lg">
            Join our team and make a real difference in protecting human rights
          </p>
        </div>

        {/* Why Work With Us */}
        <Card className="mb-12 bg-muted">
          <CardContent className="py-8">
            <h2 className="text-2xl mb-6 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Meaningful Work",
                  description: "Make real impact on people's lives every day",
                },
                {
                  title: "Professional Growth",
                  description: "Learning and development opportunities",
                },
                {
                  title: "Supportive Team",
                  description: "Collaborative and inclusive work environment",
                },
                {
                  title: "Competitive Benefits",
                  description: "Health insurance, paid leave, and more",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <h4 className="mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="space-y-6">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div className="flex gap-2">
                    <Badge variant={getTypeBadge(job.type) as any}>{job.type}</Badge>
                    <Badge variant="outline">{job.department}</Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">Posted {job.posted}</span>
                </div>
                <CardTitle className="text-2xl">{job.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div>
                    <h4 className="mb-2">Key Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href={`mailto:EHRDCenter@ethdefenders.org?subject=Application%20for%20${encodeURIComponent(job.title)}`}>
                      Apply Now
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to={`/jobs/${job.id}`}>View Full Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Volunteer Section */}
        <Card className="mt-12 bg-secondary text-white">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl mb-4 text-white">Volunteer With Us</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white">
              Can't commit to a full-time role? Join our volunteer program and contribute
              your skills and time to support our mission.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-secondary hover:bg-white/90 border-white"
            >
              Learn About Volunteering
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
