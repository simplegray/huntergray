import FloatingOrbs from "@/components/FloatingOrbs";
import ProfileAvatar from "@/components/ProfileAvatar";
import TypewriterText from "@/components/TypewriterText";
import SocialLinks from "@/components/SocialLinks";
import Milestones from "@/components/Milestones";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <FloatingOrbs />

      {/* Content */}
      <main className="relative z-10 w-full max-w-2xl mx-auto px-6 py-12">
        <div className="glass-card p-8 md:p-12">
          {/* Hero: Avatar + Name inline */}
          <div
            className="flex items-center gap-5 md:gap-6 mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <ProfileAvatar />
            <div>
              <h1 className="text-2xl md:text-3xl">
                <TypewriterText text="I'm Hunter 👨‍💻" delay={600} />
              </h1>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-foreground/90 font-body leading-relaxed">
            <p className="opacity-0 animate-slide-up" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <span className="text-primary font-medium">Software developer, founder, and CTO at Bird</span>, leading ML-driven consumer platform and product development at global scale.
            </p>

            <p className="opacity-0 animate-slide-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              Over <span className="text-primary font-medium">15 years of experience</span> building high performing
              engineering teams and turning complex business problems into simple, scalable solutions.
            </p>
          </div>

          {/* Timeline Highlights */}
          <Milestones />

          <div className="space-y-5 text-foreground/90 font-body leading-relaxed">
            <p
              className="opacity-0 animate-slide-up text-muted-foreground"
              style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
            >
              Ultimately, I'm driven by curiosity, collaboration, and a love for elegant product design. I believe the
              right mix of data and design can change how people move, connect, and live.
            </p>

            <p
              className="opacity-0 animate-slide-up text-muted-foreground"
              style={{ animationDelay: "1.9s", animationFillMode: "forwards" }}
            >
              When I'm not working, you'll usually find me watching football ⚽, trying to teach my dog a new trick 🐶, or chasing down the perfect paella 🥘
            </p>

            <p className="opacity-0 animate-slide-up" style={{ animationDelay: "2.0s", animationFillMode: "forwards" }}>
              Feel free to say hi! 👋 <span className="text-muted-foreground">&lt;/hello&gt;</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-8 opacity-0 animate-slide-up" style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}>
            <SocialLinks />
          </div>
        </div>

        {/* Subtle footer */}
        <p
          className="text-center text-muted-foreground/50 text-sm mt-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
        >
          Built with coffee ☕ in Los Angeles, California
        </p>
      </main>
    </div>
  );
};

export default Index;
