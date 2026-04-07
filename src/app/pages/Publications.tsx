import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { FileText, Download, Search } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Annual Report: State of Human Rights 2026",
    year: 2026,
    category: "Annual Report",
    language: ["English", "Amharic"],
    pages: 150,
    description:
      "Comprehensive overview of human rights situation, challenges, and achievements throughout the year.",
  },
  {
    id: 2,
    title: "Freedom of Expression in Digital Age",
    year: 2026,
    category: "Research Paper",
    language: ["English"],
    pages: 45,
    description:
      "In-depth analysis of digital rights, online censorship, and the evolving landscape of free speech.",
  },
  {
    id: 3,
    title: "Guide to Legal Aid Services",
    year: 2025,
    category: "Guide",
    language: ["English", "Amharic"],
    pages: 32,
    description:
      "Practical guide for citizens seeking legal assistance and understanding their rights to access justice.",
  },
  {
    id: 4,
    title: "Women's Rights: Progress and Challenges",
    year: 2025,
    category: "Research Paper",
    language: ["English", "Amharic"],
    pages: 68,
    description:
      "Detailed examination of gender equality, women's empowerment, and ongoing barriers to full rights realization.",
  },
  {
    id: 5,
    title: "Children's Rights Handbook",
    year: 2025,
    category: "Handbook",
    language: ["English", "Amharic"],
    pages: 28,
    description:
      "Educational resource on children's rights, child protection mechanisms, and support services.",
  },
  {
    id: 6,
    title: "Quarterly Bulletin - Q1 2026",
    year: 2026,
    category: "Bulletin",
    language: ["English", "Amharic"],
    pages: 16,
    description:
      "Latest updates on cases, campaigns, and human rights developments in the first quarter.",
  },
  {
    id: 7,
    title: "Economic and Social Rights Study",
    year: 2025,
    category: "Research Paper",
    language: ["English"],
    pages: 92,
    description:
      "Research on access to healthcare, education, housing, and economic opportunities as fundamental rights.",
  },
  {
    id: 8,
    title: "Human Rights Training Manual",
    year: 2024,
    category: "Manual",
    language: ["English", "Amharic"],
    pages: 120,
    description:
      "Comprehensive training resource for activists, educators, and community organizers.",
  },
];

export function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || pub.category === selectedCategory;
    const matchesLanguage =
      selectedLanguage === "all" || pub.language.includes(selectedLanguage);

    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const categories = [
    "all",
    ...Array.from(new Set(publications.map((p) => p.category))),
  ];

  return (
    <div className="bg-muted/30">
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 shadow-sm">
          <h1 className="text-4xl mb-3">Publications Library</h1>
          <p className="text-muted-foreground text-lg">
            Access reports, research papers, and educational materials from EHRDC.
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8 border-primary/10 shadow-sm">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat === "all" ? "All Categories" : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Amharic">Amharic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPublications.map((pub) => (
            <Card key={pub.id} className="border-primary/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/10">{pub.category}</Badge>
                  <span className="text-sm text-muted-foreground">{pub.year}</span>
                </div>
                <CardTitle className="text-xl">{pub.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{pub.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>{pub.pages} pages</span>
                  </div>
                  <div className="flex gap-1">
                    {pub.language.map((lang) => (
                      <Badge key={lang} variant="secondary" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-primary hover:bg-primary/90 flex-1 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">View Online</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                No publications found matching your criteria.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
    </div>
  );
}
