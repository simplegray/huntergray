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
    badges: ["IPO", "EBITDA+"],
    kpiLabel:
      "Led technology strategy for scaling our global operations across 300+ and developing the company's signature machine-learning model for scooter placement and demand pricing optimization.",
  },
  {
    logo: logoStubhub,
    company: "StubHub",
    role: "Director of Product",
    period: "2015 — 2017",
    badges: ["New Ventures"],
    kpiLabel:
      "Spearheaded eBay's innovation division at StubHub. Focused on mobile, payment technology, event discovery, and social engagement to increase our virality (k-factor) KPI.",
  },
  {
    logo: logoKlutch,
    company: "Klutch",
    role: "CEO & Founder",
    period: "2011 — 2015",
    badges: ["Exit", "Startup"],
    kpiLabel:
      'Founded startup to solve the consumer problem of group scheduling. Set vision, product strategy, led funding and exit. Klutch was voted as a "Best New App" by Apple in the App Store. Klutch was acquired by eBay in 2015.',
  },
  {
    logo: logoYale,
    company: "Yale University",
    role: "Psychology & Economics",
    period: "2001 — 2005",
    badges: ["Game Theory"],
    kpiLabel:
      "Studied the intersection of social psychology and consumer behavior culminating in a synthetic focus in game theory.",
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
                  {/* Row 1: Outcome headline — visually dominant */}
                  <div className="flex items-center gap-2 mb-2">
                    {m.badges.map((badge, idx) => (
                      <span key={badge}>
                        <span className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-tight">
                          {badge}
                        </span>
                        {idx < m.badges.length - 1 && (
                          <span className="font-heading text-xl md:text-2xl font-bold text-muted-foreground/40 mx-1.5">→</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Row 2: Company · Role — inline, medium weight */}
                  <div className="flex items-center gap-2.5 mb-1">
                    <img
                      src={m.logo}
                      alt={`${m.company} logo`}
                      className="h-5 w-5 object-cover rounded-[22%] shrink-0"
                    />
                    <p className="font-heading text-sm md:text-base font-medium text-foreground/80">
                      {m.company} <span className="text-muted-foreground/50">·</span> {m.role}
                    </p>
                  </div>

                  {/* Row 3: Period — small, muted */}
                  <p className="text-muted-foreground/60 text-xs font-body mb-3">{m.period}</p>

                  {/* Row 4: One concise outcome sentence */}
                  <p className="text-muted-foreground text-sm leading-snug">{m.kpiLabel}</p>
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
