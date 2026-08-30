import type { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    subtitle: 'Porcelain Veneers, Bonding & Digital Smile Design',
    shortDescription: 'Custom-crafted aesthetic transformations designed with facial harmony and microscopic precision.',
    fullDescription: 'Our cosmetic dentistry practice combines fine dental artistry with cutting-edge 3D Digital Smile Design (DSD). Whether you desire ultra-thin porcelain veneers, composite bonding, or a complete smile architecture overhaul, our bespoke approach preserves maximum natural tooth structure while achieving luminous, organic beauty.',
    category: 'Cosmetic',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    badge: 'Signature Treatment',
    duration: '2 - 3 visits (over 10-14 days)',
    recovery: 'Immediate return to daily activities',
    idealCandidate: [
      'Individuals with chipped, uneven, or discolored enamel',
      'Patients seeking subtle symmetry and proportional balance',
      'Those desiring a radiant, red-carpet ready smile transformation'
    ],
    benefits: [
      {
        title: 'Bespoke Facial Harmony',
        description: 'Every veneer is customized to match your facial bone structure, skin tone, and lip dynamics.'
      },
      {
        title: 'Minimally Invasive Protocol',
        description: 'Conservative preparation techniques ensure minimal to zero reduction of healthy natural enamel.'
      },
      {
        title: 'Stain-Resistant Translucent Porcelain',
        description: 'Medical-grade feldspathic ceramics mimic the light refraction and depth of natural teeth.'
      },
      {
        title: 'Preview Before Final Placement',
        description: 'Experience a temporary 3D mock-up in your mouth before permanent bonding takes place.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Digital Aesthetic Analysis',
        description: 'Comprehensive 3D intraoral optical scan, high-definition facial photography, and smile line evaluation.'
      },
      {
        step: '02',
        title: '3D Simulation & Mock-Up Trial',
        description: 'We construct a physical aesthetic trial in your mouth so you can test and approve your new smile in real life.'
      },
      {
        step: '03',
        title: 'Micro-Preparation & Master Crafting',
        description: 'Gentle micro-preparation followed by artisan ceramic fabrication in our master Swiss dental laboratory.'
      },
      {
        step: '04',
        title: 'Precision Bonding & Final Polish',
        description: 'Seamless adhesive cementation with high-strength resin under dental microscopic magnification.'
      }
    ],
    technologiesUsed: [
      'Digital Smile Design (DSD) Software',
      'Trios 5 Wireless 3D Scanner',
      'Dental Operating Microscopes (Zeiss)',
      'Handcrafted E.max & Feldspathic Ceramic'
    ],
    faqs: [
      {
        question: 'How long do porcelain veneers last?',
        answer: 'With proper oral hygiene and regular preventive cleanings, high-quality porcelain veneers typically last between 15 to 20+ years.'
      },
      {
        question: 'Will veneers look natural?',
        answer: 'Yes. We avoid bulky, opaque, or overly artificial appearances. Our ceramics are crafted with multi-layered translucency and subtle texture to reflect light exactly like natural enamel.'
      },
      {
        question: 'Is the procedure painful?',
        answer: 'Not at all. We utilize gentle local numbing and comfort protocols (including calming acoustic therapy). Most patients report zero discomfort during or after the visit.'
      }
    ]
  },
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    title: 'Dental Implants',
    subtitle: 'Computer-Guided Implants & Full Arch Restoration',
    shortDescription: 'Permanent, biologically integrated tooth replacement engineered with 3D CBCT navigation.',
    fullDescription: 'Smileora Dental delivers state-of-the-art implantology using guided 3D surgical navigation and biocompatible titanium or ceramic zirconia implants. We restore chewing function, bone vitality, and genuine aesthetics with long-lasting structural permanence.',
    category: 'Restorative',
    heroImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
    secondaryImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop',
    badge: 'Permanent Solution',
    duration: 'Single tooth (1-2 hours) | Full arch (Same-day provisional)',
    recovery: '2 - 3 days mild tenderness, full osseointegration in 3-4 months',
    idealCandidate: [
      'Patients missing one, multiple, or all natural teeth',
      'Individuals looking to replace loose or uncomfortable dentures',
      'Patients with adequate or restorable jawbone density'
    ],
    benefits: [
      {
        title: 'Preserves Jawbone Architecture',
        description: 'Stimulates the jawbone naturally, preventing the facial collapse and bone resorption that follows tooth loss.'
      },
      {
        title: '98.5% Success Rate',
        description: 'Computed-guided surgical precision ensures optimal placement angle, depth, and structural stability.'
      },
      {
        title: 'Lifelong Durability',
        description: 'Implant fixtures fuse directly with living bone, functioning with the exact strength of natural roots.'
      },
      {
        title: 'Zero Impact on Adjacent Teeth',
        description: 'Unlike traditional bridges, neighboring healthy teeth do not need to be shaved down.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: '3D CBCT Bone & Nerve Mapping',
        description: 'Ultra-low-dose 3D Cone Beam Computed Tomography maps your anatomical structures to the millimeter.'
      },
      {
        step: '02',
        title: 'Virtual Guided Surgical Planning',
        description: 'Using surgical CAD software, we design a custom 3D-printed surgical stent for flawless fixture placement.'
      },
      {
        step: '03',
        title: 'Gentle Implant Insertion',
        description: 'Minimally invasive placement using microsurgical instruments and local anesthesia for maximum patient comfort.'
      },
      {
        step: '04',
        title: 'Custom Zirconia Crown Delivery',
        description: 'Once fully integrated, a custom screw-retained ceramic crown is securely fitted to restore full function.'
      }
    ],
    technologiesUsed: [
      'Planmeca 3D CBCT Imaging',
      'Guided Surgical Stents (Formlabs 3D)',
      'Straumann & Nobel Biocare Swiss Implants',
      'Custom CAD/CAM Zirconia Abutments'
    ],
    faqs: [
      {
        question: 'Are dental implants painful to place?',
        answer: 'Most patients are pleasantly surprised to learn that implant surgery causes less post-operative soreness than a routine tooth extraction. Local anesthesia completely eliminates pain during the procedure.'
      },
      {
        question: 'Can I get teeth in a single day?',
        answer: 'Yes, for suitable candidates needing full-arch or immediate anterior replacement, we offer Immediate Load (Same-Day Teeth) with temporary aesthetic crowns delivered on day one.'
      }
    ]
  },
  {
    id: 'orthodontics',
    slug: 'orthodontics',
    title: 'Orthodontics & Clear Aligners',
    subtitle: 'Invisalign®, Spark™ & Accelerated Orthodontics',
    shortDescription: 'Discreet, digitally mapped alignment systems designed for seamless adult aesthetics and airway health.',
    fullDescription: 'Straighten your teeth comfortably without metal brackets or wires. Our clinic specializes in advanced clear aligner biomechanics, combining digital airway assessment with aesthetic dental alignment for a balanced, functional bite.',
    category: 'Orthodontics',
    heroImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop',
    badge: 'Discreet & Clear',
    duration: '4 - 12 months on average',
    recovery: 'Zero downtime; aligners are removable during meals',
    idealCandidate: [
      'Adults and teens seeking straight teeth without metal braces',
      'Patients with crowding, gaps, overbite, underbite, or crossbite',
      'Individuals wanting to optimize their smile line before cosmetic bonding'
    ],
    benefits: [
      {
        title: 'Virtually Invisible',
        description: 'Ultra-clear medical polyurethane aligners fit snugly over teeth and go unnoticed in professional settings.'
      },
      {
        title: 'No Dietary Restrictions',
        description: 'Simply remove your aligners while eating, drinking, brushing, and flossing.'
      },
      {
        title: 'Predictable Digital Timelines',
        description: 'ClinCheck 3D animations show you every weekly movement from start to finish before you even begin.'
      },
      {
        title: 'Optimal Airway & TMJ Alignment',
        description: 'We align teeth in harmony with your temporomandibular joints and breathing physiology.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Digital Bite & Airway Scan',
        description: 'Instant 60-second optical scan capturing 6,000 images per second without messy impressions.'
      },
      {
        step: '02',
        title: 'Custom Orthodontic Blueprint',
        description: 'Our certified orthodontist custom designs each aligner tray movement for optimal aesthetic and bite balance.'
      },
      {
        step: '03',
        title: 'Tray Delivery & Remote Monitoring',
        description: 'Receive your custom aligner series with optional AI remote monitoring for fewer clinic visits.'
      },
      {
        step: '04',
        title: 'Retention & Final Smile Reveal',
        description: 'Finish with custom nighttime retainers and complimentary enamel whitening to showcase your aligned smile.'
      }
    ],
    technologiesUsed: [
      'iTero Element 5D Plus Scanner',
      'Invisalign ClinCheck Software',
      'Dental Monitoring AI App',
      'Vivera Custom Retainers'
    ],
    faqs: [
      {
        question: 'How many hours a day do I need to wear the aligners?',
        answer: 'For optimal results, aligners should be worn for 20 to 22 hours per day, removing them only when eating, drinking anything other than water, and brushing.'
      },
      {
        question: 'Is clear aligner treatment faster than metal braces?',
        answer: 'In many adult cases, clear aligner therapy can achieve desired aesthetic outcomes in 6 to 12 months, which is often 30% to 50% faster than traditional bracket orthodontics.'
      }
    ]
  },
  {
    id: 'teeth-whitening',
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    subtitle: 'Philips Zoom WhiteSpeed™ & Zero-Sensitivity Laser Whitening',
    shortDescription: 'Professional clinical brightening delivering up to 8 shades whiter with integrated enamel desensitization.',
    fullDescription: 'Revitalize dull, aged, or discolored enamel with our medical-grade power whitening treatments. Utilizing wavelength-matched LED technology and calcium phosphate infusion, we dissolve deep coffee, wine, and age stains while fortifying tooth enamel.',
    category: 'Cosmetic',
    heroImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1200&auto=format&fit=crop',
    badge: 'Instant Results',
    duration: '60 - 90 minutes (single appointment)',
    recovery: 'Immediate results with zero downtime',
    idealCandidate: [
      'Patients with yellowing or extrinsic discoloration from food, tea, or wine',
      'Individuals preparing for weddings, speaking events, or photoshoots',
      'Anyone seeking an instant boost in facial brightness and confidence'
    ],
    benefits: [
      {
        title: 'Up to 8 Shades Brighter in 60 Minutes',
        description: 'Medical-grade whitening gel activated by targeted cool LED technology.'
      },
      {
        title: 'Enamel-Safe Formulation',
        description: 'Contains ACP (Amorphous Calcium Phosphate) to seal micro-pores and protect natural enamel.'
      },
      {
        title: 'Virtually Zero Sensitivity',
        description: 'Advanced desensitizing serums applied immediately following treatment.'
      },
      {
        title: 'Includes Custom Take-Home Maintenance',
        description: 'Receive custom lab-fitted trays and maintenance gel for long-term touch-ups at home.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Enamel Assessment & Shade Matching',
        description: 'We document your starting baseline shade with calibrated digital clinical photography.'
      },
      {
        step: '02',
        title: 'Gingival Barrier Protection',
        description: 'Delicate application of a light-cured barrier that isolates and protects your gums completely.'
      },
      {
        step: '03',
        title: 'Three 15-Minute Light Cycles',
        description: 'Fresh application of clinical peroxide gel activated under the Zoom Blue LED light.'
      },
      {
        step: '04',
        title: 'Post-Treatment Fluoride Shield',
        description: 'Application of soothing mineral glaze to eliminate sensitivity and lock in radiant white brilliance.'
      }
    ],
    technologiesUsed: [
      'Philips Zoom WhiteSpeed LED System',
      'LaserSmile Diode Accelerator',
      'Relief ACP Desensitizing Gel',
      'VITA Easyshade V Digital Colorimeter'
    ],
    faqs: [
      {
        question: 'Will teeth whitening damage my enamel?',
        answer: 'No. Professional clinical whitening carried out under dental supervision is entirely safe for tooth enamel. The active hydrogen peroxide penetrates the micro-pores of enamel to oxidize color molecules without stripping tooth structure.'
      },
      {
        question: 'How long will my whitening results last?',
        answer: 'Results typically last 12 to 24 months depending on diet (coffee, tea, red wine). With the complimentary custom home maintenance kit we provide, you can easily maintain your peak shade indefinitely.'
      }
    ]
  },
  {
    id: 'general-dentistry',
    slug: 'general-dentistry',
    title: 'General Dentistry',
    subtitle: 'Comprehensive Examinations, Biomimetic Restorations & Sleep Dentistry',
    shortDescription: 'Gentle, holistic foundational oral healthcare focused on long-term tooth preservation and biological health.',
    fullDescription: 'From precision composite tooth-colored fillings to gentle root canal therapies under microscope magnification, our general dental suite is designed to make routine care peaceful, thorough, and completely pain-free.',
    category: 'General',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
    badge: 'Essential Wellness',
    duration: '45 - 90 minutes per session',
    recovery: 'Immediate',
    idealCandidate: [
      'Individuals seeking an exceptional primary care dental practice',
      'Patients needing replacement of old failing amalgam fillings',
      'Those with dental anxiety looking for gentle, compassionate treatment'
    ],
    benefits: [
      {
        title: 'Biomimetic Tooth Restoration',
        description: 'We replicate the natural elasticity, strength, and appearance of real tooth tissue.'
      },
      {
        title: 'Microscopic Diagnostics',
        description: 'Catch micro-cavities and hairline fractures years before they cause discomfort.'
      },
      {
        title: 'Sedation & Relaxation Options',
        description: 'Nitrous oxide, oral conscious relaxation, and noise-cancelling acoustic therapy available.'
      },
      {
        title: 'Digital Impressions (No Gagging)',
        description: 'Comfortable optical wand scanning eliminates uncomfortable traditional putty trays.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: '360° Comprehensive Diagnostics',
        description: 'Periodontal probing, digital radiography, intraoral photographs, and cancer screening.'
      },
      {
        step: '02',
        title: 'Personalized Treatment Blueprint',
        description: 'Transparent walkthrough of findings on large 4K display monitors with honest recommendations.'
      },
      {
        step: '03',
        title: 'Gentle Clinical Care',
        description: 'Stress-free treatment in private spa-inspired operatory suites with heated memory-foam dental chairs.'
      },
      {
        step: '04',
        title: 'Preventive Maintenance Plan',
        description: 'Proactive maintenance schedule designed to protect your dental investment over your lifetime.'
      }
    ],
    technologiesUsed: [
      'Zeiss Operating Microscopes',
      'KaVo Sonic Handpieces (Ultra-Quiet)',
      'Digital Low-Radiation X-Rays',
      'The Wand Computerized Anesthesia'
    ],
    faqs: [
      {
        question: 'How often should I have a dental check-up?',
        answer: 'We recommend comprehensive checkups every 6 months for most patients to detect subtle issues early and maintain healthy gums.'
      },
      {
        question: 'Do you offer options for dental anxiety?',
        answer: 'Yes! We specialize in comfort-first dentistry. We offer relaxing weighted blankets, calming aromatherapy, noise-canceling headphones with curated soundscapes, and nitrous oxide sedation.'
      }
    ]
  },
  {
    id: 'preventive-care',
    slug: 'preventive-care',
    title: 'Preventive Care & Hygiene',
    subtitle: 'Guided Biofilm Therapy (GBT) & Spa-Like Airflow Cleanings',
    shortDescription: 'Gentle Swiss Guided Biofilm Therapy removing stains and bacterial plaque with warm water and micro-powder.',
    fullDescription: 'Experience the world standard in preventive oral hygiene with Swiss Guided Biofilm Therapy (GBT). Gone are the days of painful scraping. Using gentle warmed water, erythritol powder, and ultrasonic resonance, our hygiene sessions feel like a luxury facial for your smile.',
    category: 'Preventive',
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
    badge: 'Pain-Free Hygiene',
    duration: '45 - 60 minutes',
    recovery: 'Instant silky clean feel',
    idealCandidate: [
      'Anyone desiring stain-free, ultra-clean teeth with zero scraping discomfort',
      'Patients with dental implants, veneers, or orthodontic braces',
      'Those with sensitive teeth or gingivitis'
    ],
    benefits: [
      {
        title: 'Swiss Airflow® Technology',
        description: 'Micro-fine erythritol powder removes 100% of bacterial biofilm without scratching tooth enamel.'
      },
      {
        title: 'Warmed Water Irrigation',
        description: 'Temperature-controlled soothing water eliminates cold sensitivity completely.'
      },
      {
        title: 'Removes Coffee, Tea & Tobacco Stains',
        description: 'Deep microscopic stain removal restores natural brightness in a single visit.'
      },
      {
        title: 'Protects Dental Implants & Veneers',
        description: '100% safe for porcelain surfaces and titanium fixtures without scratching.'
      }
    ],
    processSteps: [
      {
        step: '01',
        title: 'Biofilm Disclosing Dye',
        description: 'A harmless vegetable-based dye highlights hidden bacteria so you and your hygienist see what needs care.'
      },
      {
        step: '02',
        title: 'Airflow® Warm Powder Spray',
        description: 'Gentle stream of warm water and micro-erythritol powder painlessly removes all biofilm and stains.'
      },
      {
        step: '03',
        title: 'Piezon® NO-PAIN Ultrasonic Tartar Removal',
        description: 'Smart sensor ultrasonic tips adapt power dynamically for smooth calculus elimination.'
      },
      {
        step: '04',
        title: 'Fluoride & Mineral Glaze',
        description: 'Remineralizing treatment that leaves teeth feeling ultra-smooth, glossy, and fortified.'
      }
    ],
    technologiesUsed: [
      'EMS AIRFLOW® Prophylaxis Master (Swiss Made)',
      'Piezon® NO-PAIN Ultrasonic Scaler',
      'Erythritol Biofilm Micro-Powder',
      'Intraoral 4K Fluoride Applicators'
    ],
    faqs: [
      {
        question: 'How is Guided Biofilm Therapy different from standard teeth cleaning?',
        answer: 'Traditional cleanings rely on manual steel scraping which can feel uncomfortable and abrasive. Guided Biofilm Therapy uses a warm, gentle air-and-water mist with superfine powder to remove bacteria without scraping or pain.'
      },
      {
        question: 'Can this cleaning be done on porcelain veneers or dental implants?',
        answer: 'In fact, GBT is the safest method in modern dentistry for veneers, crowns, and implants because the erythritol powder cleans thoroughly without causing microscopic scratches on the ceramic or titanium.'
      }
    ]
  }
];
