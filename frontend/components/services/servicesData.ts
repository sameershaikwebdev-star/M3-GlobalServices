export type Service = {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  reverse: boolean;
  type: "list" | "tags" | "grid";
  items: string[];
};

export const services: Service[] = [
  {
    id: "healthcare",
    subtitle: "Healthcare",
    title: "Healthcare Services",
    description:
      "End-to-end revenue cycle management solutions for healthcare providers worldwide.",
    image: "/images/services/healthcare.jpg",
    reverse: false,
    type: "list",
    items: [
      "Medical Coding",
      "Medical Billing",
      "Charge Entry",
      "AR Calling",
      "Insurance Verification",
    ],
  },

  {
    id: "bpo",
    subtitle: "BPO Services",
    title: "BPO & Call Center Services",
    description:
      "Delivering reliable outsourcing solutions with experienced professionals and modern technologies.",
    image: "/images/services/bpo.jpg",
    reverse: true,
    type: "list",
    items: [
      "Outbound Voice Campaigns",
      "Semi-Voice Processes",
      "Non-Voice Support Services",
      "Back Office Operations",
    ],
  },

  {
    id: "software",
    subtitle: "Software Engineering",
    title: "Web Development Projects",
    description:
      "Enterprise web applications built with modern frameworks and cloud-native technologies.",
    image: "/images/services/web-development.jpg",
    reverse: false,
    type: "tags",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Vue",
      "TypeScript",
      "Spring Boot",
      "Node.js",
      "FastAPI",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Git",
    ],
  },

  {
    id: "publishing",
    subtitle: "Data & Publishing",
    title: "Data & Publishing Services",
    description:
      "IT-enabled publishing, OCR, document conversion and business process outsourcing solutions.",
    image: "/images/services/data-publishing.jpg",
    reverse: true,
    type: "grid",
    items: [
      "XML Conversion",
      "ePub Conversion",
      "PDF to Excel",
      "OCR",
      "Word Formatting",
      "Layout Design",
      "Data Entry",
      "Keying Projects",
      "Backend Support",
      "Form Management",
    ],
  },
];