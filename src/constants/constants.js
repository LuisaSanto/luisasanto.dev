import {
  feature,
  reliability,
  teach,
  know,
  support,
  lead,
  mentoring,
  bug,
  git,
  peacockLogo,
  ComcastLogo,
  SkyLogo,
  teamsLogo,
  groupMeLogo,
  talkdeskLogo,
  cernLogo,
  swiftLogo,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const metrics = [
  {
    title: "30+ Bugs Resolved",
    description: "Addressed over 30 bugs, including 12 critical issues, significantly enhancing system stability.",
    highlight: "critical",
    highlightColor: "text-red-500",
    icon: bug,
  },
  {
    title: "10+ Features Delivered",
    description: "Led the development of more than 5 new features, improving both user experience and system reliability.",
    highlight: "experience",
    highlightColor: "text-orange-500",
    icon: feature,
  },
  {
    title: "99% System Reliability",
    description: "Achieved 99% system reliability through targeted bug fixes, performance optimizations, and improved stability.",
    highlight: "reliability",
    highlightColor: "text-green-500",
    icon: reliability,
  },
  {
    title: "Mentored 5+ Engineers",
    description: "Mentored over 5 engineers, helping them transition to new technical roles or enhance their skills.",
    highlight: "mentored",
    highlightColor: "text-purple-500",
    icon: mentoring,
  },
  {
    title: "Taught 30+ Young Students",
    description: "Empowered more than 30 students with technical skills in app development and software design, inspiring the next generation.",
    highlight: "students",
    highlightColor: "text-blue-500",
    icon: teach,
  },
  {
    title: "EMEA Developer Lead",
    description: "Served as the first official developer support engineer in EMEA, providing guidance on Microsoft Graph, webhooks, and more.",
    highlight: "developer",
    highlightColor: "text-yellow-500",
    icon: lead,
  },
  {
    title: "200+ Support Cases Resolved",
    description: "Resolved over 200 developer support cases, offering technical solutions for API integrations, platform issues, and developer tools.",
    highlight: "support",
    highlightColor: "text-pink-500",
    icon: support,
  },
  {
    title: "Knowledge Sharing & Documentation",
    description: "Created extensive documentation and onboarding materials, accelerating onboarding and knowledge sharing.",
    highlight: "documentation",
    highlightColor: "text-teal-500",
    icon: know,
  },
];

const apps = [
  {
    name: "Peacock",
    icon: peacockLogo,
  },
  {
    name: "Sky",
    icon: SkyLogo,
  },
  {
    name: "Comcast",
    icon: ComcastLogo,
  },
  {
    name: "Microsoft Teams",
    icon: teamsLogo,
  },
  {
    name: "GroupMe",
    icon: groupMeLogo,
  },
  {
    name: "Talkdesk",
    icon: talkdeskLogo,
  },
  {
    name: "CERN",
    icon: cernLogo,
  },
  {
    name: "Swift",
    icon: swiftLogo,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  }
];

const testimonials = [
  {
    name: "Francisco Pinto",
    feedback: `I had the privilege of working with Luísa in the Microsoft Teams Dev Support team at Microsoft Portugal, and she truly stands out as a professional.
    
    Always willing to help both peers and customers, she has a remarkable ability to simplify complex topics and effectively share her knowledge, whether through one-on-one sessions or team presentations.
    
    Her technical expertise shines, particularly in her proactive approach to reviewing source code and suggesting code fixes to the internal Product Group, which made a real difference to our team's work.
    
    On top of that, she brings an incredibly positive energy to the team. Her enthusiasm and good vibes help create a supportive and collaborative environment. I highly recommend her—Luísa would be a great asset to any team!`,
    company: "Microsoft",
    position: "Software Engineer | Support Escalation Engineer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFLh7zQ55-L2Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701711916503?e=1731542400&v=beta&t=xsVNJKK0q9wpqzRoHTjJraGvpXiIM5byARlc60IqEsI",
  },
  {
    name: "David Beleza",
    feedback: `It was a pleasure working with Luísa. She is an incredibly talented and reliable software engineer who consistently delivers high-quality work. 
    
    Her problem-solving skills and deep understanding of software architecture are outstanding, allowing her to approach complex challenges with creativity and precision.
    
    Luísa is not only technically strong but also a great team player, always willing to help others and share her knowledge. Her communication skills are excellent, and she manages to explain difficult technical concepts in a clear and concise way. 
    
    Overall, Luísa's professionalism and expertise make her an invaluable asset to any team.`,
    company: "Mindera",
    position: "Product Manager | Software Development",
    image: "https://media.licdn.com/dms/image/v2/C5603AQGz6NAszuXVXw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1649360843773?e=1731542400&v=beta&t=Aj3ah-0uKwyE6DTNXYtgj-H6SugrfGyQdkAf5ag_Gms",
  },
];

export {
  metrics,
  apps,
  testimonials,
};
