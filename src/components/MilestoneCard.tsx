interface MilestoneCardProps {
  image: string;
  logo: string;
  company: string;
  role: string;
  kpi: string;
  kpiLabel: string;
  delay: number;
}

const MilestoneCard = ({ image, logo, company, role, kpi, kpiLabel, delay }: MilestoneCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] opacity-0 animate-slide-up cursor-default"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={company}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70 transition-all duration-500 group-hover:bg-background/55" />

      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 border border-primary/20 rounded-2xl shadow-[inset_0_0_80px_hsl(45_100%_60%_/_0.06)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8">
        {/* Top: Logo */}
        <div>
          <img
            src={logo}
            alt={`${company} logo`}
            className="h-10 md:h-12 w-auto object-contain rounded-lg"
          />
        </div>

        {/* Bottom: Info + KPI */}
        <div>
          {/* KPI */}
          <p className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 tracking-tight">
            {kpi}
          </p>
          <p className="text-muted-foreground text-sm md:text-base mb-4">
            {kpiLabel}
          </p>

          {/* Role & Company */}
          <div className="border-t border-border/40 pt-4">
            <p className="text-primary font-heading text-xs font-medium tracking-widest uppercase mb-1">
              {role}
            </p>
            <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
              {company}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;
