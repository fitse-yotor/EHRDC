import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";

export function Protection() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Protection intake submitted successfully.");
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="mx-auto max-w-3xl text-center">
          <CardContent className="py-10">
            <h1 className="text-3xl mb-3">Protection Intake Received</h1>
            <p className="text-muted-foreground">
              Thank you. Our protection team will review your form and contact you where needed.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl mb-3">Protection Intake Form</h1>
        <p className="mb-8 text-muted-foreground">
          Submit your protection request. This is currently running in no-backend mode.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Intake Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label>Full Name</Label>
                <Input required />
              </div>
              <div className="space-y-2">
                <Label>Date</Label>
                <Input type="date" required />
              </div>
              <div className="space-y-2">
                <Label>Date of Birth</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label>Current Nationality</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Passport Number</Label>
                <Input />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Home Address (country of origin)</Label>
                <Input />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Present Address (city and country)</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" />
              </div>
              <div className="space-y-2">
                <Label>Telephone Number</Label>
                <Input type="tel" />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <Input placeholder="Female / Male" />
              </div>
              <div className="space-y-2">
                <Label>Marital Status</Label>
                <Input placeholder="Single / Married / Divorce" />
              </div>
              <div className="space-y-2">
                <Label>Number of Children</Label>
                <Input type="number" min="0" />
              </div>
              <div className="space-y-2">
                <Label>Profession</Label>
                <Input />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Position Held</Label>
                <Input />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>
                  Have you received assistance from another organization? (name and type)
                </Label>
                <Textarea rows={3} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Any special needs (monitoring, counseling, etc.)</Label>
                <Textarea rows={3} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Emergency Contact (name, phone, email)</Label>
                <Textarea rows={3} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label>Attach passport or ID document</Label>
                <Input type="file" />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit Intake Form
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
