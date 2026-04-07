import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Briefcase, MapPin, Clock, DollarSign } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Human Rights Lawyer",
    type: "Full-time",
    location: "Capital City",
    department: "Legal",
    salary: "Competitive",
    posted: "April 1, 2026",
    description:
      "Lead strategic litigation cases and provide legal guidance to our advocacy team.",
    requirements: [
      "Law degree and bar admission",
      "7+ years human rights law experience",
      "Strong litigation skills",
      "Excellent communication abilities",
    ],
  },
  {
    id: 2,
    title: "Community Outreach Coordinator",
    type: "Full-time",
    location: "Northern Region",
    department: "Programs",
    salary: "$35,000 - $45,000",
    posted: "March 28, 2026",
    description:
      "Design and implement community empowerment programs and train local advocates.",
    requirements: [
      "Bachelor's degree in relevant field",
      "3+ years community organizing experience",
      "Fluency in English and Amharic",
      "Strong interpersonal skills",
    ],
  },
  {
    id: 3,
    title: "Research and Policy Analyst",
    type: "Full-time",
    location: "Capital City",
    department: "Research",
    salary: "$40,000 - $50,000",
    posted: "March 25, 2026",
    description:
      "Conduct research on human rights issues and develop policy recommendations.",
    requirements: [
      "Master's degree preferred",
      "Strong research and analytical skills",
      "Excellent writing abilities",
      "Knowledge of human rights frameworks",
    ],
  },
  {
    id: 4,
    title: "Communications Officer",
    type: "Full-time",
    location: "Capital City (Hybrid)",
    department: "Communications",
    salary: "$38,000 - $48,000",
    posted: "March 22, 2026",
    description:
      "Manage media relations, create content, and amplify our campaigns and advocacy work.",
    requirements: [
      "Bachelor's in Communications or related field",
      "3+ years in communications/PR",
      "Strong writing and social media skills",
      "Experience with multimedia content creation",
    ],
  },
  {
    id: 5,
    title: "Legal Aid Intern",
    type: "Internship",
    location: "Various",
    department: "Legal",
    salary: "Stipend provided",
    posted: "March 20, 2026",
    description:
      "Support our legal team in case research, documentation, and client assistance.",
    requirements: [
      "Law student (2nd year or above)",
      "Strong research skills",
      "Passion for human rights",
      "Commitment of 3-6 months",
    ],
  },
  {
    id: 6,
    title: "Volunteer Coordinator",
    type: "Part-time",
    location: "Capital City",
    department: "Programs",
    salary: "$25,000 - $30,000",
    posted: "March 18, 2026",
    description:
      "Recruit, train, and manage volunteers for our various programs and campaigns.",
    requirements: [
      "2+ years volunteer management experience",
      "Strong organizational skills",
      "Excellent communication abilities",
      "Passion for community engagement",
    ],
  },
];

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
                  <Button className="bg-primary hover:bg-primary/90">
                    Apply Now
                  </Button>
                  <Button variant="outline">View Full Details</Button>
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
