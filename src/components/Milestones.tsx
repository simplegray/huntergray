import MilestoneCard from "./MilestoneCard";
import milestoneBird from "@/assets/milestone-bird.jpg";
import milestoneStubhub from "@/assets/milestone-stubhub.jpg";
import milestoneKlutch from "@/assets/milestone-klutch.jpg";
import milestoneEducation from "@/assets/milestone-education.jpg";
import logoBird from "@/assets/logo-bird.png";
import logoStubhub from "@/assets/logo-stubhub.png";
import logoKlutch from "@/assets/logo-klutch.png";
import logoYale from "@/assets/logo-yale.png";

const milestones = [
  {
    image: milestoneBird,
    logo: logoBird,
    company: "Bird",
    role: "Chief Technology Officer",
    kpi: "200M+",
    kpiLabel: "Rides delivered, driving Bird's first profitable quarter",
  },
  {
    image: milestoneStubhub,
    logo: logoStubhub,
    company: "StubHub",
    role: "Product & Strategy",
    kpi: "$4B+",
    kpiLabel: "Annual GMV marketplace powering the world's largest live-event platform",
  },
  {
    image: milestoneKlutch,
    logo: logoKlutch,
    company: "Klutch",
    role: "Founder",
    kpi: "Acquired",
    kpiLabel: "Built from zero to exit — social scheduling platform acquired by eBay",
  },
  {
    image: milestoneEducation,
    logo: logoYale,
    company: "Yale & Harvard",
    role: "Education",
    kpi: "Ivy League",
    kpiLabel: "Yale University · Harvard Business School — Management & Analytics",
  },
];

const Milestones = () => {
  return (
    <section className="mt-16">
      <h2
        className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-8 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
      >
        Milestones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {milestones.map((m, i) => (
          <MilestoneCard key={m.company} {...m} delay={1.3 + i * 0.15} />
        ))}
      </div>
    </section>
  );
};

export default Milestones;
