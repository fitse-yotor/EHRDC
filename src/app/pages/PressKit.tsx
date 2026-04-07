import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Download, Image as ImageIcon, FileText, Palette } from "lucide-react";

export function PressKit() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">Press Kit</h1>
          <p className="text-muted-foreground text-lg">
            Media resources, brand assets, and contact information for journalists and
            media professionals
          </p>
        </div>

        {/* Media Contact */}
        <Card className="mb-12 border-l-4 border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">Media Inquiries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="mb-2">
                <strong>Press Contact:</strong> Sarah Kimani
              </p>
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:press@humanrights.org" className="text-primary hover:underline">
                  press@humanrights.org
                </a>
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +251-XXX-XXXX (Available 9 AM - 5 PM)
              </p>
              <p className="text-muted-foreground">
                For urgent media inquiries outside business hours, please call our emergency
                hotline.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Organization Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">About Our Organization</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2">Boilerplate</h4>
              <p className="text-muted-foreground bg-muted p-4 rounded-lg">
                The Human Rights Commission is an independent organization dedicated to
                defending and promoting human rights for all people. Since 2015, we have
                provided legal support, advocacy, and community empowerment services,
                handling over 2,500 cases and supporting more than 15,000 individuals across
                12 regions. Our work focuses on freedom of expression, access to justice,
                gender equality, and the protection of vulnerable populations.
              </p>
            </div>

            <div>
              <h4 className="mb-2">Key Statistics (2026)</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="text-2xl text-primary mb-1">2,547</div>
                  <div className="text-sm text-muted-foreground">Cases Handled</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="text-2xl text-secondary mb-1">15,234</div>
                  <div className="text-sm text-muted-foreground">People Supported</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="text-2xl text-accent mb-1">12</div>
                  <div className="text-sm text-muted-foreground">Regions</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center">
                  <div className="text-2xl text-primary mb-1">89%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Brand Assets */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl mb-6">Brand Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Logos */}
              <Card>
                <CardHeader>
                  <ImageIcon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Logos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted p-8 rounded-lg flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-white text-2xl">HR</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download PNG
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download SVG
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Package
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Color Palette */}
              <Card>
                <CardHeader>
                  <Palette className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Brand Colors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-[#C62828]"></div>
                      <div>
                        <div className="font-medium">Primary Red</div>
                        <div className="text-sm text-muted-foreground">#C62828</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-[#1976D2]"></div>
                      <div>
                        <div className="font-medium">Secondary Blue</div>
                        <div className="text-sm text-muted-foreground">#1976D2</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-[#FFC107] border"></div>
                      <div>
                        <div className="font-medium">Accent Gold</div>
                        <div className="text-sm text-muted-foreground">#FFC107</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Publications & Reports */}
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Recent Publications & Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Annual Report 2025 - State of Human Rights",
                    size: "5.2 MB",
                    type: "PDF",
                  },
                  {
                    title: "Press Release: Campaign Victory on Education Access",
                    size: "245 KB",
                    type: "PDF",
                  },
                  {
                    title: "Research Paper: Digital Rights in Modern Society",
                    size: "3.1 MB",
                    type: "PDF",
                  },
                  {
                    title: "Fact Sheet: Our Work & Impact 2026",
                    size: "890 KB",
                    type: "PDF",
                  },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg"
                  >
                    <div>
                      <div className="font-medium mb-1">{doc.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {doc.type} • {doc.size}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Photo Gallery */}
          <Card>
            <CardHeader>
              <ImageIcon className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Media Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                High-resolution photos from our events, field work, and campaigns available
                for media use.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                <Download className="mr-2 h-4 w-4" />
                Download Photo Package
              </Button>
            </CardContent>
          </Card>

          {/* Usage Guidelines */}
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle>Brand Usage Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>When using our brand assets, please follow these guidelines:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Do not alter the logo colors or proportions</li>
                <li>Maintain clear space around the logo</li>
                <li>Use the logo on appropriate backgrounds for visibility</li>
                <li>Credit photos when used in publications</li>
                <li>
                  Contact us for permission for any use not covered in these guidelines
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
