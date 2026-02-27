import logoBird from "@/assets/logo-bird.png";
import logoStubhub from "@/assets/logo-stubhub.png";
import logoKlutch from "@/assets/logo-klutch.png";
import logoYale from "@/assets/logo-yale.png";

interface TimelineItem {
  logo: string;
  company: string;
  role: string;
  period: string;
  kpi: string;
  kpiLabel: string;
}

const milestones: TimelineItem[] = [
  {
    logo: logoBird,
    company: "Bird",
    role: "Chief Technology Officer",
    period: "2018 — Present",
    kpi: "200M+",
    kpiLabel: "Rides delivered, first profitable quarter",
  },
  {
    logo: logoStubhub,
    company: "StubHub",
    role: "Product & Strategy",
    period: "2015 — 2018",
    kpi: "$4B+",
    kpiLabel: "Annual GMV, world's largest live-event platform",
  },
  {
    logo: logoKlutch,
    company: "Klutch",
    role: "Founder",
    period: "2013 — 2015",
    kpi: "Acquired",
    kpiLabel: "Social scheduling platform, acquired by eBay",
  },
  {
    logo: logoYale,
    company: "Yale & Harvard",
    role: "Education",
    period: "2007 — 2013",
    kpi: "Ivy League",
    kpiLabel: "Yale University · Harvard Business School",
  },
];

const Milestones = () => {
  return (
    <section className="mt-12 mb-2">
      <h2
        className="font-heading text-lg md:text-xl font-semibold text-foreground mb-8 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
      >
        Highlights
      </h2>

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
                {!isLast && (
                  <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-border/30" />
                )}
              </div>

              {/* Card */}
              <div className={`group flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
                <div className="glass-card p-5 md:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(45_100%_60%_/_0.08)]">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <img
                      src={m.logo}
                      alt={`${m.company} logo`}
                      className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg shrink-0"
                    />

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-3 mb-1">
                        <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">
                          {m.company}
                        </h3>
                        <span className="text-muted-foreground text-xs font-body whitespace-nowrap">
                          {m.period}
                        </span>
                      </div>
                      <p className="text-primary font-heading text-xs font-medium tracking-wider uppercase mb-3">
                        {m.role}
                      </p>

                      {/* KPI */}
                      <div className="flex items-baseline gap-3">
                        <span className="font-heading text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                          {m.kpi}
                        </span>
                        <span className="text-muted-foreground text-sm leading-snug">
                          {m.kpiLabel}
                        </span>
                      </div>
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
