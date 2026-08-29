const programmes = [
  {
    title: 'Data & AI Foundations',
    category: 'Technology',
    duration: '12 weeks',
    level: 'Beginner',
    description:
      'Build practical data literacy, analytical thinking, and AI fluency for real-world problem solving.',
    modules: ['Python Basics', 'Statistics', 'AI Tools', 'Portfolio Project'],
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Digital Marketing Accelerator',
    category: 'Business',
    duration: '10 weeks',
    level: 'Intermediate',
    description:
      'Learn how to shape marketing strategy, run campaigns, and measure impact with modern digital tools.',
    modules: ['Brand Strategy', 'SEO', 'Paid Ads', 'Campaign Analytics'],
    accent: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Product Design Sprint',
    category: 'Design',
    duration: '8 weeks',
    level: 'All levels',
    description:
      'Turn ideas into simple, thoughtful digital experiences through user research and rapid prototyping.',
    modules: ['UX Research', 'Wireframes', 'UI Design', 'Design Critique'],
    accent: 'from-rose-500 to-orange-500',
  },
];

const stats = [
  { label: 'Active learners', value: '2.4k+' },
  { label: 'Partner employers', value: '180+' },
  { label: 'Completion rate', value: '92%' },
  { label: 'Average career lift', value: '3x' },
];

const journey = [
  'Discover your strengths and learning goals',
  'Learn through guided projects and mentoring',
  'Build confidence with practical assessments',
  'Translate skills into work opportunities',
];

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1">Learning</span>
          <span>•</span>
          <span>Career-ready programmes</span>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
              Explore programmes
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Learn skills that move your career forward.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Choose from practical learning paths designed to help you grow faster, build confidence, and get work-ready in the fields shaping tomorrow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                View programmes
              </button>
              <button className="rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800">
                Talk to an advisor
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-cyan-500/10">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Featured pathway</p>
                <h2 className="mt-1 text-2xl font-bold">Career Launch</h2>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                Popular
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Learning format</p>
                <p className="mt-2 text-xl font-semibold">Hybrid + mentor support</p>
              </div>
              <div className="rounded-2xl bg-slate-950/70 p-4">
                <p className="text-sm text-slate-400">Expected outcome</p>
                <p className="mt-2 text-xl font-semibold">Portfolio, confidence, and job readiness</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-4">
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Progress</span>
                  <span>76%</span>
                </div>
                <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Programmes</p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">Choose your learning path</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Technology', 'Business', 'Design'].map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  index === 0
                    ? 'bg-white text-slate-950'
                    : 'border border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article
              key={programme.title}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 transition hover:-translate-y-1 hover:border-slate-700"
            >
              <div className={`h-32 bg-gradient-to-r ${programme.accent}`} />
              <div className="p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-slate-300">
                    {programme.category}
                  </span>
                  <span className="text-sm text-slate-400">{programme.level}</span>
                </div>

                <h3 className="text-2xl font-bold text-white">{programme.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{programme.description}</p>

                <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
                  <span>{programme.duration}</span>
                  <span className="text-cyan-300">Mentor-led</span>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-300">
                  {programme.modules.map((module) => (
                    <li key={module} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      {module}
                    </li>
                  ))}
                </ul>

                <button className="mt-7 w-full rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500 hover:text-slate-950">
                  Explore programme
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">How it works</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">A clear path from learning to opportunity.</h2>
          </div>

          <div className="space-y-5">
            {journey.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 font-bold text-slate-950">
                  {index + 1}
                </div>
                <p className="flex items-center text-lg text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
