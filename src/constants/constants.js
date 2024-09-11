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
    id: "metrics",
    title: "Impact",
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
    title: "170+ Bugs Resolved",
    description: "Addressed over 170 bugs, including 50 critical issues, significantly enhancing system stability.",
    highlight: "critical",
    highlightColor: "text-red-500",
    icon: bug,
  },
  {
    title: "25+ Features Delivered",
    description: "Led the development of more than 25 new features, improving both user experience and system reliability.",
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
    name: "Rui Gramacho",
    feedback: `I had the pleasure of working with Luisa when she joined our team as a junior developer straight out of university. From day one, Luisa's passion for technology and her dedication to continuous learning were evident.
  
    Outside of her professional responsibilities, Luisa was deeply involved in teaching and coaching young girls on how to code. This inspiring commitment to empowering others was a true reflection of her character and had a positive impact on her work ethic.
  
    Luisa's insatiable curiosity and drive to improve were truly remarkable. She was never satisfied with the status quo and constantly sought out opportunities to expand her knowledge and skills. Her proactive approach and eagerness to contribute more to the business made her an invaluable team member.
  
    The energy and enthusiasm Luisa brought to the team were contagious. She consistently reached out for ways to become better and more relevant to our projects, always aiming to deliver the best possible results.
  
    I am confident that Luisa's dedication and passion will continue to drive her success in any future endeavors. She is a true asset to any team, and I wholeheartedly recommend her.`,
    company: "Vizrt",
    position: "Head of Product Development",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQGXbQrQUR8FRA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1629507080029?e=1731542400&v=beta&t=65MKV7kkyjv6eaHDXxKurgSt_dik4WLQnlkBBL5kVC4"
  },
  {
    name: "Douglas Ritter",
    feedback: `I had the pleasure of working with Luisa early in her career, when she joined our team as a Mobile Developer. Despite coming from a backend development background, she enthusiastically embraced the challenge of learning an entirely new tech stack, which spoke volumes about her adaptability and determination.
  
    From the very beginning, Luisa impressed me with her strong foundational knowledge, acquired through both her university education and prior experiences. What stood out even more was her genuine desire to learn and contribute to the team's success. Whenever we introduced a new concept, she would dive deep into its core principles, often going beyond the basics by reading books and articles. Her approach not only helped her quickly master the material, but also enabled her to share her knowledge with others, showcasing her leadership potential.
  
    Luisa's contributions to the team were impactful on multiple levels. She collaborated closely with her peers, practiced test-driven development, asked insightful questions, and proposed thoughtful improvements to both the codebase and our processes. Her proactive approach and commitment to continuous learning made a significant difference in our team's efficiency and overall performance.
  
    It was evident to everyone that Luisa was on a path to great success. She has a rare combination of technical expertise, curiosity, and a collaborative mindset, which makes her an asset in any environment. If you're building a team and need someone who can tackle complex challenges while continuously growing and contributing, I highly recommend Luisa as a key player.`,
    company: "Springer Nature Group",
    position: "Lead Developer",
    image: "https://media.licdn.com/dms/image/v2/C5603AQHJjKrhacoguw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1516528729178?e=1731542400&v=beta&t=pJWmRJR2fWtzZ6UFcOnBq4As83z6UVz0HCwYHbfgGbQ"
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
  {
    name: "Rui Tabares",
    feedback: `I had the pleasure of working with Luisa during her time as an Aspire Engineer at Microsoft Portugal. Even in the early stages of her career, Luísa demonstrated a remarkable technical skill set and a level of adaptability that many engineers take years to develop. Her ability to quickly grasp complex concepts and apply them in real-world scenarios truly set her apart.

    One of the most impressive qualities Luísa possesses is her relentless willingness to learn and grow. She consistently sought out opportunities to expand her knowledge, even beyond the expectations of her support role, showing a proactive mindset that is often rare in such positions. This drive to continuously improve not only made her stand out, but also quickly earned her the respect of her peers and supervisors alike.

    Luísa’s hard work and determination culminated in a significant achievement: transitioning into a full-time Software Engineer role within just a year—an accomplishment that is rare and notable within Microsoft Portugal. This rapid growth is a testament to her intelligence, dedication, and commitment to excellence.

    As a key performer and a highly valued member of the team, Luísa has become a critical asset to the organization. She approaches every challenge with a positive attitude and a solution-oriented mindset, making her an indispensable part of Microsoft's success.

    I wholeheartedly recommend Luísa for any future endeavors she pursues. Her work ethic, technical capabilities, and collaborative spirit will undoubtedly continue to drive her toward even greater achievements.`,
    company: "Microsoft",
    position: "Embedded Escalation Engineer (EEE-Dev)",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGFPg4J-r4-tw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718223350321?e=1731542400&v=beta&t=6XgG7dWMN-J1ZAYzmNgLwhuM1E601m636IMG6AU6hN0",
  },
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
    name: "Vasco Ribeiro",
    feedback: `I have had the pleasure of working with Luisa Santo in Microsoft Teams Support, and I can confidently say she is a shining example of someone with an exemplary growth mindset.

    Her journey from a Teams Tech Support role to a Software Engineer has been nothing short of inspiring. During her time as Teams Tech Support (dev), Luísa demonstrated exceptional skills in assisting customers with their technical inquiries and resolving complex issues efficiently.

    Her approach was always thorough and professional, ensuring that clients felt supported and satisfied with the solutions provided.

    While in support, Luisa also showcased her development skills by contributing to various internal tools and scripts that improved the efficiency of the support team.

    Her ability to write clean and efficient code was evident, and her contributions were highly valued by the team. 

    It wasn't long before Luísa's dedication and aptitude for problem-solving were recognized, leading to her next role of Software Engineer.

    In this new capacity, she has continued to excel, further showcasing her ability to adapt, learn, and grow within the company.

    Luísa's commitment to personal and professional development is truly admirable. She consistently seeks out new challenges and opportunities to expand her skill set, making her an invaluable asset to any team.

    Her positive attitude, combined with her technical expertise and customer-centric mindset, makes her a standout professional in our field.

    I highly recommend Luísa for any role that requires a proactive, talented, and growth-oriented individual. She will undoubtedly continue to achieve great things and inspire those around her.`,
    company: "Microsoft",
    position: "Support Engineer | Microsoft Teams and Skype for Business",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQEgv92BwQznxw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1626444632542?e=1731542400&v=beta&t=1S1LgF08XsJwHwFGrDA7NTuUJB7VjrgV4CRIoh1udoQ",
  },
];

export {
  metrics,
  apps,
  testimonials,
};
