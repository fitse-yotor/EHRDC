import { useParams, Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import {
  Users,
  Share2,
  Heart,
  MessageCircle,
  Calendar,
  Target,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { toast } from "sonner";

const campaignData = {
  id: 1,
  title: "Protect Freedom of Expression",
  status: "active",
  image: "https://images.unsplash.com/photo-1664866651877-b42cea398f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RpdmlzbSUyMGNhbXBhaWduJTIwcG9zdGVyJTIwZGVtb25zdHJhdGlvbnxlbnwxfHx8fDE3NzU1NDY2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  description:
    "Defending journalists, activists, and citizens' right to free speech and peaceful assembly.",
  longDescription: `
    Freedom of expression is a fundamental human right that enables all other rights. 
    However, across our region, journalists, activists, and ordinary citizens face increasing 
    threats for speaking out. This campaign aims to:
    
    • Protect journalists and media workers from harassment and intimidation
    • Advocate for the repeal of restrictive laws that limit free speech
    • Support legal defense for those prosecuted for peaceful expression
    • Raise public awareness about the importance of free speech
    • Create safe spaces for dialogue and dissent
    
    Your support helps us provide legal aid, conduct advocacy, and protect those who dare to speak truth.
  `,
  supporters: 12500,
  goal: 20000,
  category: "Civil Liberties",
  startDate: "January 15, 2026",
  updates: [
    {
      date: "April 5, 2026",
      title: "Major Victory: Court Rules in Favor of Press Freedom",
      content:
        "The Supreme Court ruled that the restrictive media law violates constitutional protections for free speech.",
    },
    {
      date: "March 28, 2026",
      title: "1000+ Journalists Sign Open Letter",
      content:
        "Media professionals across the country united to demand stronger protections.",
    },
    {
      date: "March 15, 2026",
      title: "Public Rally Draws Record Crowd",
      content:
        "Over 5,000 citizens joined our peaceful demonstration for free expression rights.",
    },
  ],
  milestones: [
    { target: 5000, title: "Launch legal aid fund", achieved: true },
    { target: 10000, title: "Submit petition to parliament", achieved: true },
    { target: 15000, title: "Organize national awareness campaign", achieved: false },
    { target: 20000, title: "Establish press freedom hotline", achieved: false },
  ],
};

export function CampaignDetail() {
  const { id } = useParams();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for joining the campaign! You'll receive updates via email.");
  };

  const handleShare = () => {
    toast.success("Campaign link copied to clipboard!");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/campaigns" className="text-secondary hover:underline mb-4 inline-block">
            ← Back to Campaigns
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>{campaignData.category}</Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary">
              ACTIVE
            </Badge>
          </div>
          <h1 className="text-4xl mb-4">{campaignData.title}</h1>
          <p className="text-muted-foreground text-lg">{campaignData.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative h-96 rounded-lg overflow-hidden">
              <ImageWithFallback
                src={campaignData.image}
                alt={campaignData.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* About */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl mb-4">About This Campaign</h2>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground whitespace-pre-line">
                    {campaignData.longDescription}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl mb-6">Campaign Milestones</h2>
                <div className="space-y-4">
                  {campaignData.milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        {milestone.achieved ? (
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-white text-lg">✓</span>
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full border-2 border-muted flex items-center justify-center">
                            <Target className="h-4 w-4 text-muted-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={milestone.achieved ? "" : "text-muted-foreground"}>
                            {milestone.title}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            {milestone.target.toLocaleString()} supporters
                          </span>
                        </div>
                        {!milestone.achieved && (
                          <Progress
                            value={(campaignData.supporters / milestone.target) * 100}
                            className="h-2"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl mb-6">Campaign Updates</h2>
                <div className="space-y-6">
                  {campaignData.updates.map((update, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {update.date}
                      </div>
                      <h4 className="mb-2">{update.title}</h4>
                      <p className="text-muted-foreground">{update.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Join Card */}
            <Card className="sticky top-20">
              <CardContent className="pt-6 space-y-6">
                {/* Progress */}
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <div className="text-3xl">
                      {campaignData.supporters.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      of {campaignData.goal.toLocaleString()} goal
                    </div>
                  </div>
                  <Progress
                    value={(campaignData.supporters / campaignData.goal) * 100}
                    className="h-3 mb-2"
                  />
                  <p className="text-sm text-muted-foreground">
                    {Math.round((campaignData.supporters / campaignData.goal) * 100)}% complete
                  </p>
                </div>

                {/* Join Form */}
                <form onSubmit={handleJoin} className="space-y-4">
                  <div>
                    <h3 className="mb-4">Join This Campaign</h3>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Why are you joining? (Optional)</Label>
                        <Textarea id="message" rows={3} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox id="updates" defaultChecked />
                    <label htmlFor="updates" className="text-sm cursor-pointer">
                      Send me updates about this campaign
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Users className="mr-2 h-4 w-4" />
                    Join Campaign
                  </Button>
                </form>

                {/* Social Actions */}
                <div className="pt-4 border-t space-y-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={handleShare}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Campaign
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Donate
                  </Button>
                </div>

                {/* Stats */}
                <div className="pt-4 border-t grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl text-primary">
                      {campaignData.supporters.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Supporters</div>
                  </div>
                  <div>
                    <div className="text-2xl text-secondary">
                      {campaignData.updates.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Updates</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
