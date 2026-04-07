import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Users, FileText, MapPin, TrendingUp, Award, Calendar } from "lucide-react";

const statsData = {
  totalCases: 2547,
  peopleSupported: 15234,
  regionsActive: 12,
  activeCampaigns: 50,
  publications: 87,
  volunteers: 523,
};

const casesByType = [
  { name: "Freedom of Expression", value: 420, color: "#C62828" },
  { name: "Arbitrary Detention", value: 385, color: "#1976D2" },
  { name: "Discrimination", value: 310, color: "#FFC107" },
  { name: "Gender-Based Violence", value: 295, color: "#C62828" },
  { name: "Economic Rights", value: 267, color: "#1976D2" },
  { name: "Access to Justice", value: 245, color: "#FFC107" },
  { name: "Others", value: 625, color: "#757575" },
];

const casesByYear = [
  { year: "2021", cases: 1850, resolved: 1420 },
  { year: "2022", cases: 2100, resolved: 1680 },
  { year: "2023", cases: 2350, resolved: 1920 },
  { year: "2024", cases: 2450, resolved: 2100 },
  { year: "2025", cases: 2520, resolved: 2250 },
  { year: "2026", cases: 650, resolved: 480 },
];

const regionData = [
  { region: "Central", cases: 520, population: 8500000 },
  { region: "Northern", cases: 380, population: 6200000 },
  { region: "Southern", cases: 425, population: 7100000 },
  { region: "Eastern", cases: 295, population: 4800000 },
  { region: "Western", cases: 340, population: 5500000 },
];

const impactStories = [
  {
    title: "Legal Victory for Press Freedom",
    description: "Successfully defended 15 journalists against defamation charges",
    impact: "15 journalists",
  },
  {
    title: "Policy Change on Education Access",
    description: "Advocacy led to new legislation ensuring free primary education",
    impact: "500,000+ children",
  },
  {
    title: "Women's Rights Training Program",
    description: "Trained 2,500 women on their economic and social rights",
    impact: "2,500 women",
  },
];

export function Impact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">Impact Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Transparency and accountability in our human rights work
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-primary text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 mb-2">Total Cases Handled</p>
                  <p className="text-4xl">{statsData.totalCases.toLocaleString()}</p>
                </div>
                <FileText className="h-12 w-12 text-white/50" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary text-white">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 mb-2">People Supported</p>
                  <p className="text-4xl">{statsData.peopleSupported.toLocaleString()}</p>
                </div>
                <Users className="h-12 w-12 text-white/50" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-accent text-accent-foreground">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/70 mb-2">Regions Covered</p>
                  <p className="text-4xl">{statsData.regionsActive}</p>
                </div>
                <MapPin className="h-12 w-12 text-foreground/50" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground mb-2">Active Campaigns</p>
                  <p className="text-4xl text-primary">{statsData.activeCampaigns}</p>
                </div>
                <TrendingUp className="h-12 w-12 text-primary/30" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground mb-2">Publications</p>
                  <p className="text-4xl text-secondary">{statsData.publications}</p>
                </div>
                <FileText className="h-12 w-12 text-secondary/30" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground mb-2">Active Volunteers</p>
                  <p className="text-4xl text-accent">{statsData.volunteers}</p>
                </div>
                <Award className="h-12 w-12 text-accent/50" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Cases by Type */}
          <Card>
            <CardHeader>
              <CardTitle>Cases by Type (2026)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={casesByType}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {casesByType.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Cases by Year */}
          <Card>
            <CardHeader>
              <CardTitle>Cases Handled Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={casesByYear}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cases" stroke="#C62828" name="Total Cases" strokeWidth={2} />
                  <Line type="monotone" dataKey="resolved" stroke="#1976D2" name="Resolved Cases" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Regional Distribution */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Cases by Region</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="cases" fill="#C62828" name="Cases Handled" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Impact Stories */}
        <div>
          <h2 className="text-3xl mb-6">Recent Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStories.map((story, index) => (
              <Card key={index} className="border-l-4 border-primary">
                <CardHeader>
                  <CardTitle className="text-xl">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{story.description}</p>
                  <div className="flex items-center gap-2 text-primary">
                    <Award className="h-5 w-5" />
                    <span>{story.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Rate */}
        <Card className="mt-12 bg-muted">
          <CardContent className="py-8">
            <div className="text-center">
              <div className="text-5xl text-primary mb-4">89%</div>
              <h3 className="text-2xl mb-2">Success Rate</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Of cases we handled in 2025 resulted in positive outcomes - including legal
                victories, policy changes, or satisfactory resolutions for victims.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
