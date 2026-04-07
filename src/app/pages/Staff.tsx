import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const staffMembers = [
  {
    name: "Yared Hailemariam",
    role: "Executive Director",
    bio: "Yared Hailemariam serves as the Executive Director of the Ethiopian Human Rights Defender Center (EHRDC). Under his guidance, EHRDC offers crucial services including emergency protection, advocacy, awareness campaigns, capacity building, and technological support to human rights defenders. Yared is renowned for his founding roles in the East and Horn of Africa Human Rights Defenders Network and the Association for Human Rights in Ethiopia (AHRE) in addition to the Center. He has served multiple roles at the Ethiopian Human Rights council before he was forced to relocate to Belgium. His return to Ethiopia marked a significant contribution as he helped establish multiple human rights organizations after enduring years of exile.",
  },
  {
    name: "Tarikawit Fikadu",
    role: "Program Director",
    bio: "Tarikawit Fikadu brings over a decade of diverse experience in law, public enterprises, consultancy, and civil society. With a law degree from Wollo University and a Master's in constitutional law and human rights from Umea University, Sweden, she serves as Program Director at the Ethiopian Human Rights Defenders Center (EHRDC). In this role, she oversees programs, represents the center in various networks, and manages projects and training workshops. Tarikawit is also actively involved in community initiatives, serving on boards and contributing to women's rights through her published papers.",
  },
  {
    name: "Kalkidan Tesfaye",
    role: "Advocacy and Communications Manager",
    bio: "Kalkidan, with Masters in English language and Literature, BSC degree in Computer Science and Certifications in Journalists has a diverse background in program management, communications, advocacy and creative writing. She has collaborated with notable organizations like the UN and EWF in advocating for human rights. At EHRDC, she has worked in many positions from program to advocacy and communications and focal for digital safety and security. In her current role, she ensures the Center's mission, goals, and activities are effectively communicated to members, policymakers, media, and the public. She effectively manages and develops external, internal, and digital advocacy and communication strategy for the organization.",
  },
  {
    name: "Bersabeh Solomon",
    role: "Program and Resource Mobilization Manager",
    bio: "Bersabeh is a seasoned professional with a background in Law, holding a Bachelor's degree from Dire Dawa University and a Master's degree from Addis Ababa University, specializing in Human Rights Law. Her expertise spans various roles, from lecturing to working in a local non-governmental organization. Over the years, Bersabeh has held key positions, including Research and Advocacy Coordinator, where she showcased her proficiency in project management and implementation. Her diverse experiences have equipped her with a broad skill set, allowing her to excel in different realms and continuously advance in her career.",
  },
  {
    name: "Noah Yesuf",
    role: "Protection and Research Manager",
    bio: "Noah is a Protection Manager and Research Manager at the Ethiopian Human Rights Defenders Center since October 2022. Prior to his current position, he served as an Assistant Researcher and Trial Monitoring Officer at the Association for Human Rights in Ethiopia. Additionally, Noah worked as an Assistant Lecturer at Wollo University School of Law, where he obtained his Bachelor's Degree. His responsibilities include human rights education, facilitating debates, conducting assessments and research, drafting press statements, manuals and guidelines, and handling protection case management.",
  },
  {
    name: "Leilt Tilahun",
    role: "Administrative Manager",
    bio: "Leilt Tilahun is a graduate of law from Haramaya University, and a master's candidate in project management from Addis Ababa University. In 2022 G.C, Leilt joined EHRDC as a project assistant and then was promoted to Administrative Coordinator. She plays a vital role in strategic HR, procurement, and logistics services. She also serves as a safeguarding officer, ensuring safeguarding policy adherence by staff and all parties interacting with the center.",
  },
  {
    name: "Fikadu Dufera",
    role: "Finance Manager",
    bio: "Fikadu has served in different positions at EHRDC since 2021, bringing over 6 years of finance experience from senior positions in governmental and non-governmental organizations. His expertise spans budgeting, financial planning and analysis, reporting, cash flow management, procurement, risk management, and compliance. In his role at EHRDC, Fikadu plays a vital part in overseeing the organization's financial operations.",
  },
  {
    name: "Hana Lale",
    role: "Advocacy and Communications Officer",
    bio: "Hana Lale, a Women's Rights Activist, is currently pursuing a Master's Degree in Human Rights Law at Addis Ababa University. With bachelor's degrees in law and business management, she brings strong advocacy, communication, and campaigning skills to her work. Hana is also a trainer in advocacy and digital security, dedicated to promoting and protecting human rights.",
  },
  {
    name: "Hewan Ayalew",
    role: "Finance Officer",
    bio: "Hewan Ayalew holds a bachelor's degree in Accounting from Adams University and a Master's degree in Business Administration. Throughout her career, Hewan has gained extensive experience in accounting, marketing, and management across private and government sectors. She currently serves as a Finance Officer for EHRDC.",
  },
  {
    name: "Rediet Gezahegne",
    role: "Junior Program Officer",
    bio: "Rediet Gezahegn, a dedicated youth human rights and social justice advocate with a law background from Hawassa University, works as a Junior Program Officer. She supports design and implementation of different projects and also assists the Protection and Advocacy department. Rediet has experience participating in and organizing moot court competitions, human rights advocacy, and inclusive peace-building activities.",
  },
  {
    name: "Natnael Tilahun",
    role: "Junior Finance and Admin Officer",
    bio: "Natnael Tilahun, an honor student and recent graduate with a Bachelor's degree in Accounting and Finance, currently pursuing his master's degree in the same field, joined EHRDC as a Finance and Admin Assistant. Starting as an intern, his strong performance led to his hiring. Natnael supports finance and administrative functions with dedication and drive.",
  },
];

export function Staff() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl mb-3">EHRDC Staff</h1>
        <p className="mb-8 text-muted-foreground">
          Core team members working across programs, advocacy, protection, and operations.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((staff) => (
            <Card key={staff.name} className="shadow-sm">
              <CardContent className="pt-6">
                <ImageWithFallback
                  src={`https://placehold.co/420x280/f1f3f5/495057?text=${encodeURIComponent(staff.name)}`}
                  alt={`${staff.name} placeholder`}
                  className="mb-4 h-44 w-full rounded-md object-cover"
                />
                <h3 className="text-lg">{staff.name}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{staff.role}</p>
                <p className="mb-3 text-sm text-muted-foreground">{staff.bio}</p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  LinkedIn
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
