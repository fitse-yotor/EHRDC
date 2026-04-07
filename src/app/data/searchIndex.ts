export type SearchResult = {
  title: string;
  description: string;
  path: string;
  category: string;
};

export const searchIndex: SearchResult[] = [
  // Pages
  { title: "Home", description: "EHRDC homepage — defending human rights for all", path: "/", category: "Page" },
  { title: "About Us", description: "Learn about EHRDC's mission, vision, and history", path: "/about", category: "Page" },
  { title: "Impact Dashboard", description: "2,500+ cases handled, 15,000+ people supported across 12 regions", path: "/impact", category: "Page" },
  { title: "Contact Us", description: "Get in touch with EHRDC — Addis Ababa, Ethiopia", path: "/contact", category: "Page" },
  { title: "Board Members", description: "Meet the EHRDC board of directors", path: "/board-members", category: "Page" },
  { title: "Staff", description: "Meet the EHRDC team and staff members", path: "/staff", category: "Page" },
  { title: "Gallery", description: "Photos and visual documentation of EHRDC's work", path: "/gallery", category: "Page" },
  { title: "Press Kit", description: "Media resources, logos, and press materials", path: "/press-kit", category: "Page" },
  { title: "Join Us", description: "Become a member and support human rights in Ethiopia", path: "/join", category: "Page" },
  { title: "Report a Case", description: "Submit a human rights violation report", path: "/report-case", category: "Page" },
  { title: "Protection Intake", description: "Request protection for human rights defenders at risk", path: "/protection", category: "Page" },
  { title: "Violence Reporting Map", description: "Interactive map of documented human rights incidents", path: "/violence-reporting-map", category: "Page" },
  { title: "Statistics", description: "Data and statistics on human rights in Ethiopia", path: "/statistics", category: "Page" },
  { title: "Annual Reports", description: "EHRDC annual reports and financial statements", path: "/annual-reports", category: "Page" },
  // Programs
  { title: "Advocacy", description: "Press statements, campaigns, and stakeholder engagement on human rights", path: "/advocacy", category: "Program" },
  { title: "Capacity Building", description: "Training and capacity building programs for human rights defenders", path: "/capacity-building", category: "Program" },
  // Campaigns
  { title: "Protect Freedom of Expression", description: "Defending journalists, activists, and citizens' right to free speech", path: "/campaigns/1", category: "Campaign" },
  { title: "Education Access for All", description: "Ensuring every child has access to quality education", path: "/campaigns/2", category: "Campaign" },
  { title: "Women's Economic Empowerment", description: "Fighting discrimination and promoting equal economic opportunities for women", path: "/campaigns/3", category: "Campaign" },
  { title: "End Arbitrary Detention", description: "Advocating for due process and protection against unlawful imprisonment", path: "/campaigns/4", category: "Campaign" },
  { title: "Digital Rights and Privacy", description: "Protecting online privacy and fighting surveillance", path: "/campaigns/5", category: "Campaign" },
  { title: "Healthcare as a Right", description: "Ensuring access to quality healthcare for all communities", path: "/campaigns/6", category: "Campaign" },
  // News
  { title: "New Report: State of Human Rights 2026", description: "Comprehensive annual report on human rights progress and challenges", path: "/news/1", category: "News" },
  { title: "Campaign Victory: Education Access Expanded", description: "New legislation ensures education access for all children", path: "/news/2", category: "News" },
  { title: "Upcoming: Regional Human Rights Summit", description: "Three-day summit for activists, policymakers, and communities", path: "/news/3", category: "News" },
  { title: "URGENT: Statement on Recent Events", description: "EHRDC condemns recent incidents of violence and calls for accountability", path: "/news/4", category: "News" },
  { title: "Training Workshop: Know Your Rights", description: "Free community workshop series on fundamental rights and justice", path: "/news/5", category: "News" },
  { title: "Research Paper: Digital Rights in Modern Society", description: "Research on technology, privacy, and digital access as human rights", path: "/news/6", category: "News" },
  // Publications
  { title: "Publications Library", description: "Browse all EHRDC publications, reports, and documents", path: "/publications", category: "Publication" },
  { title: "Research Papers", description: "Academic and policy research papers on human rights topics", path: "/research-papers", category: "Publication" },
  // Jobs
  { title: "Senior Human Rights Lawyer", description: "Lead strategic litigation cases — Legal Department", path: "/jobs/1", category: "Job" },
  { title: "Community Outreach Coordinator", description: "Coordinate community engagement programs", path: "/jobs/2", category: "Job" },
  { title: "Research and Documentation Analyst", description: "Document and analyze human rights violations", path: "/jobs/3", category: "Job" },
  { title: "Communications Officer", description: "Manage communications and media relations", path: "/jobs/4", category: "Job" },
  { title: "Legal Intern", description: "Support legal team with research and case preparation", path: "/jobs/5", category: "Job" },
  { title: "Volunteer Coordinator", description: "Recruit and manage volunteers across programs", path: "/jobs/6", category: "Job" },
  // Events & Blog
  { title: "Events", description: "Upcoming EHRDC events, workshops, and summits", path: "/events", category: "Page" },
  { title: "Blog & Stories", description: "Stories, insights, and perspectives from the field", path: "/blog", category: "Page" },
];
