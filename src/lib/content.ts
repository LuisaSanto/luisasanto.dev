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
  detailedResumePath: "/luisa-santo-cv-detailed.pdf",
} as const;

export type CaseStudy = {
  slug: string;
  number: string;
  product: string;
  period: string;
  category: string;
  title: string;
  summary: string;
  visual: "profiles" | "bubbles" | "progressive" | "streaming" | "feedback" | "architecture";
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
    period: "2024 - 2025",
    category: "Product engineering",
    title: "Redesigned GroupMe profiles.",
    summary: "Interests, photo galleries, music previews and swipe navigation, from profile components to release.",
    visual: "profiles",
    skills: ["UIKit", "Profile UI", "Navigation"],
    challenge: "New profile content needed to work across the main profile, mini-profiles and existing navigation. Adding the components also meant updating the ways people reached and moved between profiles.",
    ownership: [
      "Owned iOS delivery of the redesigned profile experience, working with product and design through implementation and quality follow-up.",
      "Built interest selection, photo-gallery layouts and music-preview components, and integrated them with profile editing and mini-profiles.",
      "Implemented swipe navigation so people could move between profiles without repeatedly returning to a parent list.",
    ],
    decisions: [
      { title: "Navigation between profiles", body: "Added swipe navigation so people could browse adjacent profiles without returning to the parent list each time." },
      { title: "Profile components", body: "Separated display components and their data responsibilities so changes to one part of a profile did not require rebuilding the whole screen." },
      { title: "Content and layout", body: "Handled empty and populated profiles, different gallery sizes and music-link validation as part of the same experience." },
    ],
    outcome: "Delivered the iOS contribution to GroupMe's upgraded profiles and subsequent swipe navigation. GroupMe publicly reported more than 1.2 billion profile views across the product in 2025.",
    context: "The view count describes product-wide scale, not incremental growth caused by one engineer or iOS alone.",
  },
  {
    slug: "chat-bubbles",
    number: "02",
    product: "GroupMe",
    period: "2025",
    category: "Messaging UI",
    title: "Chat bubbles and theming.",
    summary: "Grouping-aware message bubbles, coordinated chat surfaces and light/dark themes.",
    visual: "bubbles",
    skills: ["UIKit", "Reusable UI", "Accessibility"],
    challenge: "A chat redesign reaches beyond a single message cell. Bubble shapes depend on neighboring messages, and the compose bar, navigation and media need to remain consistent across themes and devices.",
    ownership: [
      "Implemented the refreshed message-bubble layout, including different shapes for single, first, middle and last messages in a group.",
      "Built reusable styling for incoming and outgoing messages, with shared light/dark theme colors and layout behavior.",
      "Updated the compose and navigation surfaces alongside the message cells, and followed through on accessibility, contrast and older-iOS compatibility.",
    ],
    decisions: [
      { title: "Grouping is part of the model", body: "Calculated a message's position in its group so the cell could apply the appropriate corners and spacing rather than guessing from its appearance." },
      { title: "Shared styling, distinct surfaces", body: "Reused bubble styling and theme tokens while allowing incoming messages, outgoing messages and input controls to keep their different roles." },
      { title: "Preserve the rest of the conversation", body: "Checked the redesign with text, media and system messages, including enabled and disabled feature states. The change needed to coexist with the existing chat experience." },
    ],
    outcome: "Delivered the chat-bubble redesign and coordinated theming across messages, input and navigation, with accessibility and compatibility follow-up.",
    context: "My contribution was the iOS implementation and rollout work, in collaboration with product and design.",
  },
  {
    slug: "progressive-image-loading",
    number: "03",
    product: "GroupMe",
    period: "2025",
    category: "AI interaction design",
    title: "Progressive image loading.",
    summary: "Intermediate image previews and visible progress while Copilot generates the final result.",
    visual: "progressive",
    skills: ["Asynchronous UI", "Cell lifecycle", "Error states"],
    challenge: "Generating an image takes time. A waiting state needs to show useful progress, transition cleanly to the final image, and recover if the request fails or the conversation scrolls offscreen.",
    ownership: [
      "Owned the iOS implementation of progressive loading for Copilot-generated images, from intermediate previews and progress labels to final-image presentation.",
      "Integrated progress behavior into image and carousel message cells rather than treating it as a separate full-screen flow.",
      "Handled missing image content, failure states and cell reuse, and followed the feature through rollout.",
    ],
    decisions: [
      { title: "Show progress without pretending it is complete", body: "Displayed intermediate content and progress labels while generation continued, then restored the normal message presentation when the final image arrived." },
      { title: "Respect cell reuse", body: "Kept loading presentation aligned with the message state so a reused or offscreen cell did not retain another request's shimmer or progress." },
      { title: "Make failure a visible state", body: "Removed loading indicators when generation failed or produced no image, instead of leaving an indefinite waiting state." },
    ],
    outcome: "People could see generation progress and intermediate content before the final image, instead of only waiting for a finished result.",
    context: "This work improved how the client presented waiting and completion. It did not make the image-generation model itself faster.",
  },
  {
    slug: "ai-experiences",
    number: "04",
    product: "GroupMe",
    period: "2025 - 2026",
    category: "AI product engineering",
    title: "Streaming chat summaries.",
    summary: "Incremental responses, caching and failure handling in the iOS client.",
    visual: "streaming",
    skills: ["Streaming UI", "State & caching", "Failure handling"],
    challenge: "Summary text arrives in parts. The client needed to display it as it arrived, handle interrupted or failed requests, and avoid showing a cached response that no longer matched the conversation.",
    ownership: [
      "Owned iOS streaming for Copilot-powered chat summaries across incremental rendering, state, caching, failure handling and telemetry.",
      "Built automated tests around summary state and event behavior.",
      "Coordinated event handling and client behavior with backend and Android engineers.",
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
    slug: "feedback-and-responsiveness",
    number: "05",
    product: "GroupMe",
    period: "2025",
    category: "Interaction & reliability",
    title: "Feedback and responsive interactions.",
    summary: "Contextual feedback and optimistic poll updates that recover when a request fails.",
    visual: "feedback",
    skills: ["Core Data", "Optimistic updates", "Feedback flows"],
    challenge: "Small interruptions add up: a vote feels unresponsive while it waits on the network, and reporting a problem is harder once the relevant screen has disappeared.",
    ownership: [
      "Implemented in-app feedback and a shake-triggered reporting flow with a confirmation step and screenshot context.",
      "Changed poll voting to update local state immediately, reconcile with the service on success, and roll back the applied change on failure.",
      "Fixed navigation, loading and layout issues alongside feature work, following behavior across the UI and data layers.",
    ],
    decisions: [
      { title: "Optimism needs a recovery path", body: "Separated the local vote update from the network request. Preserved the previous state so a failed request could undo the local change rather than leave an incorrect vote on screen." },
      { title: "Keep feedback intentional", body: "Used a confirmation sheet and a user-controlled setting for shake-triggered feedback, with limits to prevent repeated prompts." },
      { title: "Measure the feedback flow", body: "Tracked submission, cancellation and failure separately so completing a report was distinguishable from merely opening the form." },
    ],
    outcome: "Poll votes appeared without waiting for the network response, with rollback on failure. People could start a contextual problem report from the screen they were using.",
    context: "These are changes to interaction behavior. I do not attribute a measured network-speed improvement or support-ticket reduction to them.",
  },
  {
    slug: "teams-architecture",
    number: "06",
    product: "Microsoft Teams",
    period: "2023 - 2024",
    category: "Architecture & collaboration",
    title: "Teams post-meeting architecture.",
    summary: "Separating legacy controller logic into Swift components and view models.",
    visual: "architecture",
    skills: ["Swift & Objective-C", "MVVM-C", "Cross-team work"],
    challenge: "Post-meeting UI and business logic were coupled in an existing controller. Changes needed to preserve established behavior and remain understandable to the partner teams working in the same code.",
    ownership: [
      "Decomposed legacy post-meeting controller responsibilities into Swift components and testable view models.",
      "Worked across design, implementation and validation with partner engineering teams.",
      "Added tests and supported subsequent meeting-experience changes without requiring a wholesale rewrite.",
    ],
    decisions: [
      { title: "Incremental refactoring", body: "Moved responsibilities into Swift components and view models while retaining existing Objective-C code where appropriate." },
      { title: "Partner review and tests", body: "Worked through implementation tradeoffs with partner engineers and added tests around the changed behavior." },
    ],
    outcome: "Post-meeting UI and business logic were split into smaller components and testable view models, supporting subsequent work in the meeting experience.",
    context: "The refactor retained existing Objective-C code; it was not a full rewrite.",
  },
] as const satisfies readonly CaseStudy[];

