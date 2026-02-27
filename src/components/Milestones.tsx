import logoBird from "@/assets/logo-bird.png";
import logoStubhub from "@/assets/logo-stubhub.png";
import logoKlutch from "@/assets/logo-klutch.png";
import logoYale from "@/assets/logo-yale.png";

interface TimelineItem {
  logo: string;
  company: string;
  role: string;
  period: string;
  badges: string[];
  kpiLabel: string;
}

const milestones: TimelineItem[] = [
  {
    logo: logoBird,
    company: "Bird",
    role: "Chief Technology Officer",
    period: "2018 — Present",
    badges: ["IPO", "Unicorn"],
    kpiLabel:
      "Led technology strategy (product, design, data, and engineering) for scaling our global operations across 300+ and developing the compnay's signature machine-learning demand model for scooter placement and pricing optimization.",
  },
  {
    logo: logoStubhub,
    company: "StubHub",
    role: "Director of Product",
    period: "2015 — 2017",
    badges: ["Product Leader"],
    kpiLabel: "Spearheaded eBay's innovation division at Stubhub.
      
      
Director, Product
Director, Product
StubHub · Full-timeStubHub · Full-time
May 2015 - Jun 2017 · 2 yrs 2 mosMay 2015 to Jun 2017 · 2 yrs 2 mos
San Francisco Bay AreaSan Francisco Bay Area
Spearheaded eBay's innovation division at Stubhub. Focused on mobile, payment technology, event discovery, and social engagement aimed at increasing our engagement KPI.",
  },
  {
    logo: logoKlutch,
    company: "Klutch",
    role: "CEO & Founder",
    period: "2011 — 2015",
    badges: ["Exit", "Startup"],
    kpiLabel: "Founded startup to solve the consumer problem of group scheduling and social event discovery.",
  },
  {
    logo: logoYale,
    company: "Yale University",
    role: "Psychology & Economics",
    period: "2001 — 2005",
    badges: ["Game Theory"],
    kpiLabel:
      "At Yale, I studied the intersection of social psychology and consumer behavior culminating in a synthetic focus in game theory.",
  },
];

const Milestones = () => {
  return (
    <section className="mt-12 mb-2">
      <div className="relative">
        {milestones.map((m, i) => {
          const isLast = i === milestones.length - 1;
          return (
            <div
              key={m.company}
              className="relative flex gap-5 opacity-0 animate-slide-up"
              style={{ animationDelay: `${1.3 + i * 0.15}s`, animationFillMode: "forwards" }}
            >
              {/* Timeline spine */}
              <div className="flex flex-col items-center shrink-0 w-10">
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(45_100%_60%_/_0.4)] mt-1 shrink-0" />
                {/* Line */}
                {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-border/30" />}
              </div>

              {/* Card */}
              <div className={`group flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
                <div className="glass-card p-5 md:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(45_100%_60%_/_0.08)]">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <img
                      src={m.logo}
                      alt={`${m.company} logo`}
                      className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-[22%] shrink-0 shadow-[0_2px_8px_hsl(0_0%_0%_/_0.3)]"
                    />

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div>
                          <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">
                            {m.company}
                          </h3>
                          <p className="text-primary font-heading text-xs font-medium tracking-wider uppercase mt-0.5">
                            {m.role}
                          </p>
                          <span className="text-muted-foreground text-xs font-body">{m.period}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5 justify-end">
                          {m.badges.map((badge) => (
                            <span
                              key={badge}
                              className="text-primary font-heading text-xs font-medium tracking-wider uppercase border border-primary/30 bg-primary/10 rounded-full px-2.5 py-0.5 whitespace-nowrap"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* KPI Label */}
                      <p className="text-muted-foreground text-sm leading-snug mt-3">{m.kpiLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Milestones;
