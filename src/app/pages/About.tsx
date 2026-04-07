import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";

type Person = {
  name: string;
  role: string;
  org?: string;
  bio?: string;
  linkedin?: string;
};

const boardMembers: Person[] = [
  {
    name: "Mesud Gebeyehu",
    role: "Board Chairman",
    org: "Executive Director of Consortium for Ethiopian Human Rights Organizations (CEHRO)",
  },
  {
    name: "Lensa Biyena",
    role: "Vice Board of Directors",
    org: "Executive Directress of Ethiopian Women Lawyers Association (EWLA)",
  },
  {
    name: "Dan Yirga",
    role: "Member",
    org: "Executive Director of Ethiopian Human Rights Council (EHRCO)",
  },
  {
    name: "Dagneachew Melese",
    role: "Member",
    org: "Executive Director of Advocates Ethiopia",
  },
  {
    name: "Tsegemariam Alawi",
    role: "Member",
    org: "Executive Directress of Sarah Justice for All",
  },
];

const staffMembers: Person[] = [
  {
    name: "Yared Hailemariam",
    role: "Executive Director",
    linkedin: "https://linkedin.com",
    bio: "Yared Hailemariam serves as the Executive Director of the Ethiopian Human Rights Defender Center (EHRDC). Under his guidance, EHRDC offers crucial services including emergency protection, advocacy, awareness campaigns, capacity building, and technological support to human rights defenders. Yared is renowned for his founding roles in the East and Horn of Africa Human Rights Defenders Network and the Association for Human Rights in Ethiopia (AHRE) in addition to the Center.",
  },
  {
    name: "Tarikawit Fikadu",
    role: "Program Director",
    linkedin: "https://linkedin.com",
    bio: "Tarikawit Fikadu brings over a decade of diverse experience in law, public enterprises, consultancy, and civil society. With a law degree from Wollo University and a Master’s in constitutional law and human rights from Umea University, she serves as Program Director at EHRDC.",
  },
  {
    name: "Kalkidan Tesfaye",
    role: "Advocacy and Communications Manager",
    linkedin: "https://linkedin.com",
    bio: "Kalkidan has a diverse background in program management, communications, advocacy, and creative writing. In her current role, she ensures the Center’s mission and activities are effectively communicated to members, policymakers, media, and the public.",
  },
  {
    name: "Bersabeh Solomon",
    role: "Program and Resource Mobilization Manager",
    linkedin: "https://linkedin.com",
    bio: "Bersabeh is a seasoned legal professional with expertise in project management, implementation, research, and advocacy. Her work has shaped her into a versatile professional in Law and Human Rights.",
  },
  {
    name: "Noah Yesuf",
    role: "Protection and Research Manager",
    linkedin: "https://linkedin.com",
    bio: "Noah serves as Protection and Research Manager at EHRDC. He has extensive experience in human rights education, trial monitoring, assessments, research, and protection case management.",
  },
  {
    name: "Leilt Tilahun",
    role: "Administrative Manager",
    linkedin: "https://linkedin.com",
    bio: "Leilt Tilahun supports strategic human resources, procurement, and logistics at EHRDC. She also serves as safeguarding officer to ensure policy compliance for all stakeholders.",
  },
  {
    name: "Fikadu Dufera",
    role: "Finance Manager",
    linkedin: "https://linkedin.com",
    bio: "Fikadu has over 6 years of finance experience in governmental and non-governmental institutions. He oversees budgeting, planning, analysis, reporting, procurement, and compliance at EHRDC.",
  },
  {
    name: "Hana Lale",
    role: "Advocacy and Communications Officer",
    linkedin: "https://linkedin.com",
    bio: "Hana Lale is a Women’s Rights Activist currently pursuing a Master’s Degree in Human Rights Law at Addis Ababa University. She is skilled in advocacy, communication, campaigning, and digital security training.",
  },
  {
    name: "Hewan Ayalew",
    role: "Finance Officer",
    linkedin: "https://linkedin.com",
    bio: "Hewan Ayalew has experience in accounting, marketing, and management across private and government sectors and serves as Finance Officer at EHRDC.",
  },
  {
    name: "Rediet Gezahegne",
    role: "Junior Program Officer",
    linkedin: "https://linkedin.com",
    bio: "Rediet Gezahegne is a youth human rights and social justice advocate with a law background. She supports project implementation and assists protection and advocacy departments.",
  },
  {
    name: "Natnael Tilahun",
    role: "Junior Finance and Admin Officer",
    linkedin: "https://linkedin.com",
    bio: "Natnael Tilahun is an honor graduate in Accounting and Finance who supports finance and admin functions at EHRDC and is currently pursuing his Master’s degree.",
  },
];

const capacityTrainings = [
  {
    id: 1,
    title: "Digital Security for Human Rights Defenders",
    short: "A three-day practical training on secure communication, device safety, and risk mitigation.",
    full: "This mock training covered encrypted communication tools, threat modeling, digital hygiene, and incident response planning. Participants built personalized security plans and learned safe documentation techniques for field reporting.",
    image: "https://placehold.co/600x320?text=Capacity+Building+Training+1",
  },
  {
    id: 2,
    title: "Documentation and Evidence Collection Workshop",
    short: "Hands-on sessions on collecting admissible testimonies, digital evidence, and case files.",
    full: "Participants practiced ethical interviewing, metadata preservation, secure storage, and verification workflows. The workshop also included survivor-centered approaches and referral pathways for emergency support.",
    image: "https://placehold.co/600x320?text=Capacity+Building+Training+2",
  },
];

