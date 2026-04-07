import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import { Users, Heart, Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function Membership() {
  const [step, setStep] = useState(1);
  const [membershipType, setMembershipType] = useState("individual");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for joining! We'll send you a confirmation email shortly.");
    setStep(3);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Join the Movement</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Become a member and help us defend human rights for all. Together, we can
            create lasting change.
          </p>
        </div>

        {step === 1 && (
          <div className="space-y-8">
            {/* Membership Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Individual Member</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl">Free</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Monthly newsletter</li>
                    <li>✓ Event invitations</li>
                    <li>✓ Volunteer opportunities</li>
                    <li>✓ Campaign updates</li>
                  </ul>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => {
                      setMembershipType("individual");
                      setStep(2);
                    }}
                  >
                    Join as Individual
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2 border-transparent hover:border-secondary">
                <CardHeader>
                  <Users className="h-12 w-12 text-secondary mb-4" />
                  <CardTitle>Partner Organization</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl">Contact Us</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ All individual benefits</li>
                    <li>✓ Collaboration opportunities</li>
                    <li>✓ Resource sharing</li>
                    <li>✓ Joint campaigns</li>
                  </ul>
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/90"
                    onClick={() => {
                      setMembershipType("organization");
                      setStep(2);
                    }}
                  >
                    Partner with Us
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2 border-transparent hover:border-accent">
                <CardHeader>
                  <Heart className="h-12 w-12 text-accent mb-4" />
                  <CardTitle>Donor & Supporter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl">Any Amount</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ All individual benefits</li>
                    <li>✓ Donor recognition</li>
                    <li>✓ Annual impact report</li>
                    <li>✓ Exclusive updates</li>
                  </ul>
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={() => {
                      setMembershipType("donor");
                      setStep(2);
                    }}
                  >
                    Become a Donor
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Why Join Section */}
            <Card className="bg-muted">
              <CardContent className="py-8">
                <h3 className="text-2xl mb-6 text-center">Why Join Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Make Real Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        Your membership directly supports our advocacy work and helps us
                        defend human rights across the region.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Join a Community</h4>
                      <p className="text-sm text-muted-foreground">
                        Connect with like-minded individuals and organizations working
                        towards common goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Stay Informed</h4>
                      <p className="text-sm text-muted-foreground">
                        Get exclusive updates on our work, campaigns, and human rights
                        developments.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="mb-2">Access Resources</h4>
                      <p className="text-sm text-muted-foreground">
                        Access educational materials, training opportunities, and expert
                        guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                {membershipType === "individual" && "Individual Membership Registration"}
                {membershipType === "organization" && "Partner Organization Registration"}
                {membershipType === "donor" && "Donor Registration"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>

                {membershipType === "organization" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name *</Label>
                      <Input id="orgName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgType">Organization Type *</Label>
                      <Input id="orgType" placeholder="e.g., NGO, Community Group" required />
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <Label>Interests (select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Legal Advocacy",
                      "Community Organizing",
                      "Research & Policy",
                      "Education & Training",
                      "Media & Communications",
                      "Fundraising",
                    ].map((interest) => (
                      <div key={interest} className="flex items-center gap-2">
                        <Checkbox id={interest} />
                        <label htmlFor={interest} className="text-sm cursor-pointer">
                          {interest}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>How would you like to contribute?</Label>
                  <RadioGroup defaultValue="volunteer">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="volunteer" id="volunteer" />
                      <label htmlFor="volunteer" className="cursor-pointer">
                        Volunteer my time and skills
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="donate" id="donate" />
                      <label htmlFor="donate" className="cursor-pointer">
                        Financial support
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="both" id="both" />
                      <label htmlFor="both" className="cursor-pointer">
                        Both
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="newsletter" defaultChecked />
                  <label htmlFor="newsletter" className="text-sm cursor-pointer">
                    Subscribe to monthly newsletter
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <Checkbox id="terms" required />
                  <label htmlFor="terms" className="text-sm cursor-pointer">
                    I agree to the terms and conditions *
                  </label>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    Complete Registration
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="text-center">
            <CardContent className="py-12">
              <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
              <h2 className="text-3xl mb-4">Welcome to the Movement!</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Thank you for joining us. You'll receive a confirmation email shortly with
                more information about your membership and how to get involved.
              </p>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => setStep(1)}
              >
                Register Another Member
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
