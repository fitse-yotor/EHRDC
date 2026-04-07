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
import { JobDetail } from "./pages/JobDetail";
import { PressKit } from "./pages/PressKit";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { ViolenceReportingMap } from "./pages/ViolenceReportingMap";
import { ViolenceReportDetail } from "./pages/ViolenceReportDetail";
import { BoardMembers } from "./pages/BoardMembers";
import { Staff } from "./pages/Staff";
import { CapacityBuilding } from "./pages/CapacityBuilding";
import { CapacityBuildingDetail } from "./pages/CapacityBuildingDetail";
import { Advocacy } from "./pages/Advocacy";
import { Protection } from "./pages/Protection";
import { NewsDetail } from "./pages/NewsDetail";
import { ResearchPapers } from "./pages/ResearchPapers";
import { StatisticsPage } from "./pages/StatisticsPage";
import { AnnualReports } from "./pages/AnnualReports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "news", Component: News },
      { path: "news/:id", Component: NewsDetail },
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
      { path: "jobs/:id", Component: JobDetail },
      { path: "press-kit", Component: PressKit },
      { path: "contact", Component: Contact },
      { path: "violence-reporting-map", Component: ViolenceReportingMap },
      { path: "violence-reporting-map/:id", Component: ViolenceReportDetail },
      { path: "board-members", Component: BoardMembers },
      { path: "staff", Component: Staff },
      { path: "capacity-building", Component: CapacityBuilding },
      { path: "capacity-building/:id", Component: CapacityBuildingDetail },
      { path: "advocacy", Component: Advocacy },
      { path: "protection", Component: Protection },
      { path: "research-papers", Component: ResearchPapers },
      { path: "statistics", Component: StatisticsPage },
      { path: "annual-reports", Component: AnnualReports },
      { path: "*", Component: NotFound },
    ],
  },
]);
