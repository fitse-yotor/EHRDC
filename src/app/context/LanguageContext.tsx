import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "am";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    const dict = translations[language];
    return (dict as Record<string, string>)[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About EHRDC",
    "nav.aboutUs": "About Us",
    "nav.impactDashboard": "Impact Dashboard",
    "nav.pressKit": "Press Kit",
    "nav.whoWeAre": "Who We Are",
    "nav.boardMembers": "Board Members",
    "nav.staff": "Staff",
    "nav.whatWeDo": "What We Do",
    "nav.capacityBuilding": "Capacity Building",
    "nav.advocacy": "Advocacy",
    "nav.protection": "Protection",
    "nav.campaigns": "Campaigns",
    "nav.publication": "Publication",
    "nav.researchPapers": "Research Papers",
    "nav.statistics": "Statistics",
    "nav.annualReports": "Annual Reports",
    "nav.resources": "Resources",
    "nav.newsUpdates": "News & Updates",
    "nav.events": "Events",
    "nav.publications": "Publications",
    "nav.blogStories": "Blog & Stories",
    "nav.reportsMap": "Reports Map",
    "nav.gallery": "Gallery",
    "nav.jobs": "Jobs",
    "nav.contactUs": "Contact Us",
    "nav.joinUs": "Join Us",
    "nav.reportCase": "Report Case",
    "nav.menu": "Menu",
    "nav.programs": "Programs",
    "nav.publicationsLibrary": "Publications Library",
    // Hero
    "hero.title": "Defending Human Rights for All",
    "hero.subtitle":
      "We stand for justice, equality, and dignity. Together, we can create a world where every person's rights are protected and respected.",
    "hero.reportCase": "Report a Case",
    "hero.joinMovement": "Join the Movement",
    // Urgent
    "urgent.text": "Join our campaign to protect freedom of expression",
    "urgent.learnMore": "Learn More",
    // Stats
    "stats.casesHandled": "Cases Handled",
    "stats.peopleSupported": "People Supported",
    "stats.regionsCovered": "Regions Covered",
    "stats.activeCampaigns": "Active Campaigns",
    // How We Work
    "howWeWork.title": "How We Work",
    "howWeWork.subtitle":
      "Our comprehensive approach to defending and promoting human rights across all communities",
    "howWeWork.caseAdvocacy": "Case Advocacy",
    "howWeWork.caseAdvocacyDesc":
      "We provide legal support and advocacy for victims of human rights violations, ensuring justice is served.",
    "howWeWork.communityEngagement": "Community Engagement",
    "howWeWork.communityEngagementDesc":
      "Building strong communities through education, training, and collaborative initiatives.",
    "howWeWork.research": "Research & Publications",
    "howWeWork.researchDesc":
      "Comprehensive reports and research on human rights issues to inform policy and public discourse.",
    "howWeWork.campaigns": "Campaigns",
    "howWeWork.campaignsDesc":
      "Powerful advocacy campaigns driving real change in laws, policies, and public attitudes.",
    "howWeWork.impactTracking": "Impact Tracking",
    "howWeWork.impactTrackingDesc":
      "Transparent reporting on our achievements and the real-world impact of our work.",
    "howWeWork.policyAdvocacy": "Policy Advocacy",
    "howWeWork.policyAdvocacyDesc":
      "Working with governments and institutions to create and strengthen human rights protections.",
    // Links
    "link.reportCase": "Report a Case →",
    "link.viewEvents": "View Events →",
    "link.viewPublications": "View Publications →",
    "link.activeCampaigns": "Active Campaigns →",
    "link.viewImpact": "View Impact →",
    "link.learnMore": "Learn More →",
    // News
    "news.title": "Latest News",
    "news.viewAll": "View All News",
    "news.readMore": "Read More →",
    // Partnerships
    "partnerships.title": "Our Partnerships",
    "partnerships.subtitle":
      "We collaborate with local and international partners to strengthen protection, advocacy, and capacity building for human rights defenders.",
    // CTA
    "cta.title": "Be Part of the Change",
    "cta.subtitle":
      "Your support helps us continue our vital work protecting human rights and fighting injustice. Join us today.",
    "cta.becomeMember": "Become a Member",
    "cta.supportCampaign": "Support a Campaign",
    // Footer
    "footer.about": "About",
    "footer.getInvolved": "Get Involved",
    "footer.resources": "Resources",
    "footer.connect": "Connect",
    "footer.stayUpdated": "Stay updated with our latest news and campaigns",
    "footer.emailPlaceholder": "Enter your email",
    "footer.subscribe": "Subscribe",
    "footer.rights": "© 2026 EHRDC. All rights reserved.",
    // Search
    "search.placeholder": "Search news, campaigns, jobs...",
    "search.noResults": "No results found.",
    "search.hint": "Press Ctrl+K to search",
  },
  am: {
    // Nav
    "nav.home": "መነሻ",
    "nav.about": "ስለ EHRDC",
    "nav.aboutUs": "ስለ እኛ",
    "nav.impactDashboard": "የተፅዕኖ ዳሽቦርድ",
    "nav.pressKit": "የፕሬስ ኪት",
    "nav.whoWeAre": "እነማን ነን",
    "nav.boardMembers": "የቦርድ አባላት",
    "nav.staff": "ሰራተኞች",
    "nav.whatWeDo": "ምን እናደርጋለን",
    "nav.capacityBuilding": "አቅም ግንባታ",
    "nav.advocacy": "ተሟጋችነት",
    "nav.protection": "ጥበቃ",
    "nav.campaigns": "ዘመቻዎች",
    "nav.publication": "ህትመቶች",
    "nav.researchPapers": "የምርምር ወረቀቶች",
    "nav.statistics": "ስታቲስቲክስ",
    "nav.annualReports": "ዓመታዊ ሪፖርቶች",
    "nav.resources": "ሀብቶች",
    "nav.newsUpdates": "ዜናዎች እና ዝማኔዎች",
    "nav.events": "ዝግጅቶች",
    "nav.publications": "ህትመቶች",
    "nav.blogStories": "ብሎግ እና ታሪኮች",
    "nav.reportsMap": "የሪፖርቶች ካርታ",
    "nav.gallery": "ጋለሪ",
    "nav.jobs": "ስራዎች",
    "nav.contactUs": "ያግኙን",
    "nav.joinUs": "ይቀላቀሉን",
    "nav.reportCase": "ጉዳይ ሪፖርት ያድርጉ",
    "nav.menu": "ምናሌ",
    "nav.programs": "ፕሮግራሞች",
    "nav.publicationsLibrary": "የህትመቶች ቤተ-መጻሕፍት",
    // Hero
    "hero.title": "ለሁሉም የሰብዓዊ መብቶችን መከላከል",
    "hero.subtitle":
      "ለፍትህ፣ ለእኩልነት እና ለክብር እንቆማለን። አንድ ላይ፣ የሁሉም ሰው መብቶች የሚጠበቁበት ዓለም መፍጠር እንችላለን።",
    "hero.reportCase": "ጉዳይ ሪፖርት ያድርጉ",
    "hero.joinMovement": "ንቅናቄውን ይቀላቀሉ",
    // Urgent
    "urgent.text": "የሐሳብ ነፃነትን ለመጠበቅ ዘመቻችንን ይቀላቀሉ",
    "urgent.learnMore": "ተጨማሪ ይወቁ",
    // Stats
    "stats.casesHandled": "የተያዙ ጉዳዮች",
    "stats.peopleSupported": "የተደገፉ ሰዎች",
    "stats.regionsCovered": "የተሸፈኑ ክልሎች",
    "stats.activeCampaigns": "ንቁ ዘመቻዎች",
    // How We Work
    "howWeWork.title": "እንዴት እንሰራለን",
    "howWeWork.subtitle":
      "በሁሉም ማህበረሰቦች ውስጥ የሰብዓዊ መብቶችን ለመከላከል እና ለማስፋፋት ያለን አጠቃላይ አቀራረብ",
    "howWeWork.caseAdvocacy": "የጉዳይ ተሟጋችነት",
    "howWeWork.caseAdvocacyDesc":
      "ፍትህ እንዲሰፍን ለሰብዓዊ መብቶች ጥሰት ሰለባዎች የህግ ድጋፍ እና ተሟጋችነት እናቀርባለን።",
    "howWeWork.communityEngagement": "የማህበረሰብ ተሳትፎ",
    "howWeWork.communityEngagementDesc":
      "በትምህርት፣ ስልጠና እና የጋራ ተነሳሽነቶች አማካኝነት ጠንካራ ማህበረሰቦችን መገንባት።",
    "howWeWork.research": "ምርምር እና ህትመቶች",
    "howWeWork.researchDesc":
      "ፖሊሲን እና የህዝብ ውይይትን ለማሳወቅ በሰብዓዊ መብቶች ጉዳዮች ላይ አጠቃላይ ሪፖርቶች እና ምርምር።",
    "howWeWork.campaigns": "ዘመቻዎች",
    "howWeWork.campaignsDesc":
      "በህጎች፣ ፖሊሲዎች እና የህዝብ አመለካከቶች ላይ ትክክለኛ ለውጥ የሚያመጡ ኃይለኛ የተሟጋችነት ዘመቻዎች።",
    "howWeWork.impactTracking": "የተፅዕኖ ክትትል",
    "howWeWork.impactTrackingDesc":
      "ስለ ስኬቶቻችን እና ስለ ስራችን ትክክለኛ ዓለም ተፅዕኖ ግልፅ ሪፖርት ማቅረብ።",
    "howWeWork.policyAdvocacy": "የፖሊሲ ተሟጋችነት",
    "howWeWork.policyAdvocacyDesc":
      "የሰብዓዊ መብቶች ጥበቃዎችን ለመፍጠር እና ለማጠናከር ከመንግስታት እና ተቋማት ጋር መስራት።",
    // Links
    "link.reportCase": "ጉዳይ ሪፖርት ያድርጉ →",
    "link.viewEvents": "ዝግጅቶችን ይመልከቱ →",
    "link.viewPublications": "ህትመቶችን ይመልከቱ →",
    "link.activeCampaigns": "ንቁ ዘመቻዎች →",
    "link.viewImpact": "ተፅዕኖ ይመልከቱ →",
    "link.learnMore": "ተጨማሪ ይወቁ →",
    // News
    "news.title": "የቅርብ ጊዜ ዜናዎች",
    "news.viewAll": "ሁሉንም ዜናዎች ይመልከቱ",
    "news.readMore": "ተጨማሪ ያንብቡ →",
    // Partnerships
    "partnerships.title": "አጋሮቻችን",
    "partnerships.subtitle":
      "ለሰብዓዊ መብቶች ተሟጋቾች ጥበቃ፣ ተሟጋችነት እና አቅም ግንባታን ለማጠናከር ከአካባቢያዊ እና ዓለም አቀፍ አጋሮች ጋር እንተባበራለን።",
    // CTA
    "cta.title": "የለውጡ አካል ይሁኑ",
    "cta.subtitle":
      "ድጋፍዎ የሰብዓዊ መብቶችን ለመጠበቅ እና ኢፍትሃዊነትን ለመዋጋት ወሳኝ ስራችንን እንድንቀጥል ይረዳናል። ዛሬ ይቀላቀሉን።",
    "cta.becomeMember": "አባል ይሁኑ",
    "cta.supportCampaign": "ዘመቻ ይደግፉ",
    // Footer
    "footer.about": "ስለ",
    "footer.getInvolved": "ይሳተፉ",
    "footer.resources": "ሀብቶች",
    "footer.connect": "ይገናኙ",
    "footer.stayUpdated": "በቅርብ ጊዜ ዜናዎቻችን እና ዘመቻዎቻችን ዝማኔ ይቆዩ",
    "footer.emailPlaceholder": "ኢሜልዎን ያስገቡ",
    "footer.subscribe": "ይመዝገቡ",
    "footer.rights": "© 2026 EHRDC. መብቱ በህግ የተጠበቀ ነው።",
    // Search
    "search.placeholder": "ዜናዎችን፣ ዘመቻዎችን፣ ስራዎችን ይፈልጉ...",
    "search.noResults": "ምንም ውጤት አልተገኘም።",
    "search.hint": "ለፍለጋ Ctrl+K ይጫኑ",
  },
};