const advocacyArticle = `The Advocacy Department has released press statements on dire human rights issues in the country, initiated and led campaigns on women’s rights and the right to access dignity kits, produced online advocacy materials and tools such as brochures, magazines, websites, and videos, and will continue to actively support the causes of EHRDC as well as stand on behalf of human rights defenders in the country.

Our Department issued press statements on the situations of HRDs in Ethiopia during the pre and post-election period and brought these concerns to the attention of national and international communities.

We also issued statements calling for an end to the harassment and crackdown on human rights defenders on several occasions.

We have urged the government and other concerned parties on imprisoned journalists through several press statements and represented the Center through discussions with members of the media.

If you have information on human rights and human rights defenders situations in Ethiopia and would like to reach us, or if you have questions on the statements or information provided by our office, you can contact us directly by phone or in writing.

Advocacy Department
Phone: +251-944-131-825
Email: centerEHRD@gmail.com

Ethiopian Human Rights Defenders Center (EHRDC)
Bole Road, Friendship Business Center
5th floor, Office number 504/2
Addis Ababa, Ethiopia`;

export function About() {
  const [activeTraining, setActiveTraining] = useState<(typeof capacityTrainings)[number] | null>(null);

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-8 md:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="mt-2 text-muted-foreground">Ethiopian Human Rights Defenders Center (EHRDC)</p>
      </div>

      <Tabs defaultValue="who-we-are" className="gap-4">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="who-we-are">Who We Are</TabsTrigger>
          <TabsTrigger value="what-we-do">What We Do</TabsTrigger>
        </TabsList>

        <TabsContent value="who-we-are">
          <Tabs defaultValue="board" className="gap-4">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="board">Board Members</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
            </TabsList>

            <TabsContent value="board">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {boardMembers.map((member) => (
                  <Card key={member.name} className="overflow-hidden">
                    <img src={`https://placehold.co/600x320?text=${encodeURIComponent(member.name)}`} alt={member.name} className="h-44 w-full object-cover" />
                    <CardHeader>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <Badge variant="secondary" className="w-fit">{member.role}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{member.org}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="staff">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {staffMembers.map((staff) => (
                  <Card key={staff.name} className="overflow-hidden">
                    <img src={`https://placehold.co/600x300?text=${encodeURIComponent(staff.name)}`} alt={staff.name} className="h-40 w-full object-cover" />
                    <CardHeader>
                      <CardTitle className="text-lg">{staff.name}</CardTitle>
                      <p className="text-sm text-primary">{staff.role}</p>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-sm text-muted-foreground">{staff.bio}</p>
                      <a href={staff.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium text-secondary underline">
                        LinkedIn
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="what-we-do">
          <Tabs defaultValue="capacity" className="gap-4">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="capacity">Capacity Building</TabsTrigger>
              <TabsTrigger value="advocacy">Advocacy</TabsTrigger>
              <TabsTrigger value="protection">Protection</TabsTrigger>
            </TabsList>

            <TabsContent value="capacity">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {capacityTrainings.map((training) => (
                  <Card key={training.id} className="overflow-hidden">
                    <img src={training.image} alt={training.title} className="h-44 w-full object-cover" />
                    <CardHeader>
                      <CardTitle className="text-lg">{training.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-3 text-sm text-muted-foreground">{training.short}</p>
                      <Button onClick={() => setActiveTraining(training)}>Read More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="advocacy">
              <Card className="overflow-hidden">
                <img src="https://placehold.co/1200x380?text=EHRDC+Advocacy" alt="Advocacy" className="h-56 w-full object-cover" />
                <CardHeader>
                  <CardTitle>Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-line text-sm text-muted-foreground">{advocacyArticle}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="protection">
              <Card>
                <CardHeader>
                  <CardTitle>Protection Intake Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    className="grid grid-cols-1 gap-4 md:grid-cols-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      toast.success("Protection intake submitted successfully.");
                    }}
                  >
                    <div className="md:col-span-2">
                      <Label>Full Name</Label>
                      <Input required />
                    </div>
                    <div>
                      <Label>Date</Label>
                      <Input type="date" required />
                    </div>
                    <div>
                      <Label>Current Nationality</Label>
                      <Input required />
                    </div>
                    <div>
                      <Label>Passport Number</Label>
                      <Input />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Home Address (Place of residence in country of origin)</Label>
                      <Textarea rows={2} />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Present Address (City and Country)</Label>
                      <Input required />
                    </div>
                    <div>
                      <Label>Email</Label>
                      <Input type="email" required />
                    </div>
                    <div>
                      <Label>Telephone Number</Label>
                      <Input required />
                    </div>
                    <div>
                      <Label>Gender</Label>
                      <Input placeholder="Female / Male" />
                    </div>
                    <div>
                      <Label>Date of Birth</Label>
                      <Input type="date" />
                    </div>
                    <div>
                      <Label>Marital Status</Label>
                      <Input placeholder="Single / Married / Divorce" />
                    </div>
                    <div>
                      <Label>Number of Children</Label>
                      <Input type="number" min={0} />
                    </div>
                    <div>
                      <Label>Profession</Label>
                      <Input />
                    </div>
                    <div>
                      <Label>Position Held</Label>
                      <Input />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Assistance received from any other organization?</Label>
                      <Textarea rows={2} placeholder="If yes, state name and type of assistance received" />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Any special needs (sickness monitoring, counseling, etc.)</Label>
                      <Textarea rows={2} />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Emergency Contact (name, phone, and email)</Label>
                      <Textarea rows={2} />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Attach passport bio-data, national ID, or refugee ID documents</Label>
                      <Input type="file" />
                    </div>
                    <div className="md:col-span-2">
                      <Button type="submit" className="w-full md:w-auto">Submit Intake Form</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>

      <Dialog open={Boolean(activeTraining)} onOpenChange={() => setActiveTraining(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{activeTraining?.title}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">{activeTraining?.full}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
}
