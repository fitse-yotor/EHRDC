import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Advocacy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl mb-3">Advocacy</h1>
        <p className="mb-8 text-muted-foreground">
          Public statements, campaigns, and engagement with stakeholders on urgent human rights
          issues in Ethiopia.
        </p>

        <ImageWithFallback
          src="https://placehold.co/1200x500/f8d7da/842029?text=EHRDC+Advocacy"
          alt="Advocacy placeholder"
          className="mb-8 h-[260px] w-full rounded-lg object-cover"
        />

        <Card>
          <CardContent className="space-y-4 pt-6 text-muted-foreground">
            <p>
              The Advocacy Department has released press statements on dire human rights issues in
              the country, initiated and led campaigns on women’s rights and the right to access
              dignity kits, and produced online advocacy materials and tools such as brochures,
              magazines, websites, and videos.
            </p>
            <p>
              The department issued press statements on the situations of HRDs in Ethiopia during
              the pre and post-election period and brought attention to national and international
              communities.
            </p>
            <p>
              EHRDC also issued statements calling for an end to harassment and crackdowns on human
              rights defenders and urged relevant parties on issues of imprisoned journalists.
            </p>
            <div className="rounded-md border bg-muted p-4">
              <h3 className="mb-2 text-foreground">Advocacy Department Contact</h3>
              <p>Phone: +251-944-131-825</p>
              <p>Email: centerEHRD@gmail.com</p>
              <p className="mt-2">
                Ethiopian Human Rights Defenders Center (EHRDC)
                <br />
                Bole Road, Friendship Business Center
                <br />
                5th floor, Office number 504/2
                <br />
                Addis Ababa, Ethiopia
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
