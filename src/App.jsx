import {
  ArrowUpRight,
  Code2,
  Database,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Server,
  Sparkles,
} from 'lucide-react';

import profilePhoto from './assets/Profile.png';

const profile = {
  name: 'Nikko',
  role: 'Full-Stack Web Developer',
  location: 'Cebu, Philippines',
  email: 'nikkoensomo.work@gmail.com',
  github: 'https://github.com/nikkoensomo',
  resume: '#',
};

const skills = [
  'React',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'REST APIs',
  'JWT Auth',
  'Git',
];

const projects = [
  {
    title: 'SideQuest',
    type: 'MERN Application',
    description:
      'A quest-based task marketplace where users can post errands, accept available quests, and track progress through status-driven workflows.',
    highlights: [
      'Built protected REST endpoints for posting, accepting, editing, cancelling, and completing quests.',
      'Designed reusable React components for quest cards, modals, status badges, and dashboard flows.',
      'Implemented ownership checks, route protection, and frontend state updates after API actions.',
    ],
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/nikkoensomo/side-quest',
    demo: 'https://side-quest-sooty.vercel.app',
  },
  {
    title: 'Portfolio Website',
    type: 'Frontend',
    description:
      'A focused developer portfolio built to present projects, technical skills, education, and contact information clearly.',
    highlights: [
      'Built with reusable data arrays so content can be updated without changing layout code.',
      'Uses responsive sections, accessible links, and a clean visual hierarchy.',
      'Structured as a lightweight Vite React app for fast development and deployment.',
    ],
    stack: ['React', 'Tailwind CSS', 'Vite'],
    repo: 'https://github.com/nikkoensomo/personal-portfolio',
    demo: '#',
  },
];

const experience = [
  {
    title: 'BSIT Graduate',
    organization: 'University of San Carlos',
    period: 'Graduate',
    description:
      'Completed a Bachelor of Science in Information Technology with a focus on software development, web technologies, and practical system building.',
  },
  {
    title: 'Software Developer',
    organization: 'Yoshii Software Solution Philippines Corporation',
    period: 'Aug 2025 - Dec 2025',
    description:
      'Developed and maintained internal business applications to automate manual workflows and increase daily operational efficiency for staff members.'
  },
  {
    title: 'Full-Stack Project Builder',
    organization: 'SideQuest',
    period: 'Current',
    description:
      'Building a resume-ready MERN application with authentication, role-based behavior, dashboard workflows, and CRUD operations.',
  },
];

const statCards = [
  { label: 'Primary Stack', value: 'MERN' },
  { label: 'Focus', value: 'Web Apps' },
  { label: 'Background', value: 'BSIT' },
];

function App() {
  return (
    <div className="min-h-screen bg-panel text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

function Header() {
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-sm font-semibold tracking-wide text-zinc-950">
          Nikko.dev
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-zinc-950">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
            <Sparkles className="h-4 w-4" />
            Open to junior full-stack roles
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            I build practical web apps with React, Node, Express, and MongoDB.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            I am a BSIT graduate from the University of San Carlos focused on
            building clean, useful full-stack applications.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
            >
              View Projects
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-zinc-950 text-xl font-bold text-white">
                <img
                  src={profilePhoto}
                  alt="Nikko Ensomo"
                  className="h-16 w-16 rounded-lg object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-zinc-950">{profile.name}</h2>
                <p className="text-sm font-medium text-gray-500">{profile.role}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 text-sm text-gray-600">
              <InfoRow icon={MapPin} text={profile.location} />
              <InfoRow icon={GraduationCap} text="BSIT, University of San Carlos" />
              <InfoRow icon={Code2} text="MERN Stack + Tailwind CSS" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {statCards.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-gray-200 p-3">
                  <p className="text-xs font-medium text-gray-500">{stat.label}</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-950">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-4 w-4 text-gray-400" />
      <span>{text}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="About"
        title="A developer who likes understanding the system, not just making it work."
        description="I am building my skills through full-stack projects that require real application behavior: authentication, protected routes, database relationships, status flows, and user-facing state updates."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <FeatureCard
          icon={Layers}
          title="Frontend"
          text="React components, Tailwind layouts, modals, route-based pages, and reusable UI patterns."
        />
        <FeatureCard
          icon={Server}
          title="Backend"
          text="Express controllers, REST routes, JWT protection, ownership checks, and workflow-specific endpoints."
        />
        <FeatureCard
          icon={Database}
          title="Database"
          text="MongoDB schemas, references, populate, status fields, and queries for user-specific data."
        />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-medium text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <Icon className="h-5 w-5 text-zinc-950" />
      <h3 className="mt-4 text-base font-semibold text-zinc-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">{text}</p>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-y border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="These projects are written as resume-ready case studies: what the app does, what I built, and the technical decisions involved."
        />

        <div className="mt-8 grid gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{project.type}</p>
          <h3 className="mt-1 text-2xl font-semibold text-zinc-950">{project.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600">
            {project.description}
          </p>
        </div>

        <div className="flex gap-2">
          <ProjectLink href={project.repo} icon={Code2} label="Repo" />
          <ProjectLink href={project.demo} icon={ArrowUpRight} label="Demo" />
        </div>
      </div>

      <ul className="mt-5 grid gap-2 text-sm leading-6 text-gray-600">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function ProjectLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        eyebrow="Experience"
        title="Education and project work"
        description="A concise timeline that connects my academic background with the full-stack work I am building now."
      />

      <div className="mt-8 grid gap-4">
        {experience.map((item) => (
          <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-zinc-950">{item.title}</h3>
                <p className="text-sm font-medium text-gray-500">{item.organization}</p>
              </div>
              <span className="text-sm font-medium text-gray-500">{item.period}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold">Let&apos;s build something useful.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-300">
              I am currently preparing for junior developer opportunities and
              would be glad to talk about web development roles, internships, or
              project collaboration.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-gray-100"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
            <a
              href={profile.github}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              <Code2 className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-zinc-950">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
}

export default App;
