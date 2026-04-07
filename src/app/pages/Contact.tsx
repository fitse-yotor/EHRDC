import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll get back to you within 24 hours.");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're here to help. Reach out to us for inquiries, support, or to learn more
            about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Main Office</h4>
                    <p className="text-sm text-muted-foreground">
                      Bole Road, Friendship Business Center
                      <br />
                      5th floor, Office number 504/2
                      <br />
                      Addis Ababa, Ethiopia
                    </p>
                    <a
                      href="https://maps.app.goo.gl/wfeAg9r45hr6eRPB8"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm text-primary hover:underline"
                    >
                      Open Office Location on Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">
                      Main: +251-XXX-XXXX
                      <br />
                      Hotline: +251-YYY-YYYY
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      General:{" "}
                      <a
                        href="mailto:info@humanrights.org"
                        className="text-primary hover:underline"
                      >
                        info@humanrights.org
                      </a>
                      <br />
                      Press:{" "}
                      <a
                        href="mailto:press@humanrights.org"
                        className="text-primary hover:underline"
                      >
                        press@humanrights.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="mb-1">Office Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Hotline */}
            <Card className="border-primary bg-primary/5">
              <CardHeader>
                <CardTitle className="text-primary">24/7 Emergency Hotline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent human rights violations requiring immediate assistance:
                </p>
                <div className="text-2xl text-primary mb-2">+251-ZZZ-ZZZZ</div>
                <p className="text-xs text-muted-foreground">
                  Available 24 hours a day, 7 days a week
                </p>
              </CardContent>
            </Card>

            {/* Regional Offices */}
            <Card>
              <CardHeader>
                <CardTitle>Regional Offices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="mb-1">Northern Region Office</h4>
                  <p className="text-muted-foreground">City Name • +251-AAA-AAAA</p>
                </div>
                <div>
                  <h4 className="mb-1">Southern Region Office</h4>
                  <p className="text-muted-foreground">City Name • +251-BBB-BBBB</p>
                </div>
                <div>
                  <h4 className="mb-1">Eastern Region Office</h4>
                  <p className="text-muted-foreground">City Name • +251-CCC-CCCC</p>
                </div>
                <div>
                  <h4 className="mb-1">Western Region Office</h4>
                  <p className="text-muted-foreground">City Name • +251-DDD-DDDD</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
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

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Please provide details about your inquiry..."
                      required
                    />
                  </div>

                  <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                    <p>
                      <strong>Note:</strong> If you need to report a human rights violation,
                      please use our{" "}
                      <a href="/report-case" className="text-primary hover:underline">
                        secure case reporting form
                      </a>{" "}
                      instead. This general contact form is not encrypted.
                    </p>
                  </div>

                  <Button type="submit" className="bg-primary hover:bg-primary/90 w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="mt-6">
              <CardContent className="pt-6">
                <div className="rounded-lg border border-primary/10 bg-muted p-6">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="mx-auto mb-2 h-12 w-12 text-primary" />
                    <p className="mb-2 text-foreground">EHRDC Office Location</p>
                    <p className="text-sm">
                      Bole Road, Friendship Business Center, 5th Floor, Office 504/2
                    </p>
                    <a
                      href="https://maps.app.goo.gl/wfeAg9r45hr6eRPB8"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-sm text-primary hover:underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media */}
        <Card className="mt-12 bg-muted">
          <CardContent className="py-8 text-center">
            <h3 className="text-2xl mb-4">Follow Us on Social Media</h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with our latest news, campaigns, and impact stories
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline">Facebook</Button>
              <Button variant="outline">Twitter</Button>
              <Button variant="outline">Instagram</Button>
              <Button variant="outline">LinkedIn</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
