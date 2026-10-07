export type Service = {
  id: string;
  title: string;
  summary: string;
  includedTitle: string;
  included: string[];
};

export const services: Service[] = [
  {
    id: "recruitment",
    title: "Recruitment Service",
    summary:
      "At MRL Recruitment Consultancy, we are here to help you find the right person for you. We have developed a unique way of approaching candidates with our own methodology created by professional psychologists. We provide high-quality service and deliver fast, bringing you your best people.",
    includedTitle: "What’s Included in Our Placement Service?",
    included: [
      "Dedicated recruiter for your vacancy",
      "Comprehensive role briefing & market insights",
      "Job advertising & targeted sourcing",
      "CV screening, interviews, and shortlisting",
      "Detailed candidate summaries",
      "Interview coordination & feedback management",
      "Offer management & negotiation support",
      "Post-placement follow-up to ensure long-term fit",
    ],
  },
  {
    id: "rpo",
    title: "RPO Service",
    summary:
      "Our Recruitment Process Outsourcing (RPO) solution gives your business a dedicated, on-demand recruitment team that seamlessly integrates into your organisation. Whether you’re scaling rapidly, filling ongoing roles, or improving your internal hiring capabilities, we become an extension of your brand—delivering consistent, high-quality hiring results.",
    includedTitle: "What’s Included in Our RPO Solution?",
    included: [
      "Dedicated full-time or part-time recruiter(s)",
      "End-to-end recruitment management",
      "Talent sourcing, screening & interviewing coordination",
      "Process building and optimisation",
      "ATS management & reporting",
      "Hiring manager training",
      "Market insights & salary benchmarking",
      "Employer brand support",
      "Scalable monthly retainer pricing",
    ],
  },
  {
    id: "hr",
    title: "HR Service",
    summary:
      "Our HR Service helps businesses create, refine, and optimise the people systems that drive performance. From compliance and policy development to onboarding, culture-building, and employee lifecycle management, we support your organisation with the HR structure it needs to scale confidently and sustainably.",
    includedTitle: "What’s Included in Our HR Service?",
    included: [
      "Employee contracts, handbooks, and compliance frameworks",
      "Onboarding and offboarding processes",
      "Organisational structure & workforce planning",
      "Culture development & employee engagement initiatives",
      "Manager training & support",
      "HR data reporting and people insights",
    ],
  },
];

export const servicesIntro = [
  "At MRL, we specialise in filling roles that seem impossible: critical hires, confidential replacements, or high-demand vacancies where the right candidates don’t respond to ads or appear in databases. Using science-based search methods, proprietary technology, and communication strategies developed by organisational psychologists, we attract the “silent quitters” others can’t reach.",
  "Each process is discreet, personalised, and chemistry-driven. Let’s talk about the role you thought couldn’t be filled. We help companies find the right people with our own methodology, created by professional psychologists. This allows us to engage with the top 1% of talent.",
];

export const mission =
  "At MRL Recruitment Agency, we transform the job search process into an exciting experience, helping you find your dream team while enjoying the ride.";

export const aboutParagraphs = [
  "MRL was born to solve the problems in recruitment. Over the last couple of years, recruitment and talent acquisition have changed a lot, with many new agencies and consultancies trying to compete in this growing market.",
  "We work with a select number of companies and candidates at a time, combining structured assessments with deep, meaningful conversations. We don’t aim for volume.",
  "Our approach is both scientific and human. We use data and psychometric tools to guide our decisions, but we also trust intuition. Every introduction we make is discreet, informed, and intentional.",
  "For clients, that means fewer CVs and higher-quality hires. For candidates, it means roles that align with their life stage, values, and goals—not just their skills.",
  "Most of our candidates weren’t actively looking. Most of our clients work with us exclusively. That mutual trust is what makes our model work.",
];

export const aboutQuote =
  "We were born from a simple idea: job searching should be personal, not transactional.";

export const faqs = [
  {
    question: "How do you find and attract candidates?",
    answer:
      "We have developed a unique way of approaching candidates with our own methodology, created by professional psychologists. We provide a high-quality service and deliver fast, bringing you your best people.",
  },
  {
    question: "Can you manage multiple hires or build entire teams?",
    answer:
      "Yes. With our RPO service, our recruiters become part of your brand and approach candidates in your name. This grows your branding as a business and creates a network of candidates who are interested in your company.",
  },
  {
    question: "Do you offer diversity and inclusion support?",
    answer:
      "We are not only looking for the best candidates on paper. We are here to find the best match for you. Culture and diversity play a huge role. Our team includes experts on this subject and understands how important it is.",
  },
  {
    question: "What differentiates your firm from other recruiters?",
    answer:
      "What makes us different is a near 100% fill rate. No matter the challenge, we find your candidates. This is why we exist: we are here to find your talent when others fail or bail out.",
  },
  {
    question: "What happens if the hire doesn’t work out?",
    answer:
      "We offer a free replacement if the candidate does not work out within the first three months.",
  },
  {
    question: "How long does it typically take to fill a position?",
    answer:
      "Our recruiters give their full attention to you and your needs. That has allowed us to fill roles within a month of receiving the brief. Before an intake call, our recruiters already prepare a list of candidates so we can search more accurately. We stay in daily contact with hiring managers to make sure you receive the best candidates on time.",
  },
];

export const contactIntro =
  "Would you like to work with us? Enter your information and we’ll get in touch with you shortly. We look forward to hearing from you soon.";

export const bookingCopy = {
  title: "Book a Meeting",
  body: "Are you dreaming of adding new talent to your team? Don’t wait any longer, book your appointment with us.",
};
