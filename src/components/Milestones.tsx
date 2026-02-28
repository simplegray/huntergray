import { useState } from "react";
import { Linkedin } from "lucide-react";
import logoBird from "@/assets/logo-bird.png";
import logoStubhub from "@/assets/logo-stubhub.png";
import logoKlutch from "@/assets/logo-klutch.png";
import logoYale from "@/assets/logo-yale.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
      "Led technology through IPO and first profitable year at global scale. Spearheaded the company's flagship machine-learning model. Currently leading product, data, and engineering.",
    brandColor: "#62C9EA",
  },
  {
    logo: logoStubhub,
    company: "StubHub",
    role: "Director of Product",
    period: "2015 — 2017",
    milestone: "Growth & Innovation",
    kpiLabel:
      "Led innovation division developing robust rapid iteration, A/B experimentation, and engagement frameworks.",
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
    kpiLabel: "Double major with focus on incentives, decision theory, gamification, and consumer behavior.",
    brandColor: "#4F80CE",
  },
];

const Milestones = () => {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState<TimelineItem | null>(null);

  return (
    <section className="mt-12 mb-2">
      <h2
        className="font-heading text-lg md:text-xl font-semibold text-foreground mb-6 opacity-0 animate-slide-up"
        style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
      >
        Key Milestones
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
              {/* Timeline spine - hidden on mobile */}
              <div className="hidden md:flex flex-col items-center shrink-0 w-10">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(45_100%_60%_/_0.4)] mt-1 shrink-0" />
                {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-primary/40 to-border/30" />}
              </div>

              {/* Card */}
              <div className={`group flex-1 pb-8 ${isLast ? "pb-0" : ""}`}>
                <div
                  className={`glass-card p-4 md:p-6 transition-all duration-300 hover:border-primary/30 overflow-hidden ${isMobile ? "cursor-pointer active:scale-[0.98]" : ""}`}
                  style={{
                    boxShadow: `0 0 25px ${m.brandColor}33`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px hsl(45 100% 60% / 0.12)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${m.brandColor}33`;
                  }}
                  onClick={() => setSelected(m)}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <img
                      src={m.logo}
                      alt={`${m.company} logo`}
                      className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-[22%] shrink-0 shadow-[0_2px_8px_hsl(0_0%_0%_/_0.3)]"
                    />
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
                                borderWidth: "1px",
                                borderStyle: "solid",
                              }}
                            >
                              {m.role}
                            </span>
                          </div>
                        </div>
                        <p className="text-primary font-heading text-sm md:text-base font-medium tracking-wider uppercase">
                          {m.milestone}
                        </p>
                        <span className="text-muted-foreground text-xs font-body">{m.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-snug mt-3">{m.kpiLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile detail dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent
          className="max-w-[92vw] md:max-w-[740px] rounded-2xl p-0 overflow-hidden [&>button]:hidden bg-card/50 backdrop-blur-xl !border-none"
          style={{
            border: "none",
            outline: "none",
            boxShadow: selected
              ? `0 0 20px ${selected.brandColor}50, 0 0 60px ${selected.brandColor}30, 0 0 120px ${selected.brandColor}15`
              : undefined,
          }}
        >
          {selected && (
            <div className="p-6 pt-8">
              {/* Logo + Company */}
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={selected.logo}
                  alt={`${selected.company} logo`}
                  className="h-14 w-14 object-cover rounded-[22%] shadow-[0_2px_8px_hsl(0_0%_0%_/_0.3)]"
                />
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{selected.company}</h3>
                  <span className="text-muted-foreground text-sm font-body">{selected.period}</span>
                </div>
                <a
                  href="https://linkedin.com/in/huntergray"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-link shrink-0"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              {/* Role badge */}
              <span
                className="inline-block font-heading text-xs font-medium tracking-wider uppercase rounded-full px-3 py-1 mb-4"
                style={{
                  color: selected.brandColor,
                  borderColor: `${selected.brandColor}4D`,
                  backgroundColor: `${selected.brandColor}1A`,
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              >
                {selected.role}
              </span>

              {/* Milestone */}
              <p className="text-primary font-heading text-lg font-medium tracking-wider uppercase mb-4">
                {selected.milestone}
              </p>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed">{selected.kpiLabel}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Milestones;
