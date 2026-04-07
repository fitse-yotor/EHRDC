import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";
import { Play } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    type: "image",
    url: "https://images.unsplash.com/photo-1575029645663-d8faa1ac2880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwc2VtaW5hciUyMGV2ZW50JTIwY3Jvd2R8ZW58MXx8fHwxNzc1NTQ2NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Regional Human Rights Summit 2025",
    category: "Events",
  },
  {
    id: 2,
    type: "image",
    url: "https://images.unsplash.com/photo-1615949394813-ba42de383eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMHRyYWluaW5nJTIwcGVvcGxlJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc1NDY1OTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Youth Leadership Training Workshop",
    category: "Training",
  },
  {
    id: 3,
    type: "image",
    url: "https://images.unsplash.com/photo-1763355873417-1e0926397851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwZ3JvdXAlMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzc1NTQ2NzE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Community Outreach Program",
    category: "Field Work",
  },
  {
    id: 4,
    type: "image",
    url: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzU1MDAzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Team Strategy Meeting",
    category: "Behind the Scenes",
  },
  {
    id: 5,
    type: "image",
    url: "https://images.unsplash.com/photo-1641057324798-c05769de628a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwaGFuZHMlMjB0b2dldGhlciUyMHNvbGlkYXJpdHl8ZW58MXx8fHwxNzc1NTQ2NDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Solidarity March for Human Rights",
    category: "Events",
  },
  {
    id: 6,
    type: "image",
    url: "https://images.unsplash.com/photo-1742056089390-9b2f426b2e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHByb3Rlc3QlMjBodW1hbiUyMHJpZ2h0cyUyMG1hcmNofGVufDF8fHx8MTc3NTU0NjQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Peaceful Demonstration",
    category: "Events",
  },
  {
    id: 7,
    type: "image",
    url: "https://images.unsplash.com/photo-1681949215173-fe0d15c790c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwZ3JvdXAlMjBtZWV0aW5nfGVufDF8fHx8MTc3NTU0NjYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Women's Empowerment Workshop",
    category: "Training",
  },
  {
    id: 8,
    type: "image",
    url: "https://images.unsplash.com/photo-1771765780945-c788a6ce4b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTU0NjYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Educational Rights Program",
    category: "Field Work",
  },
  {
    id: 9,
    type: "image",
    url: "https://images.unsplash.com/photo-1763705135060-4850b45494b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwZGlzY3Vzc2lvbiUyMGdyb3VwfGVufDF8fHx8MTc3NTU0NjQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Community Forum Discussion",
    category: "Events",
  },
  {
    id: 10,
    type: "image",
    url: "https://images.unsplash.com/photo-1664866651877-b42cea398f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RpdmlzbSUyMGNhbXBhaWduJTIwcG9zdGVyJTIwZGVtb25zdHJhdGlvbnxlbnwxfHx8fDE3NzU1NDY2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Campaign Launch Event",
    category: "Events",
  },
  {
    id: 11,
    type: "image",
    url: "https://images.unsplash.com/photo-1643149005402-ecac920f1d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXN0aWNlJTIwc2NhbGVzJTIwY291cnRob3VzZXxlbnwxfHx8fDE3NzU1NDY0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Legal Aid Clinic",
    category: "Field Work",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg">
            Photos and videos from our events, field work, and campaigns
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-primary hover:bg-primary/90"
                  : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category === "all" ? "All" : category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-square">
                <ImageWithFallback
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <Badge className="mb-2 bg-primary">{item.category}</Badge>
                    <h3 className="text-sm">{item.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage && (
              <>
                <DialogTitle className="sr-only">{selectedImage.title}</DialogTitle>
                <div className="space-y-4">
                  <ImageWithFallback
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-auto rounded-lg"
                  />
                  <div>
                    <Badge className="mb-2">{selectedImage.category}</Badge>
                    <h3 className="text-xl">{selectedImage.title}</h3>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
