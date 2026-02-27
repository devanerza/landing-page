export default function Home() {
  return (
    <main className="pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/60 dark:border-slate-800/60 dark:bg-background-dark/80">
        <div className="max-w-7xl mx-auto px-10 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-black">Devan Farandi</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold hover:underline underline-offset-4 transition-colors" href="#work">Selected Works</a>
            <a className="rounded-4xl bg-black border text-white hover:bg-white hover:text-black px-6 py-3" href="#contact">
              Get in Touch
            </a>
          </div>
          <button className="md:hidden text-slate-900 dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-22 py-30 px-6 grid-pattern">
        <div className="max-w-5xl mx-auto text-center z-10">
          <div className="lg:col-span-7 z-10">
            <div className="text-black dark:text-white flex items-center justify-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-black dark:bg-white"></span>
              </span>
            </div>
            <h1 className="text-6xl font-black leading-[1.1] text-black mb-8">
              Hi, I'm Devan Farandi!
            </h1>
            <p className="text-1x1 text-slate-500 dark:text-slate-400 max-w-2xl mb-4 mx-auto leading-relaxed">
              A Full-Stack Developer with a strong focus on creating high-end web solutions for forward-thinking companies and startups.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a className="bg-black dark:bg-white text-white dark:text-black px-12 py-6 flex items-center gap-2 group" href="#work">
                View Selected Work
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section
      <section className="py-48 bg-white dark:bg-black" id="expertise">
        <div className="max-w-7xl mx-auto px-15">
          <div className="mb-16 text-center">
            <h2 className="text-black dark:text-white uppercase tracking-widest text-sm font-bold mb-4">Core Competencies</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Expertise that drives results</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/30 transition-colors group">
              <div className="text-black dark:text-white mb-6">
                <span className="material-symbols-outlined text-4xl">auto_awesome</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Static Site for Businesses</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Creating a static site for businesses that is fast, secure, and easy to maintain.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary/30 transition-colors group">
              <div className="text-black dark:text-white mb-6">
                <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Brand Strategy</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Developing cohesive visual identities and digital strategies that help brands stand out in a crowded marketplace.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Technologies Section - Marquee Redesign */}
      <section className="py-32 bg-black overflow-hidden border-y border-white/5" id="technologies">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold mb-4">The Stack</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">Built with modern industry tools.</h3>
        </div>

        <div className="relative flex overflow-x-hidden border-y border-white/5 py-12">
          <div className="flex animate-marquee shrink-0 items-center gap-16 px-8">
            {[
              { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
              { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
              { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
              { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
              { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
              { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            ].map((tech, index) => (
              <div key={index} className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center gap-3 p-3 group-hover:scale-110 transition-all duration-300">
                  <img src={tech.icon} alt={tech.name} className={`w-full h-full object-contain ${tech.invert ? 'invert' : ''}`} />
                </div>
                <span className="text-2xl font-bold text-white/50 group-hover:text-white transition-colors duration-300 tracking-tighter">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="flex animate-marquee shrink-0 items-center gap-16 px-8" aria-hidden="true">
            {[
              { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
              { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
              { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
              { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
              { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
              { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
              { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
            ].map((tech, index) => (
              <div key={index + 20} className="flex items-center gap-6 group cursor-default">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center gap-3 p-3 group-hover:scale-110 transition-all duration-300">
                  <img src={tech.icon} alt={tech.name} className={`w-full h-full object-contain ${tech.invert ? 'invert' : ''}`} />
                </div>
                <span className="text-2xl font-bold text-white/50 group-hover:text-white transition-colors duration-300 tracking-tighter">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-white/5 blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-white/5 blur-[120px] pointer-events-none rounded-full"></div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-48 px-15" id="work">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-black uppercase tracking-widest text-sm font-bold mb-4">Case Studies</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-black">Selected Projects</h3>
            </div>
            <a className="text-black flex items-center gap-2 font-bold" href="#">
              Explore Archive
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Project 1 */}
            <div className="project-card group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 mb-6">
                <a href="https://stash-read.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img
                    alt="Stash Read Reading Tracker Tool"
                    className="project-image w-full h-full object-cover"
                    src="/project-stash-read.jpg"
                  />
                </a>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Web App / Productivity Tool</p>
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">Stash-Read</h4>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 mb-6">
                {/* <img
                  alt="Coming Soon Project"
                  className="project-image w-full h-full object-cover"
                  src="/project-coming-soon.jpg"
                /> */}
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Coming Soon</p>
                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">Coming Soon</h4>
                </div>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">arrow_outward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-30 px-10 text-center bg-black" id="contact">
        <div className="max-w-4xl mx-auto py-20 px-10  border-slate-800 backdrop-blur-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
              Let's build something <span className="text-slate-400">remarkable</span> together.
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Have an idea or a project that needs a professional touch? Reach out and let's start a conversation about how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a className="bg-white rounded-full text-black px-12 py-4 font-bold text-lg hover:bg-black hover:text-white hover:border-x-2 hover:transition-all hover:border-white" href="mailto:hello@example.com">
                Start a Project
              </a>
            </div>
          </div>
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-1 rounded">
              <span className="material-symbols-outlined text-lg block">deployed_code</span>
            </div>
            <span className="text-lg font-extrabold tracking-tight uppercase">Portfolio</span>
          </div>
          <div className="flex gap-8 text-sm font-bold text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-primary transition-colors" href="#">Threads</a>
            <a className="hover:text-primary transition-colors" href="#">GitHub</a>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 Devan Farandi. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
