import type { BeforeAfterCase } from "../types";

const publicImage = (name: string) =>
  `${import.meta.env.BASE_URL}images/${name}`;

export const beforeAfterData: BeforeAfterCase[] = [
  {
    id: "case-01",
    category: "Veneers",
    title: "Full Upper Arch Bespoke Ceramic Veneers",
    patientAge: "34 years old",
    treatment: "10 Handcrafted Feldspathic Porcelain Veneers",
    doctor: "Dr. Elena Vance",
    duration: "2 Weeks (3 Visits)",
    description:
      "Patient presented with severe enamel fluorosis staining, uneven incisal wear, and a narrow smile corridor. We designed a wider buccal corridor with multi-layered translucent ceramics that perfectly harmonized with her warm skin tone.",
    beforeImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    afterImage: publicImage("hero-smile.jpg"),
    tags: ["Porcelain Veneers", "Smile Makeover", "Biomimetic"],
  },
  {
    id: "case-02",
    category: "Whitening",
    title: "Medical Power Whitening & Micro-Enamel Polishing",
    patientAge: "28 years old",
    treatment: "Philips Zoom WhiteSpeed™ + ACP Enamel Sealant",
    doctor: "Dr. Elena Vance",
    duration: "60 Minutes",
    description:
      "Extrinsic staining from espresso and tea eliminated in a single visit, elevating shade from A3.5 to BL2 (8 shades brighter) with zero post-treatment sensitivity.",
    beforeImage:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=800&auto=format&fit=crop",
    tags: ["Zoom Whitening", "Instant Lift", "Zero Sensitivity"],
  },
  {
    id: "case-03",
    category: "Implants",
    title: "Computer-Guided Anterior Single Tooth Implant",
    patientAge: "42 years old",
    treatment: "Guided Straumann BLX Titanium Implant + Custom Zirconia Crown",
    doctor: "Dr. Marcus Chen",
    duration: "Same-Day Provisional, 12 Weeks Final Osseointegration",
    description:
      "Patient suffered traumatic root fracture of upper right central incisor. Guided surgical extraction and immediate implant placement preserved the natural gum papillae without bone loss.",
    beforeImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    tags: ["Guided Surgery", "Dental Implant", "Anterior Aesthetics"],
  },
  {
    id: "case-04",
    category: "Orthodontics",
    title: "Adult Clear Aligner Arch Expansion & Crowding Correction",
    patientAge: "31 years old",
    treatment: "Comprehensive Invisalign Clear Aligners",
    doctor: "Dr. Sophia Laurent",
    duration: "7 Months",
    description:
      "Severe lower anterior crowding and an asymmetric crossbite corrected without tooth extractions. Followed by minor edge contouring for a seamless smile arc.",
    beforeImage:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    tags: ["Invisalign", "Non-Extraction", "Arch Expansion"],
  },
  {
    id: "case-05",
    category: "Smile Makeover",
    title: "Complex Full Mouth Aesthetic & Functional Rejuvenation",
    patientAge: "49 years old",
    treatment: "Combined 4 Implants, 8 Veneers & Airway Bite Realignment",
    doctor: "Multidisciplinary (Dr. Vance & Dr. Chen)",
    duration: "4 Months",
    description:
      "Restoration of vertical dimension lost to severe nocturnal bruxism (grinding). Restored youthful facial proportions, relieved chronic headaches, and delivered an exquisite, natural smile.",
    beforeImage:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    afterImage: publicImage("hero-smile.jpg"),
    tags: ["Full Mouth", "Bite Elevation", "Ceramic Rejuvenation"],
  },
];
