import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { AlertCircle, Shield, Lock, CheckCircle, Upload } from "lucide-react";
import { toast } from "sonner";

export function ReportCase() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your case has been submitted securely. We will review it promptly.");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="text-center">
            <CardContent className="py-12">
              <CheckCircle className="h-20 w-20 text-primary mx-auto mb-6" />
              <h2 className="text-3xl mb-4">Case Report Submitted</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Thank you for reporting this case. Your submission has been received
                securely and will be reviewed by our team. We will contact you{" "}
                {isAnonymous ? "through secure channels" : "via the contact information provided"}{" "}
                if we need additional information.
              </p>
              <div className="bg-muted p-4 rounded-lg mb-6">
                <p className="text-sm">
                  <strong>Reference Number:</strong> HR-2026-{Math.floor(Math.random() * 10000)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Please save this reference number for future correspondence.
                </p>
              </div>
              <Button
                className="bg-primary hover:bg-primary/90"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-4">Report a Human Rights Violation</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your safety and privacy are our top priorities. All reports are handled with
            strict confidentiality.
          </p>
        </div>

        {/* Security Notice */}
        <Card className="mb-8 border-primary/50 bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-2">Your Security Matters</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ All submissions are encrypted and stored securely</li>
                  <li>✓ You can choose to report anonymously</li>
                  <li>✓ Your information will only be used for case investigation</li>
                  <li>✓ We never share your details without your explicit consent</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Case Report Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Anonymous Option */}
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="anonymous"
                    checked={isAnonymous}
                    onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                  />
                  <div className="flex-1">
                    <label htmlFor="anonymous" className="cursor-pointer">
                      <div className="flex items-center gap-2 mb-2">
                        <Lock className="h-4 w-4 text-primary" />
                        <span>Submit this report anonymously</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        If selected, you won't need to provide your personal information.
                        However, we recommend providing contact details so we can update you
                        on the case progress.
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Reporter Information (conditional) */}
              {!isAnonymous && (
                <div className="space-y-4 p-4 border rounded-lg">
                  <h3 className="text-lg">Your Information (Optional but Recommended)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="reporterName">Full Name</Label>
                      <Input id="reporterName" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reporterPhone">Phone Number</Label>
                      <Input id="reporterPhone" type="tel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reporterEmail">Email</Label>
                    <Input id="reporterEmail" type="email" />
                  </div>
                </div>
              )}

              {/* Case Details */}
              <div className="space-y-4">
                <h3 className="text-lg">Case Details</h3>

                <div className="space-y-2">
                  <Label htmlFor="violationType">Type of Violation *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="freedom-expression">
                        Freedom of Expression
                      </SelectItem>
                      <SelectItem value="arbitrary-detention">
                        Arbitrary Detention
                      </SelectItem>
                      <SelectItem value="torture">Torture or Ill-Treatment</SelectItem>
                      <SelectItem value="discrimination">Discrimination</SelectItem>
                      <SelectItem value="economic-rights">Economic Rights Violation</SelectItem>
                      <SelectItem value="access-justice">Lack of Access to Justice</SelectItem>
                      <SelectItem value="gender-based">Gender-Based Violence</SelectItem>
                      <SelectItem value="child-rights">Child Rights Violation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location of Incident *</Label>
                  <Input id="location" placeholder="City, Region" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="incidentDate">Date of Incident *</Label>
                  <Input id="incidentDate" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    rows={6}
                    placeholder="Please provide as much detail as possible about what happened, who was involved, and any witnesses..."
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Include: What happened? Who was involved? Were there witnesses? What was
                    the outcome?
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Who was affected?</Label>
                  <RadioGroup defaultValue="self">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="self" id="self" />
                      <label htmlFor="self" className="cursor-pointer">
                        Myself
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="other" id="other" />
                      <label htmlFor="other" className="cursor-pointer">
                        Someone else (witness)
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="group" id="group" />
                      <label htmlFor="group" className="cursor-pointer">
                        A group of people
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="victimsCount">Number of Victims</Label>
                  <Input id="victimsCount" type="number" min="1" defaultValue="1" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="evidence">
                    Evidence or Supporting Documents
                  </Label>
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload photos, documents, or other evidence (Optional)
                    </p>
                    <Button type="button" variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Accepted formats: PDF, JPG, PNG, DOC. Max size: 10MB per file
                  </p>
                </div>
              </div>

              {/* Previous Reporting */}
              <div className="space-y-4">
                <h3 className="text-lg">Previous Actions</h3>
                <div className="space-y-2">
                  <Label>
                    Have you reported this to any other authority?
                  </Label>
                  <RadioGroup defaultValue="no">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="reported-no" />
                      <label htmlFor="reported-no" className="cursor-pointer">
                        No
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="reported-yes" />
                      <label htmlFor="reported-yes" className="cursor-pointer">
                        Yes (please specify below)
                      </label>
                    </div>
                  </RadioGroup>
                  <Textarea
                    placeholder="If yes, please specify which authorities and what action was taken..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Urgency */}
              <div className="space-y-2">
                <Label>Urgency Level</Label>
                <RadioGroup defaultValue="normal">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="urgent" id="urgent" />
                    <label htmlFor="urgent" className="cursor-pointer">
                      <strong className="text-destructive">Urgent</strong> - Immediate risk
                      to safety
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="high" id="high" />
                    <label htmlFor="high" className="cursor-pointer">
                      High - Needs prompt attention
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="normal" id="normal" />
                    <label htmlFor="normal" className="cursor-pointer">
                      Normal - Standard processing
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {/* Consent */}
              <div className="space-y-4 p-4 bg-muted rounded-lg">
                <div className="flex items-start gap-2">
                  <Checkbox id="consent" required />
                  <label htmlFor="consent" className="text-sm cursor-pointer">
                    I consent to the Human Rights Commission investigating this case and
                    understand that my information will be kept confidential *
                  </label>
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="accuracy" required />
                  <label htmlFor="accuracy" className="text-sm cursor-pointer">
                    I confirm that the information provided is accurate to the best of my
                    knowledge *
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 flex-1"
                >
                  <Shield className="mr-2 h-4 w-4" />
                  Submit Report Securely
                </Button>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Need help or have questions?{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    Contact us
                  </a>{" "}
                  or call our hotline: <strong>+251-XXX-XXXX</strong>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
