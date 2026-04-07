import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const blogPosts = [
  {
    id: 1,
    title: "The Power of Community: Stories from the Field",
    excerpt:
      "Meet the incredible individuals whose lives have been transformed through our community empowerment programs...",
    author: "Sarah Johnson",
    date: "April 5, 2026",
    category: "Field Stories",
    image: "https://images.unsplash.com/photo-1763355873417-1e0926397851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwZ3JvdXAlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc1NTQ2NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true,
  },
  {
    id: 2,
    title: "Understanding Digital Rights in 2026",
    excerpt:
      "As technology evolves, so do the challenges to our fundamental rights to privacy and free expression online...",
    author: "Michael Chen",
    date: "April 2, 2026",
    category: "Analysis",
    image: "https://images.unsplash.com/photo-1641057324798-c05769de628a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwaGFuZHMlMjB0b2dldGhlciUyMHNvbGlkYXJpdHl8ZW58MXx8fHwxNzc1NTQ2NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
  {
    id: 3,
    title: "A Mother's Fight for Justice",
    excerpt:
      "How one woman's determination led to landmark legal changes protecting children's rights...",
    author: "Fatima Ahmed",
    date: "March 30, 2026",
    category: "Personal Stories",
    image: "https://images.unsplash.com/photo-1681949215173-fe0d15c790c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwZ3JvdXAlMjBtZWV0aW5nfGVufDF8fHx8MTc3NTU0NjYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
  {
    id: 4,
    title: "Lessons from Regional Human Rights Summit",
    excerpt:
      "Key takeaways and insights from our largest gathering of human rights defenders...",
    author: "David Omondi",
    date: "March 28, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1575029645663-d8faa1ac2880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc2VtaW5hciUyMGV2ZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzc1NTQ2NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
  {
    id: 5,
    title: "Youth Activism: The Next Generation of Change-Makers",
    excerpt:
      "Young people are leading the charge for human rights. Here's how they're making a difference...",
    author: "Emma Thompson",
    date: "March 25, 2026",
    category: "Youth",
    image: "https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTU0NjYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
  {
    id: 6,
    title: "Behind the Scenes: How We Investigate Cases",
    excerpt:
      "A look at our methodical approach to documenting and investigating human rights violations...",
    author: "James Banda",
    date: "March 22, 2026",
    category: "Behind the Scenes",
    image: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzU1MDAzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false,
  },
];

export function Blog() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">Blog & Stories</h1>
          <p className="text-muted-foreground text-lg">
            Personal stories, field reports, and insights from our work
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.id}`}>
            <Card className="mb-12 overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4" variant="outline">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <Card className="h-full hover:shadow-lg transition-shadow group overflow-hidden">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="outline">
                    {post.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
