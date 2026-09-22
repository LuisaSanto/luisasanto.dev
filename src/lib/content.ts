export const profile = {
  name: "Luisa Santo",
  role: "Member of Technical Staff",
  employer: "Microsoft",
  github: "https://github.com/LuisaSanto",
  linkedin: "https://www.linkedin.com/in/luisa-santo/",
  credentials: "https://www.linkedin.com/in/luisa-santo/details/certifications/",
  recommendations: "https://www.linkedin.com/in/luisa-santo/details/recommendations/",
  publicPortfolio: "https://www.luisasanto.dev/",
  publicSource: "https://groupme.com/blog/2025-year-in-review",
  resumePath: "/luisa-santo-cv.pdf",
} as const;

export type CaseStudy = {
  slug: string;
  number: string;
  product: string;
  category: string;
  title: string;
  summary: string;
  visual: "profiles" | "streaming" | "architecture";
  skills: readonly string[];
  challenge: string;
  ownership: readonly string[];
  decisions: readonly { title: string; body: string }[];
  outcome: string;
  context: string;
};

export const caseStudies = [
  {
    slug: "groupme-profiles",
    number: "01",
    product: "GroupMe",
    category: "Product engineering",
    title: "Redesigned GroupMe profiles.",
    summary: "Profile components, mini-profiles and swipe navigation on iOS.",
    visual: "profiles",
    skills: ["UIKit", "Profile UI", "Navigation"],
    challenge: "New profile content needed to work across the main profile, mini-profiles and existing navigation. Adding the components also meant updating the ways people reached and moved between profiles.",
    ownership: [
      "Owned iOS delivery of the redesigned profile experience, working with product and design through implementation and quality follow-up.",
      "Integrated richer profile components and mini-profile behavior into the existing application.",
      "Implemented swipe navigation so people could move between profiles without repeatedly returning to a parent list.",
    ],
    decisions: [
      { title: "Navigation between profiles", body: "Added swipe navigation so people could browse adjacent profiles without returning to the parent list each time." },
      { title: "Profile components", body: "Separated display components and their data responsibilities so changes to one part of a profile did not require rebuilding the whole screen." },
    ],
    outcome: "Delivered the iOS contribution to GroupMe's upgraded profiles and subsequent swipe navigation. GroupMe publicly reported more than 1.2 billion profile views across the product in 2025.",
    context: "The view count describes product-wide scale, not incremental growth caused by one engineer or iOS alone.",
  },
  {
    slug: "ai-experiences",
    number: "02",
    product: "GroupMe",
    category: "AI product engineering",
    title: "Streaming chat summaries.",
    summary: "Incremental responses, caching and failure handling in the iOS client.",
    visual: "streaming",
    skills: ["Streaming UI", "State & caching", "Failure handling"],
    challenge: "Summary text arrives in parts. The client needed to display it as it arrived, handle interrupted or failed requests, and avoid showing a cached response that no longer matched the conversation.",
    ownership: [
      "Owned iOS streaming for Copilot-powered chat summaries across incremental rendering, state, caching, failure handling and telemetry.",
      "Built automated tests around summary state and event behavior.",
      "Delivered progressive loading for AI-generated images so users could see intermediate progress rather than only a final result.",
    ],
    decisions: [
      { title: "Explicit loading states", body: "Handled loading, partial content, completion and failure separately, with tests around the state changes." },
      { title: "Cache freshness", body: "Bounded cache size and checked whether a stored summary still matched the current conversation context before reusing it." },
      { title: "Separate timing events", body: "Instrumented the arrival of the first content separately from completion, so the two stages could be measured independently." },
    ],
    outcome: "The summary UI displayed text as it arrived instead of waiting for the complete response.",
    context: "My contribution was the iOS implementation, including state, caching, UI, error handling and tests.",
  },
  {
    slug: "teams-architecture",
    number: "03",
    product: "Microsoft Teams",
    category: "Architecture & collaboration",
    title: "Teams post-meeting architecture.",
    summary: "Separating legacy controller logic into Swift components and view models.",
    visual: "architecture",
    skills: ["Swift & Objective-C", "MVVM-C", "Cross-team work"],
    challenge: "Post-meeting UI and business logic were coupled in an existing controller. Changes needed to preserve established behavior and remain understandable to the partner teams working in the same code.",
    ownership: [
      "Decomposed legacy post-meeting controller responsibilities into Swift components and testable view models.",
      "Worked across design, implementation and validation with partner engineering teams.",
      "Contributed privacy-sensitive notification and file-handling changes while preserving enterprise scenarios.",
    ],
    decisions: [
      { title: "Incremental refactoring", body: "Moved responsibilities into Swift components and view models while retaining existing Objective-C code where appropriate." },
      { title: "Partner review and tests", body: "Worked through implementation tradeoffs with partner engineers and added tests around the changed behavior." },
    ],
    outcome: "Post-meeting UI and business logic were split into smaller components and testable view models, supporting subsequent work in the meeting experience.",
    context: "The refactor retained existing Objective-C code; it was not a full rewrite.",
  },
] as const satisfies readonly CaseStudy[];

