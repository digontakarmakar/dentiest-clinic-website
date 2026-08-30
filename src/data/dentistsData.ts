import type { DentistProfile } from '../types';

export const dentistsData: DentistProfile[] = [
  {
    id: 'dr-elena-vance',
    slug: 'dr-elena-vance',
    name: 'Dr. Elena Vance, DDS, FAGD',
    role: 'Clinical Director & Master Aesthetic Dentist',
    title: 'Specialist in Cosmetic Smile Architecture & Minimally Invasive Veneers',
    experienceYears: 16,
    image: '/images/dr-elena.jpg',
    bio: 'Renowned for her artistic eye and perfectionist hand, Dr. Vance has pioneered biomimetic smile rejuvenation protocols across North America and Europe.',
    extendedBio: [
      'Dr. Elena Vance received her Doctorate of Dental Surgery with honors from Harvard School of Dental Medicine, followed by advanced postgraduate fellowships in Aesthetic Dentistry at the University of Geneva and the Rosenthal Institute for Aesthetic Dentistry at NYU.',
      'With over 16 years of dedicated private practice, Dr. Vance focuses exclusively on facial-driven smile design, ultra-thin feldspathic porcelain veneers, and full-mouth rehabilitations. Her philosophy centers around preserving maximum biological tooth structure while creating smiles that look completely organic, youthful, and luminous.',
      'She is a Fellow of the Academy of General Dentistry (FAGD), an active accredited member of the American Academy of Cosmetic Dentistry (AACD), and frequently lectures internationally on micro-aesthetic protocols.'
    ],
    education: [
      'DDS — Harvard School of Dental Medicine (Summa Cum Laude)',
      'Postgraduate Aesthetic Fellowship — University of Geneva, Switzerland',
      'Advanced Continuum in Smile Aesthetics — Rosenthal Institute, NYU'
    ],
    certifications: [
      'Fellow of the Academy of General Dentistry (FAGD)',
      'Accredited Member, American Academy of Cosmetic Dentistry (AACD)',
      'Certified Digital Smile Design (DSD) Master Instructor'
    ],
    specializations: [
      'Porcelain Veneers & Smile Makeovers',
      'Digital Smile Design (DSD)',
      'Biomimetic Enamel Preservation',
      'Complex Aesthetic Restorations'
    ],
    philosophy: 'A truly beautiful smile is not created with a cookie-cutter template. It is an individualized harmony of bone structure, lip curvature, enamel light translucency, and the unique spirit of the person wearing it.',
    quote: 'Our mission is to replace dental anxiety with confidence, elevating dentistry from a medical procedure into an empowering wellness experience.',
    casesCount: 4200
  },
  {
    id: 'dr-marcus-chen',
    slug: 'dr-marcus-chen',
    name: 'Dr. Marcus Chen, DMD, MS, DICOI',
    role: 'Lead Oral Surgeon & Implantologist',
    title: 'Specialist in Computer-Guided Implantology & Bone Regeneration',
    experienceYears: 18,
    image: '/images/dr-marcus.jpg',
    bio: 'A visionary surgeon who combines 3D guided computer navigation with gentle microsurgical techniques to deliver lifelong tooth replacement.',
    extendedBio: [
      'Dr. Marcus Chen completed his dental training at the University of Pennsylvania School of Dental Medicine and earned his Master of Science in Periodontics and Implant Surgery at Columbia University Medical Center.',
      'As a Diplomate of the International Congress of Oral Implantologists (DICOI), Dr. Chen has placed over 6,000 implants with a clinical success rate of 99.1%. He is renowned for his mastery of immediate full-arch restorations (All-on-X), sinus bone augmentation, and computer-guided virtual surgical stent planning.',
      'Dr. Chen believes in utilizing ultra-gentle surgical protocols, computer-assisted local anesthesia, and restorative precision to make implant placement completely comfortable.'
    ],
    education: [
      'DMD — University of Pennsylvania School of Dental Medicine',
      'MS in Periodontics & Implantology — Columbia University Medical Center',
      'Hospital Residency — Mount Sinai Medical Center, New York'
    ],
    certifications: [
      'Diplomate, International Congress of Oral Implantologists (DICOI)',
      'Board Certified in Periodontology & Dental Implant Surgery',
      'Advanced Cardiac Life Support (ACLS) & Sedation Specialist'
    ],
    specializations: [
      '3D Computer-Guided Dental Implants',
      'Full-Arch Same-Day Teeth Restoration',
      'Platelet-Rich Fibrin (PRF) Bone Regeneration',
      'Sedation & Anxiety-Free Surgery'
    ],
    philosophy: 'Engineering permanence requires surgical precision down to the fraction of a millimeter, but true healing requires empathy, patience, and absolute comfort.',
    quote: 'Restoring a patient\'s ability to laugh, speak, and eat without hesitation is the most rewarding privilege in modern medicine.',
    casesCount: 6500
  },
  {
    id: 'dr-sophia-laurent',
    slug: 'dr-sophia-laurent',
    name: 'Dr. Sophia Laurent, DDS, MS',
    role: 'Specialist Orthodontist & Airway Architect',
    title: 'Invisalign Diamond Apex Provider & TMJ Balance Specialist',
    experienceYears: 12,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    bio: 'Pioneering clear aligner orthodontics with a specialized focus on facial profile aesthetics, airway health, and bite ergonomics.',
    extendedBio: [
      'Dr. Sophia Laurent completed her DDS at UCLA School of Dentistry and pursued her Master of Science and Orthodontic Specialty Residency at the University of California, San Francisco (UCSF).',
      'Ranked among the top 1% of Invisalign providers globally (Diamond Apex Status), Dr. Laurent designs clear aligner trajectories that do not simply straighten teeth, but optimize breathing airway passages, relieve TMJ tension, and support the lower third of the face against premature aging.',
      'She works closely with Dr. Vance and Dr. Chen on multidisciplinary cosmetic and restorative cases to ensure teeth are positioned perfectly before final veneers or crowns.'
    ],
    education: [
      'DDS — UCLA School of Dentistry (Dean’s Honor List)',
      'MS & Certificate in Orthodontics — UCSF School of Dentistry',
      'Fellowship in Adult Craniofacial Orthodontics'
    ],
    certifications: [
      'Invisalign Diamond Apex Provider',
      'Board Certified by the American Board of Orthodontics (ABO)',
      'Member, American Association of Orthodontists (AAO)'
    ],
    specializations: [
      'Adult & Teen Clear Aligner Therapy (Invisalign & Spark)',
      'Airway-Centric Orthodontic Design',
      'Accelerated Non-Extraction Orthodontics',
      'TMJ & Bite Force Optimization'
    ],
    philosophy: 'Orthodontics is the architecture beneath the cosmetic facade. When the alignment of teeth and jaw is in biological harmony, natural beauty follows effortlessly.',
    quote: 'The right alignment does not just transform how you look in pictures—it transforms how you sleep, breathe, and live.',
    casesCount: 3800
  }
];
