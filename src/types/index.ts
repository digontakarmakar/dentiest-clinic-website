export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  category: 'General' | 'Cosmetic' | 'Restorative' | 'Orthodontics' | 'Preventive';
  heroImage: string;
  secondaryImage?: string;
  badge?: string;
  duration: string;
  recovery: string;
  idealCandidate: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  technologiesUsed: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  role: string;
  title: string;
  experienceYears: number;
  image: string;
  bio: string;
  extendedBio: string[];
  education: string[];
  certifications: string[];
  specializations: string[];
  philosophy: string;
  quote: string;
  casesCount: number;
}

export interface BeforeAfterCase {
  id: string;
  category: 'All' | 'Whitening' | 'Veneers' | 'Implants' | 'Orthodontics' | 'Smile Makeover';
  title: string;
  patientAge: string;
  treatment: string;
  doctor: string;
  duration: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  tags: string[];
}

export interface ReviewItem {
  id: string;
  patientName: string;
  location: string;
  rating: number;
  date: string;
  treatment: string;
  doctor: string;
  quote: string;
  detailedReview: string;
  patientAvatar?: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'Oral Health' | 'Cosmetic Dentistry' | 'Dental Implants' | 'Orthodontics' | 'Patient Guide';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  readTime: string;
  coverImage: string;
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      subheading?: string;
      body: string[];
      keyTakeaway?: string;
    }[];
    conclusion: string;
  };
  relatedSlugs: string[];
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Cosmetic' | 'Treatments' | 'Appointments' | 'Insurance & Pricing';
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  serviceId: string;
  dentistId: string;
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  hasDentalAnxiety: boolean;
  isNewPatient: boolean;
}