export const moreContributions = [
  { title: "Privacy in Teams", description: "Protected notification previews from unaccepted contacts and changed consumer file/offline behavior without changing enterprise scenarios." },
  { title: "Automation foundations", description: "Built reusable page objects and UI-test helpers, then maintained scenario tests and contributed build-pipeline fixes as the app and Xcode changed." },
  { title: "AI onboarding and shared practice", description: "Created AI onboarding animation work and helped engineers, designers and PMs get started with Copilot-assisted code discussions. Shared debugging, review and telemetry practices." },
  { title: "Developer support and tools", description: "Supported Teams and Skype for Business developer integrations across EMEA. Built escalation and availability-tool interfaces, onboarding resources and shared troubleshooting guidance." },
] as const;

export const experience = [
  {
    period: "2024 - present",
    team: "GroupMe",
    focus: "Consumer iOS & AI experiences",
    description: "Redesigned profiles, chat bubbles, progressive image loading, streaming summaries, contextual feedback and optimistic poll updates. Ownership includes the state, testing and telemetry behind the UI.",
  },
  {
    period: "2022 - 2024",
    team: "Microsoft Teams",
    focus: "iOS architecture & product engineering",
    description: "Post-meeting architecture, community experiences, notification privacy and consumer file handling. Coordinated changes with partner teams while preserving enterprise behavior.",
  },
  {
    period: "2021 - 2022",
    team: "Teams & Skype for Business",
    focus: "Developer support",
    description: "Technical escalation ownership across EMEA, developer-support tools, onboarding and a shared knowledge base. Collaborated with product engineering and support teams across regions.",
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
  { title: "Write the task before the prompt", description: "I describe the user scenario, existing behavior, constraints and acceptance criteria. I separate what must change from what must stay intact, including failure cases and explicit non-goals." },
  { title: "Give the agent a reading path", description: "I point to the relevant code, designs, tickets and documentation, using MCP where it helps. I ask for existing patterns and dependencies before a proposed implementation, rather than a guess from a file name." },
  { title: "Keep rules in instruction files", description: "I maintain copilot-instructions.md and repository guidance for architecture, testing, privacy and review. Reusable rules stay separate from the task brief, so important constraints do not depend on repeating a long prompt." },
  { title: "Require evidence, not confidence", description: "I require source and API checks, explicit assumptions and an honest account of missing evidence. For a bug, I ask for a reproduction before a fix. These checks help catch hallucinations; instructions alone cannot eliminate them." },
  { title: "Review decisions in small steps", description: "I ask for tradeoffs before non-trivial changes, then break the work into reviewable pieces. I challenge the proposed design, inspect the diff and use review agents for another perspective, not as a substitute for my own judgment." },
  { title: "Define what finished means", description: "I require actual build and test output, checks for failure and accessibility states, and documentation that matches the result. I keep publication behind human approval and help colleagues adopt the same evidence-first habits." },
] as const;

export const engineeringBrief = [
  "Scenario: A poll vote should appear immediately, even on a slow connection. A failed request must not leave an incorrect vote on screen.",
  "Read first: Trace the existing view model, persistence and network action. Identify which layer owns the vote state and find the established error-handling pattern.",
  "Before coding: Explain the current behavior, identify assumptions and propose the smallest change. Do not invent APIs or assume a successful network response.",
  "Constraints: Reuse existing storage and concurrency rules. Preserve multi-select behavior and accessibility. Keep unrelated refactors out of scope.",
  "Acceptance criteria: Test success, failure and rollback, repeated taps, multi-select changes, and leaving the screen during a request. Check out-of-order responses rather than assuming they arrive in sequence.",
  "Handoff: Run the relevant checks and report their actual output. Distinguish verified behavior from anything not tested. Do not deploy without approval.",
].join("\n\n");

export const instructionExample = [
  "# Working rules",
  "- Read the repository guidance and relevant implementation before proposing code.",
  "- Check APIs against the project's SDK and documentation. State uncertainty instead of filling a gap with a plausible name.",
  "- Turn assumptions into questions or tests. Do not change requirements silently.",
  "- Preserve existing behavior outside the task and follow the established architecture.",
  "- Test failure paths and accessibility, not only the successful interaction.",
  "- Report actual command output. A proposed test is not a passing test.",
  "- Keep private code, customer data and internal metrics out of public artifacts.",
  "- Ask for approval before publishing. Keep the human responsible for the final decision.",
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
  { value: "63", label: "UI tests authored", detail: "In GroupMe's end-of-2024 suite, alongside reusable page objects and helpers. A historical authorship count, not a coverage percentage." },
  { value: "17", label: "Accessibility issues addressed", detail: "Distinct issues in seven merged changes in July 2026: VoiceOver roles, headings, selection, announcements and contrast." },
  { value: "02", label: "Internship projects mentored", detail: "In 2024 and 2025: implementation, architecture, review and communicating results. Additional coaching extends beyond these two projects." },
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

export const resumeSummary = "iOS engineer and Member of Technical Staff at Microsoft. Owns consumer features from design through implementation and rollout, including GroupMe messaging and AI experiences. Earlier work spans Teams architecture, the Peacock launch and developer support.";

export const resumeLeadership = "Mentored two internship projects in 2024 and 2025, covering architecture, implementation, code review and communicating results. Also supported engineer onboarding and shared technical practice.";

export const resumeAiPractice = "Writes task briefs and reusable instruction files with source checks, constraints and acceptance tests. Uses Copilot and review agents for implementation, debugging and review, with human oversight. Helps colleagues adopt AI-assisted development.";

export const resumeSkills = "Swift, Objective-C, UIKit, Swift Concurrency, MVVM-C, Core Data, REST APIs, WebSockets, caching, feature flags, telemetry, XCTest, UI automation, VoiceOver, accessibility, Git and GitHub Copilot.";

export const resumeGroups = [
  {
    title: "Microsoft: GroupMe iOS",
    period: "2024 - present",
    bullets: [
      "Owned redesigned profiles and swipe navigation on iOS; GroupMe reported over 1.2 billion product-wide profile views in 2025.",
      "Delivered chat bubbles and light/dark theming, progressive AI image loading, and streaming summaries with caching, error handling and telemetry.",
      "Implemented contextual feedback and optimistic poll updates with rollback. Built UI-test foundations with 63 tests in the end-of-2024 suite; fixed 17 accessibility issues in July 2026.",
    ],
    detailedBullets: [
      "Owned iOS delivery of redesigned profiles: interest selection, photo galleries, music previews, mini-profiles and swipe navigation. GroupMe reported over 1.2 billion product-wide profile views in 2025.",
      "Implemented grouping-aware chat bubbles and reusable light/dark styling across message cells, the compose bar and navigation, with accessibility and compatibility follow-up.",
      "Owned progressive loading for Copilot-generated images: intermediate previews, progress states, completion, failure handling and cell-reuse behavior.",
      "Owned the iOS streaming-summary experience, including incremental rendering, bounded caching and freshness checks, failure states, telemetry and automated tests. Coordinated behavior with backend and Android engineers.",
      "Implemented in-app feedback and shake-triggered reporting with screenshot context and user confirmation. Added optimistic local poll updates with service reconciliation and rollback on failure.",
      "Built reusable UI-test infrastructure and authored 63 tests in the historical end-of-2024 suite. Maintained scenario tests and contributed build-pipeline fixes.",
      "Implemented fixes for 17 distinct accessibility issues across seven merged changes in July 2026, including VoiceOver semantics, selection states, result announcements and dark-mode contrast.",
    ],
  },
  {
    title: "Microsoft: Teams iOS",
    period: "2022 - 2024",
    bullets: [
      "Refactored legacy post-meeting logic into Swift components and testable view models, coordinating changes with partner teams.",
      "Improved privacy-sensitive notification and file-handling behavior, and added post-meeting UI automation.",
    ],
    detailedBullets: [
      "Led incremental modernization of post-meeting logic, separating a legacy controller into Swift components, view models and coordinators while retaining appropriate Objective-C code.",
      "Coordinated design and implementation with partner engineering teams, added tests, and supported subsequent meeting-experience changes.",
      "Protected notification previews from unaccepted contacts and adjusted consumer file caching and offline behavior without changing enterprise scenarios. Delivered community UI and post-meeting automation.",
    ],
  },
  {
    title: "Microsoft: Developer Support",
    period: "2021 - 2022",
    bullets: [
      "Led technical escalation support for Teams and Skype for Business developer scenarios across EMEA; built shared tools and onboarding resources.",
    ],
    detailedBullets: [
      "Took technical ownership of Teams and Skype for Business developer-support scenarios across EMEA, collaborating with product engineering and support teams in other regions.",
      "Built escalation and capacity-planning interfaces, developer-case guidance and a shared knowledge base. Helped engineers scope integrations involving Microsoft Graph, webhooks and bots.",
      "Supported new engineers through onboarding, troubleshooting sessions and technical coaching.",
    ],
  },
  {
    title: "Peacock: iOS Developer",
    period: "Apr 2020 - Mar 2021",
    bullets: [
      "Contributed to the Peacock iPhone and iPad launch; implemented the highlights section and movie/show details UI.",
    ],
    detailedBullets: [
      "Contributed to the Peacock iPhone and iPad app launch using Swift and UIKit.",
      "Implemented the highlights section and movie/show details UI.",
    ],
  },
  {
    title: "Talkdesk: Software Engineer",
    period: "May 2019 - Apr 2020",
    bullets: [
      "Contributed to a Ruby microservice before moving to iOS work on push notifications and Interface Builder; helped onboard new iOS engineers.",
    ],
    detailedBullets: [
      "Contributed to a Ruby microservice, then moved into iOS development involving push notifications and Interface Builder.",
      "Helped onboard new iOS engineers and shared context from the transition between backend and mobile work.",
    ],
  },
] as const;
