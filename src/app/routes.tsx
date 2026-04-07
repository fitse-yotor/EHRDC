import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { Events } from "./pages/Events";
import { Publications } from "./pages/Publications";
import { Membership } from "./pages/Membership";
import { Campaigns } from "./pages/Campaigns";
import { CampaignDetail } from "./pages/CampaignDetail";
import { ReportCase } from "./pages/ReportCase";
import { Impact } from "./pages/Impact";
import { Gallery } from "./pages/Gallery";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { About } from "./pages/About";
import { Jobs } from "./pages/Jobs";
import { PressKit } from "./pages/PressKit";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "news", Component: News },
      { path: "events", Component: Events },
      { path: "publications", Component: Publications },
      { path: "join", Component: Membership },
      { path: "campaigns", Component: Campaigns },
      { path: "campaigns/:id", Component: CampaignDetail },
      { path: "report-case", Component: ReportCase },
      { path: "impact", Component: Impact },
      { path: "gallery", Component: Gallery },
      { path: "blog", Component: Blog },
      { path: "blog/:id", Component: BlogPost },
      { path: "about", Component: About },
      { path: "jobs", Component: Jobs },
      { path: "press-kit", Component: PressKit },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
