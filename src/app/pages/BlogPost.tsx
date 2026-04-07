import { useParams, Link } from "react-router";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar, User, Share2, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const blogPost = {
  id: 1,
  title: "The Power of Community: Stories from the Field",
  author: "Sarah Johnson",
  date: "April 5, 2026",
  category: "Field Stories",
  image: "https://images.unsplash.com/photo-1763355873417-1e0926397851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwZ3JvdXAlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc1NTQ2NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  content: `
    <p>In the heart of the Northern Region, I witnessed something remarkable. What started as a small gathering of concerned citizens has grown into a powerful movement for change that's transforming communities and lives.</p>

    <h2>A Grassroots Movement</h2>
    <p>Last year, we launched a community empowerment program aimed at educating citizens about their rights and providing them with the tools to advocate for themselves. We didn't expect the overwhelming response we received.</p>

    <p>Within weeks, over 200 community members had joined the program. Today, that number has grown to more than 1,500 active participants across five districts.</p>

    <h2>Meet Aisha: A Story of Transformation</h2>
    <p>Aisha, a 35-year-old mother of three, was one of our first participants. She had faced years of discrimination in accessing healthcare services for her family. Through our program, she learned about her rights to equal treatment and access to justice.</p>

    <p>"I didn't know I had a voice," Aisha told me during my recent visit. "I thought this was just how things were. But after learning about my rights, I found the courage to speak up."</p>

    <p>With support from our legal team, Aisha filed a formal complaint against the healthcare facility. The case was resolved within three months, and the facility implemented new policies ensuring equal treatment for all patients.</p>

    <p>But Aisha didn't stop there. She became a community advocate herself, helping other women understand their rights and navigate the justice system.</p>

    <h2>The Ripple Effect</h2>
    <p>What's most inspiring about our community programs is the ripple effect they create. When one person learns about their rights and takes action, they inspire others to do the same.</p>

    <p>In Aisha's community alone, we've seen:</p>
    <ul>
      <li>45 new cases reported and successfully resolved</li>
      <li>Three new community advocacy groups formed</li>
      <li>Local officials engaging in dialogue with community members</li>
      <li>Policy changes at the district level ensuring better access to services</li>
    </ul>

    <h2>Looking Forward</h2>
    <p>As I reflect on the past year, I'm filled with hope. The courage and determination of people like Aisha remind me why this work matters. Human rights aren't just abstract concepts – they're about real people, real families, and real communities.</p>

    <p>Our goal is to expand this program to reach 10,000 community members by the end of this year. With your support, we can continue empowering communities to stand up for their rights and create lasting change.</p>

    <h2>How You Can Help</h2>
    <p>There are many ways to support community empowerment work:</p>
    <ul>
      <li>Volunteer as a community educator or trainer</li>
      <li>Donate to support our programs</li>
      <li>Share these stories to raise awareness</li>
      <li>Join our campaigns for policy change</li>
    </ul>

    <p>Together, we can build a society where everyone knows their rights and has the power to defend them.</p>
  `,
};

const relatedPosts = [
  {
    id: 2,
    title: "Understanding Digital Rights in 2026",
    category: "Analysis",
  },
  {
    id: 3,
    title: "A Mother's Fight for Justice",
    category: "Personal Stories",
  },
  {
    id: 5,
    title: "Youth Activism: The Next Generation",
    category: "Youth",
  },
];

export function BlogPost() {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-secondary hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <article>
          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4">{blogPost.category}</Badge>
            <h1 className="text-4xl md:text-5xl mb-6">{blogPost.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{blogPost.date}</span>
              </div>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
            style={{
              lineHeight: "1.8",
            }}
          />

          {/* Author Bio */}
          <Card className="my-12 bg-muted">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="mb-2">About {blogPost.author}</h4>
                  <p className="text-sm text-muted-foreground">
                    {blogPost.author} is a field coordinator with over 10 years of experience
                    in community empowerment and human rights advocacy. She has worked in
                    grassroots organizations across the region, focusing on women's rights
                    and access to justice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <div className="mt-12">
            <h3 className="text-2xl mb-6">Related Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Badge className="mb-2" variant="outline">
                        {post.category}
                      </Badge>
                      <h4 className="hover:text-primary transition-colors">
                        {post.title}
                      </h4>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
