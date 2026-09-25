"use client";

import { useEffect, useState } from "react";

const nav = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const skills: Record<string, string[]> = {
  Languages: ["JavaScript", "TypeScript", "C++", "Java", "Python (basics)"],
  Frontend: ["React.js", "Next.js", "HTML5", "Tailwind CSS", "Responsive design"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "MongoDB Atlas", "SQL", "MySQL"],
  Concepts: ["OOP", "DBMS", "API integration", "CRUD", "State management", "Async programming"],
  Tools: ["Git", "GitHub", "Postman", "Swagger", "VS Code", "Vercel", "Render"],
};

const projects = [
  {
    title: "AI Career Intelligence Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Multer"],
    description:
      "A full-stack career platform for job application tracking, resume management, and skill-gap analysis.",
    points: [
      "JWT and bcrypt authentication protecting every application workflow.",
      "REST APIs built with Express.js and MongoDB Atlas.",
      "Resume uploads handled with Multer, wired to the frontend through Axios.",
      "Frontend deployed on Vercel, backend on Render.",
    ],
    links: [
      { label: "Live", href: "https://ai-analyzer-kohl.vercel.app" },
      { label: "GitHub", href: "https://github.com/busalatejaswi7-jpg" },
    ],
  },
  {
    title: "Developer Hub — Authentication Platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Context API"],
    description:
      "A full-stack authentication platform with separate User and Admin access control.",
    points: [
      "JWT authentication with protected routes and Axios interceptors.",
      "Registration, login, profile management, search and pagination.",
      "Admin APIs for managing users, backed by role-based permissions.",
      "Auth state managed with React Context; deployed on Render.",
    ],
    links: [{ label: "Live demo", href: "https://frontend-pskx.onrender.com" }],
  },
];

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      setProgress(scrollable > 0 ? el.scrollTop / scrollable : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col lg:flex-row">
      {/* Mobile top bar */}
      <header className="flex items-center justify-between border-b border-line px-6 py-4 lg:hidden">
        <span className="font-display text-lg">Tejaswi Busala</span>
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="text-sm text-bone-dim"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col border-b border-line px-6 py-10 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[300px] lg:shrink-0 lg:border-b-0 lg:border-r lg:py-14`}
      >
        <div className="relative flex h-full flex-col">
          {/* scroll progress ribbon, desktop only */}
          <div className="absolute top-0 -left-6 hidden h-full w-px bg-line lg:block">
            <div
              className="w-px bg-gold shadow-[0_0_12px_var(--color-gold)]"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="glow-blob -top-10 -left-6 h-40 w-40" />

          <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 font-display text-sm text-gold">
            TB
          </div>

          <a href="#intro" className="mt-6 font-display text-2xl leading-tight tracking-tight">
            Tejaswi
            <br />
            Busala
          </a>
          <p className="mt-3 text-sm text-bone-dim">
            Frontend / Full-Stack Developer
          </p>

          <nav className="mt-10 flex flex-col gap-3 text-sm">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setMenuOpen(false)}
                className="w-fit text-bone-dim transition-colors hover:text-bone"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 flex flex-col gap-2 text-sm text-bone-dim lg:mt-auto">
            <a href="mailto:busalatejaswi3@gmail.com" className="hover:text-bone">
              busalatejaswi3@gmail.com
            </a>
            <a href="tel:+919381979532" className="hover:text-bone">
              +91-9381979532
            </a>
            <a
              href="https://github.com/busalatejaswi7-jpg"
              target="_blank"
              rel="noreferrer"
              className="hover:text-bone"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tejaswi-b-009ba227b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-bone"
            >
              LinkedIn
            </a>
            <span>Visakhapatnam, India</span>
          </div>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 px-6 py-14 lg:px-20 lg:py-20">
        {/* Intro */}
        <section id="intro" className="relative max-w-xl scroll-mt-10">
          <div className="glow-blob -top-24 -left-10 h-72 w-72" />

          <p className="relative text-sm font-medium tracking-wide text-gold">
            Open to new opportunities
          </p>
          <h1 className="relative mt-5 font-display text-[2.75rem] leading-[1.12] tracking-tight sm:text-6xl">
            I build interfaces people enjoy using, and ship them with Next.js.
          </h1>
          <p className="relative mt-6 text-lg leading-8 text-bone-dim">
            Frontend-focused full-stack developer with hands-on experience shipping
            production web applications — responsive UI, REST API integration, reusable
            components, and the unglamorous work of debugging real frontend issues.
          </p>
          <div className="relative mt-9 flex gap-8 text-sm font-semibold">
            <a
              href="#projects"
              className="border-b-2 border-gold pb-1 text-bone transition-colors hover:text-gold"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="border-b-2 border-transparent pb-1 text-bone-dim transition-colors hover:text-bone"
            >
              Get in touch
            </a>
          </div>
        </section>

        <div className="my-14 fade-line" />

        {/* Experience */}
        <section id="experience" className="scroll-mt-10">
          <h2 className="font-display text-3xl">Experience</h2>

          <div className="mt-8 border-l-2 border-gold pl-6 shadow-[-6px_0_24px_-18px_var(--color-gold)]">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="text-lg font-semibold">Junior Software Developer</h3>
              <span className="text-sm text-bone-dim">June 2026 — Present</span>
            </div>
            <p className="mt-1 text-bone-dim">HEITS Pvt. Ltd.</p>

            <ul className="mt-5 space-y-3 text-bone-dim">
              <li>
                Built responsive, reusable frontend components with React.js, Next.js,
                TypeScript and Tailwind CSS.
              </li>
              <li>
                Implemented login and user-facing workflows: form handling, validation,
                navigation, country-code selection and phone-number input.
              </li>
              <li>
                Integrated REST APIs to fetch, submit and display application data,
                handling loading states and errors on the frontend.
              </li>
              <li>Implemented page navigation and routing across application workflows.</li>
              <li>
                Debugged frontend and API integration issues with Chrome DevTools, the
                Network tab and Postman.
              </li>
              <li>Collaborated with backend developers using Node.js, Express.js and Git.</li>
            </ul>
          </div>
        </section>

        <div className="my-14 fade-line" />

        {/* Projects */}
        <section id="projects" className="scroll-mt-10">
          <h2 className="font-display text-3xl">Selected work</h2>

          <div className="mt-8 divide-y divide-line">
            {projects.map((project) => (
              <article className="group py-8 transition-transform duration-300 first:pt-0 hover:-translate-y-0.5" key={project.title}>
                <h3 className="font-display text-2xl transition-colors group-hover:text-gold">
                  {project.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line px-3 py-1 text-xs text-bone-dim transition-colors group-hover:border-gold-dim group-hover:text-bone"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-4 leading-7 text-bone-dim">{project.description}</p>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-bone-dim">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-6">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block border-b border-gold pb-0.5 text-sm font-medium text-bone"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="my-14 fade-line" />

        {/* Skills */}
        <section id="skills" className="scroll-mt-10">
          <h2 className="font-display text-3xl">Skills</h2>

          <div className="mt-8 space-y-6">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="flex flex-col gap-3 sm:flex-row sm:gap-8">
                <h3 className="w-full shrink-0 text-sm text-bone-dim sm:w-32">{group}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {items.map((item) => (
                    <span key={item} className="text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-14 fade-line" />

        {/* Education */}
        <section id="education" className="scroll-mt-10">
          <h2 className="font-display text-3xl">Education</h2>

          <div className="mt-8 space-y-6">
            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-medium">
                  B.Tech, Electronics and Communication Engineering
                </h3>
                <span className="text-sm text-bone-dim">2022 — 2026 · CGPA 8.01</span>
              </div>
              <p className="mt-1 text-sm text-bone-dim">
                Rajiv Gandhi University of Knowledge Technologies, Srikakulam
              </p>
            </div>

            <div>
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="font-medium">Intermediate</h3>
                <span className="text-sm text-bone-dim">2020 — 2022 · CGPA 9.14</span>
              </div>
              <p className="mt-1 text-sm text-bone-dim">
                Rajiv Gandhi University of Knowledge Technologies, Srikakulam
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm text-bone-dim">Certifications & training</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-line px-3 py-1 text-sm">
                Namaste React — Akshay Saini
              </span>
              <span className="rounded-full border border-line px-3 py-1 text-sm">
                Web Development — Unacademy
              </span>
            </div>
          </div>
        </section>

        <div className="my-14 fade-line" />

        {/* Contact */}
        <section id="contact" className="scroll-mt-10 pb-10">
          <h2 className="font-display text-3xl">Let&apos;s build something</h2>
          <p className="mt-4 max-w-md leading-7 text-bone-dim">
            Open to opportunities and conversations around frontend and full-stack
            development. The fastest way to reach me is email.
          </p>
          <a
            href="mailto:busalatejaswi3@gmail.com"
            className="mt-6 inline-flex rounded-full bg-gradient-to-b from-[#f4c66d] to-gold px-7 py-3 text-sm font-semibold text-ink shadow-[0_8px_30px_-10px_var(--color-gold)] transition-transform hover:-translate-y-0.5"
          >
            busalatejaswi3@gmail.com
          </a>
          <p className="mt-8 text-sm text-bone-dim">
            © 2026 Tejaswi Busala. Built with Next.js.
          </p>
        </section>
      </main>
    </div>
  );
}