export const experience = [
  {
    period: "2024 - present",
    team: "GroupMe",
    focus: "Consumer iOS & AI experiences",
    description: "Profiles, streaming AI experiences, chat UI and the testing and measurement behind them.",
  },
  {
    period: "2022 - 2024",
    team: "Microsoft Teams",
    focus: "iOS architecture & product engineering",
    description: "Meeting-related experiences, legacy modernization, privacy-sensitive behavior and automation.",
  },
  {
    period: "2021 - 2022",
    team: "Teams & Skype for Business",
    focus: "Developer support",
    description: "Technical ownership of developer scenarios across EMEA, shared knowledge and collaboration with product engineering.",
  },
  {
    period: "Apr 2020 - Mar 2021",
    team: "Peacock",
    focus: "iOS Developer",
    description: "Contributed to the iPhone and iPad app launch, including the highlights section and movie/show details UI in Swift and UIKit.",
  },
  {
    period: "May 2019 - Apr 2020",
    team: "Talkdesk",
    focus: "Software Engineer",
    description: "Contributed to a Ruby microservice, then moved to iOS work on push notifications and Interface Builder. Helped onboard new iOS engineers.",
  },
] as const;

export const additionalExperience = {
  research: "Evaluated speech-to-text tools for CERN's archives, comparing feasibility and limitations.",
  teaching: "Taught app development with App Inventor at Girls Code (2018-2020) and block-based programming at Happy Code (2018-2019).",
  projects: "Additional project work involving Sky and Comcast.",
} as const;

export const education = {
  institution: "Instituto Superior T\u00e9cnico",
  qualifications: "MEng, Artificial Intelligence (2020); BEng, Computer and Information Sciences (2018).",
} as const;

export const aiCourses = [
  { title: "Generative AI for Software Development", issuer: "DeepLearning.AI", issued: "Aug 2026" },
  { title: "AI Code Review", issuer: "DeepLearning.AI", issued: "Aug 2026" },
  { title: "MCP: Build Rich-Context AI Apps with Anthropic", issuer: "DeepLearning.AI", issued: "Jul 2026" },
  { title: "AI Prompting for Everyone", issuer: "DeepLearning.AI", issued: "Jul 2026" },
] as const;

export const aiWorkflow = [
  { title: "Make the brief testable", description: "Specify the goal, existing behavior, constraints and acceptance criteria. Call out missing evidence before asking an agent to implement a solution." },
  { title: "Give agents the right context", description: "Use Copilot CLI and MCP connections to bring code, design and issue context into the task. Keep private sources out of public deliverables." },
  { title: "Verify the result", description: "Compare changes with the sources and existing patterns. Require build, test and accessibility checks, and keep publication decisions with the human." },
] as const;

export const portfolioBrief = [
  "Goal: Create a clear portfolio for an iOS engineer.",
  "Evidence: Use supplied sources. Separate individual contributions from product-wide outcomes.",
  "Constraints: Keep the repository private. Do not deploy or publish company-confidential material.",
  "Acceptance: A static build, keyboard navigation, no mobile overflow and a working CV download.",
  "Review: Report source gaps, run the checks and ask before changing publication scope.",
].join("\n\n");

