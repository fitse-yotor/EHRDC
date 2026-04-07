import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Regional Human Rights Summit 2026",
    date: "May 15-17, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Convention Center, Capital City",
    type: "Conference",
    attendees: 500,
    description:
      "Three-day summit bringing together activists, policymakers, and communities to discuss pressing human rights challenges and solutions. Features keynote speakers, panel discussions, and networking opportunities.",
    status: "open",
  },
  {
    id: 2,
    title: "Know Your Rights Workshop",
    date: "April 20, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Community Center, District 5",
    type: "Workshop",
    attendees: 50,
    description:
      "Free community workshop to educate citizens about their fundamental rights and how to access justice mechanisms. Interactive session with Q&A.",
    status: "open",
  },
  {
    id: 3,
    title: "Youth Leadership Training",
    date: "April 25-27, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Youth Center, Riverside",
    type: "Training",
    attendees: 30,
    description:
      "Intensive three-day training program for young human rights advocates. Learn advocacy skills, campaign planning, and community organizing.",
    status: "open",
  },
  {
    id: 4,
    title: "International Human Rights Day Celebration",
    date: "December 10, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "City Square",
    type: "Event",
    attendees: 1000,
    description:
      "Annual celebration marking International Human Rights Day with cultural performances, speeches, and community recognition awards.",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Legal Aid Clinic",
    date: "Every Friday",
    time: "9:00 AM - 12:00 PM",
    location: "Main Office",
    type: "Clinic",
    attendees: 20,
    description:
      "Free legal consultation for individuals facing human rights violations. Walk-in or by appointment.",
    status: "recurring",
  },
];

export function Events() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-secondary">Registration Open</Badge>;
      case "upcoming":
        return <Badge variant="outline">Upcoming</Badge>;
      case "recurring":
        return <Badge className="bg-accent text-accent-foreground">Recurring</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">Events Calendar</h1>
          <p className="text-muted-foreground text-lg">
            Join our workshops, training sessions, and community events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar View (placeholder) */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {events.slice(0, 4).map((event) => (
                    <div key={event.id} className="p-3 bg-muted rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">
                        {event.date}
                      </div>
                      <div className="text-sm">{event.title}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-2 space-y-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex gap-2">
                      <Badge variant="outline">{event.type}</Badge>
                      {getStatusBadge(event.status)}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{event.attendees} max attendees</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{event.description}</p>
                  {event.status === "open" && (
                    <Button className="bg-primary hover:bg-primary/90">
                      Register Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
