import logoBird from "@/assets/logo-bird.png";
import logoStubhub from "@/assets/logo-stubhub.png";
import logoKlutch from "@/assets/logo-klutch.png";
import logoYale from "@/assets/logo-yale.png";

interface TimelineItem {
  logo: string;
  company: string;
  role: string;
  period: string;
  pill: string;
  headline: string;
}

const milestones: TimelineItem[] = [
  {
    logo: logoBird,
    company: "Bird",
    role: "Chief Technology Officer",
    period: "2018 — Present",
    pill: "IPO → EBITDA+",
    headline: "Scaled global micromobility platform across 250+ cities",
  },
  {
    logo: logoStubhub,
    company: "StubHub",
    role: "Product & Strategy",
    period: "2015 — 2018",
    pill: "$4B+ GMV",
    headline: "Built and scaled experimentation and engagement infrastructure",
  },
  {
    logo: logoKlutch,
    company: "Klutch",
    role: "Founder",
    period: "2013 — 2015",
    pill: "Acquired by eBay",
    headline: "Founded, raised $2M, led product, and exit",
  },
  {
    logo: logoYale,
    company: "Yale University",
    role: "Education",
    period: "2007 — 2013",
    pill: "Yale",
    headline: "Psychology & Economics focused on behavior and game theory",
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

      <div className="space-y-3">
        {milestones.map((m, i) => (
          <div
            key={m.company}
            className="opacity-0 animate-slide-up"
            style={{ animationDelay: `${1.3 + i * 0.12}s`, animationFillMode: "forwards" }}
          >
            <div className="group rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:border-border/60 hover:bg-card/50">
              <div className="flex items-start gap-4">
                {/* Logo */}
                <img
                  src={m.logo}
                  alt={`${m.company} logo`}
                  className="h-10 w-10 md:h-11 md:w-11 object-cover rounded-[20%] shrink-0 shadow-sm"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Top row: Company + Period */}
                  <div className="flex items-baseline justify-between gap-3 mb-0.5">
                    <h3 className="font-heading text-[15px] md:text-base font-semibold text-foreground">
                      {m.company}
                    </h3>
                    <span className="text-muted-foreground/60 text-xs font-body whitespace-nowrap">
                      {m.period}
                    </span>
                  </div>

                  {/* Role */}
                  <p className="text-muted-foreground text-xs tracking-wide mb-3">
                    {m.role}
                  </p>

                  {/* Pill + Headline */}
                  <div className="flex items-start gap-2.5">
                    <span className="shrink-0 mt-[3px] inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[11px] font-medium text-primary tracking-wide">
                      {m.pill}
                    </span>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {m.headline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;