export const researchProjects = [
  {
    title: "Speech-to-text for CERN's archives",
    context: "Research internship",
    description: additionalExperience.research,
    sourceLabel: "Research details on LinkedIn",
    sourceUrl: "https://www.linkedin.com/in/luisa-santo/details/experience/",
  },
  {
    title: "JANOS mission concept",
    context: "Alpbach Summer School / 2015",
    description: "Contributed to a preliminary space-mission concept studying gravity's effect on quantum systems. Team Blue received the programme's Best Technical Case recognition.",
    sourceLabel: "Read the programme report",
    sourceUrl: "https://www.esa.int/Education/Designing_space_missions_to_enrich_quantum_physics_research_at_Alpbach_Summer_School",
    photoUrl: "https://www.esa.int/ESA_Multimedia/Images/2015/07/Alpbach_team_blue_2015",
    photoCredit: "FFG/Summer School Alpbach/MA Jakob",
  },
] as const;

export const quality = [
  { value: "63", label: "UI tests authored", detail: "Reusable automation for GroupMe's iOS suite." },
  { value: "17", label: "Accessibility issues addressed", detail: "VoiceOver behavior, headings, states and contrast." },
  { value: "02", label: "Interns mentored", detail: "Architecture, implementation, review and communicating impact." },
] as const;

export const recommendations = [
  {
    name: "Rui Gramacho",
    role: "Vice-President of Engineering, Nextlane",
    context: "Former direct manager",
    quote: "Her proactive approach and eagerness to contribute more to the business made her an invaluable team member.",
  },
  {
    name: "Allen Yee",
    role: "iOS engineer",
    context: "Former Microsoft Teams colleague and code reviewer",
    quote: "I reviewed many of her pull requests and was impressed by her openness to feedback",
  },
  {
    name: "Gabriel N\u00f3voa",
    role: "Senior Embedded Escalation Engineer, Microsoft",
    context: "Senior colleague on the development-support team",
    quote: "Luisa played a key role in helping ramp up new engineers by creating valuable technical content on development topics.",
  },
  {
    name: "Mariana Mendes",
    role: "iOS engineer",
    context: "Former mentee",
    quote: "Her patience and ability to explain complex concepts made my learning experience smooth and rewarding.",
  },
] as const;

export const resumeGroups = [
  {
    title: "Microsoft: GroupMe iOS",
    period: "2024 - present",
    bullets: [
      "Owned iOS delivery of redesigned profiles and swipe navigation, contributing to an experience that GroupMe publicly reported exceeded 1.2 billion product-wide profile views in 2025.",
      "Implemented Copilot-powered streaming summaries with bounded caching, state and error handling, telemetry and tests; delivered progressive AI image loading.",
      "Built reusable UI automation, authored 63 UI tests and implemented fixes for 17 accessibility issues.",
    ],
  },
  {
    title: "Microsoft: Teams iOS",
    period: "2022 - 2024",
    bullets: [
      "Refactored legacy post-meeting logic into Swift components and testable view models, coordinating changes with partner teams.",
      "Improved privacy-sensitive notification and file-handling behavior, and added post-meeting UI automation.",
    ],
  },
  {
    title: "Microsoft: Developer Support",
    period: "2021 - 2022",
    bullets: [
      "Supported developer integrations across EMEA using Microsoft Graph, webhooks and bots; built onboarding resources and internal coordination tools.",
    ],
  },
  {
    title: "Peacock: iOS Developer",
    period: "Apr 2020 - Mar 2021",
    bullets: [
      "Contributed to the Peacock iPhone and iPad launch; implemented the highlights section and movie/show details UI.",
    ],
  },
  {
    title: "Talkdesk: Software Engineer",
    period: "May 2019 - Apr 2020",
    bullets: [
      "Contributed to a Ruby microservice before moving to iOS work on push notifications and Interface Builder; helped onboard new iOS engineers.",
    ],
  },
] as const;
