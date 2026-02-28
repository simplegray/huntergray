import logoBird from "@/assets/logo-bird.png";
import logoStubhub from "@/assets/logo-stubhub.png";
import logoKlutch from "@/assets/logo-klutch.png";
import logoYale from "@/assets/logo-yale.png";

interface TimelineItem {
  logo: string;
  company: string;
  role: string;
  period: string;
  milestone: string;
  kpiLabel: string;
  brandColor: string;
}

const milestones: TimelineItem[] = [
  {
    logo: logoBird,
    company: "Bird",
    role: "Chief Technology Officer",
    period: "2018 — Present",
    milestone: "IPO → Profitability",
    kpiLabel:
      "Led technology through IPO and first profitable year at global scale. Spearheaded the company's flagship machine-learning model.",
    brandColor: "#62C9EA",
  },
  {
    logo: logoStubhub,
    company: "StubHub",
    role: "Director of Product",
    period: "2015 — 2017",
    milestone: "Growth & Innovation",
    kpiLabel: "Led innovation division developing robust A/B experimentation and engagement frameworks.",
    brandColor: "#9C82D3",
  },
  {
    logo: logoKlutch,
    company: "Klutch",
    role: "CEO & Founder",
    period: "2011 — 2015",
    milestone: "Founded → Acquired by eBay",
    kpiLabel: "Raised capital, built product, and led company through acquisition.",
    brandColor: "#E48253",
  },
  {
    logo: logoYale,
    company: "Yale University",
    role: "Psychology & Economics",
    period: "2001 — 2005",
    milestone: "Applied Game Theory",
    kpiLabel: "Double major with focuse on incentives, decision theory, and consumer behavior.",
    brandColor: "#4F80CE",
  },
];

const Milestones = () => {
  return (
    <section className="mt-12 mb-2">
      <h2
        className="font-heading text-lg md:text-xl font-semibold text-foreground mb-6 opacity-0 animate-slide-up"
        style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
      >
        Milestones
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
                {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-border/30" />}
              </div>

              {/* Card */}
              <div className={`group flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
                <div
                  className="glass-card p-4 md:p-6 transition-all duration-300 hover:border-primary/30 overflow-hidden"
                  style={{
                    boxShadow: `0 0 25px ${m.brandColor}33`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px hsl(45 100% 60% / 0.12)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${m.brandColor}33`;
                  }}
                >
                   <div className="flex items-start gap-3 md:gap-4">
                    {/* Logo */}
                    <img
                      src={m.logo}
                      alt={`${m.company} logo`}
                      className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-[22%] shrink-0 shadow-[0_2px_8px_hsl(0_0%_0%_/_0.3)]"
                    />

                    {/* Info */}
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <div className="flex flex-col gap-1 mb-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">
                            {m.company}
                          </h3>
                          <div className="flex flex-wrap gap-1.5 justify-end shrink-0">
                            <span
                              className="font-heading text-[8px] md:text-xs font-medium tracking-wider uppercase rounded-full px-1.5 md:px-2.5 py-0.5"
                              style={{
                                color: m.brandColor,
                                borderColor: `${m.brandColor}4D`,
                                backgroundColor: `${m.brandColor}1A`,
                                borderWidth: '1px',
                                borderStyle: 'solid',
                              }}
                            >
                              {m.role}
                            </span>
                          </div>
                        </div>
                        <p className="text-primary font-heading text-xs font-medium tracking-wider uppercase">
                          {m.milestone}
                        </p>
                        <span className="text-muted-foreground text-xs font-body">{m.period}</span>
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
