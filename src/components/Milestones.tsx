import MilestoneCard from "./MilestoneCard";
import milestoneBird from "@/assets/milestone-bird.jpg";
import milestoneKlutch from "@/assets/milestone-klutch.jpg";
import milestoneStubhub from "@/assets/milestone-stubhub.jpg";
import milestoneEducation from "@/assets/milestone-education.jpg";

const milestones = [
  {
    image: milestoneBird,
    company: "Bird",
    role: "Chief Technology Officer",
    impact: "Led product, data & engineering to 200M+ rides and Bird's first profitable quarter.",
  },
  {
    image: milestoneKlutch,
    company: "Klutch",
    role: "Founder",
    impact: "Built a social scheduling platform from zero to acquisition by eBay.",
  },
  {
    image: milestoneStubhub,
    company: "StubHub",
    role: "Product & Strategy",
    impact: "Scaled marketplace experiences for the world's largest live-event ticketing platform.",
  },
  {
    image: milestoneEducation,
    company: "Yale & Harvard",
    role: "Education",
    impact: "Yale University and Harvard Business School — management, analytics & innovation.",
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
