export type ReportStatus = "urgent" | "verified" | "review";

export type ReportItem = {
  id: number;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  location: string;
  date: string;
  status: ReportStatus;
  caseId: string;
};

export const violenceReports: ReportItem[] = [
  {
    id: 1,
    title: "Unlawful Detention of Journalist",
    description: "A journalist was detained without a warrant while reporting on a protest.",
    latitude: 9.03,
    longitude: 38.74,
    location: "Addis Ababa",
    date: "2026-03-12",
    status: "urgent",
    caseId: "EHRDC-2026-0001",
  },
  {
    id: 2,
    title: "Use of Excessive Force",
    description: "Security forces used excessive force during a peaceful demonstration.",
    latitude: 11.6,
    longitude: 37.39,
    location: "Bahir Dar",
    date: "2026-02-25",
    status: "verified",
    caseId: "EHRDC-2026-0002",
  },
  {
    id: 3,
    title: "Forced Eviction Case",
    description: "Residents were evicted without prior notice or compensation.",
    latitude: 7.67,
    longitude: 36.83,
    location: "Jimma",
    date: "2026-01-18",
    status: "review",
    caseId: "EHRDC-2026-0003",
  },
  {
    id: 4,
    title: "Violation of Freedom of Speech",
    description: "Individual arrested for expressing political views online.",
    latitude: 13.5,
    longitude: 39.47,
    location: "Mekelle",
    date: "2026-03-01",
    status: "urgent",
    caseId: "EHRDC-2026-0004",
  },
];
