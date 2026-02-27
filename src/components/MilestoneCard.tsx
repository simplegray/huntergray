interface MilestoneCardProps {
  image: string;
  company: string;
  role: string;
  impact: string;
  delay: number;
}

const MilestoneCard = ({ image, company, role, impact, delay }: MilestoneCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl aspect-[3/2] opacity-0 animate-slide-up cursor-default"
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
    >
      {/* Background image */}
      <img
        src={image}
        alt={company}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/60 transition-all duration-500 group-hover:bg-background/40" />

      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 border border-primary/20 rounded-2xl shadow-[inset_0_0_60px_hsl(45_100%_60%_/_0.05)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
        <p className="text-primary font-heading text-sm font-medium tracking-widest uppercase mb-2">
          {role}
        </p>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
          {company}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base max-w-[90%] leading-relaxed">
          {impact}
        </p>
      </div>
    </div>
  );
};

export default MilestoneCard;
