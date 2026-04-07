export type JobItem = {
  id: number;
  title: string;
  type: string;
  location: string;
  department: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
};

export const jobs: JobItem[] = [
  {
    id: 1,
    title: "Senior Human Rights Lawyer",
    type: "Full-time",
    location: "Capital City",
    department: "Legal",
    salary: "Competitive",
    posted: "April 1, 2026",
    description:
      "Lead strategic litigation cases and provide legal guidance to our advocacy team.",
    requirements: [
      "Law degree and bar admission",
      "7+ years human rights law experience",
      "Strong litigation skills",
      "Excellent communication abilities",
    ],
  },
  {
    id: 2,
    title: "Community Outreach Coordinator",
    type: "Full-time",
    location: "Northern Region",
    department: "Programs",
    salary: "$35,000 - $45,000",
    posted: "March 28, 2026",
    description:
      "Design and implement community empowerment programs and train local advocates.",
    requirements: [
      "Bachelor's degree in relevant field",
      "3+ years community organizing experience",
      "Fluency in English and Amharic",
      "Strong interpersonal skills",
    ],
  },
  {
    id: 3,
    title: "Research and Policy Analyst",
    type: "Full-time",
    location: "Capital City",
    department: "Research",
    salary: "$40,000 - $50,000",
    posted: "March 25, 2026",
    description:
      "Conduct research on human rights issues and develop policy recommendations.",
    requirements: [
      "Master's degree preferred",
      "Strong research and analytical skills",
      "Excellent writing abilities",
      "Knowledge of human rights frameworks",
    ],
  },
  {
    id: 4,
    title: "Communications Officer",
    type: "Full-time",
    location: "Capital City (Hybrid)",
    department: "Communications",
    salary: "$38,000 - $48,000",
    posted: "March 22, 2026",
    description:
      "Manage media relations, create content, and amplify our campaigns and advocacy work.",
    requirements: [
      "Bachelor's in Communications or related field",
      "3+ years in communications/PR",
      "Strong writing and social media skills",
      "Experience with multimedia content creation",
    ],
  },
  {
    id: 5,
    title: "Legal Aid Intern",
    type: "Internship",
    location: "Various",
    department: "Legal",
    salary: "Stipend provided",
    posted: "March 20, 2026",
    description:
      "Support our legal team in case research, documentation, and client assistance.",
    requirements: [
      "Law student (2nd year or above)",
      "Strong research skills",
      "Passion for human rights",
      "Commitment of 3-6 months",
    ],
  },
  {
    id: 6,
    title: "Volunteer Coordinator",
    type: "Part-time",
    location: "Capital City",
    department: "Programs",
    salary: "$25,000 - $30,000",
    posted: "March 18, 2026",
    description:
      "Recruit, train, and manage volunteers for our various programs and campaigns.",
    requirements: [
      "2+ years volunteer management experience",
      "Strong organizational skills",
      "Excellent communication abilities",
      "Passion for community engagement",
    ],
  },
];
