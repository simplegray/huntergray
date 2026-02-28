import { Twitter, Github, Instagram, Dribbble, Linkedin, Send } from "lucide-react";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  const links = [
    { href: "mailto:hello@huntergray.com", icon: <Send className="w-5 h-5" />, label: "Email", tooltip: "say hello" },
    { href: "https://twitter.com/huntergray", icon: <Twitter className="w-5 h-5" />, label: "Twitter", tooltip: "thoughts" },
    { href: "https://linkedin.com/in/huntergray", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", tooltip: "cv" },
    { href: "https://instagram.com/simplegray", icon: <Instagram className="w-5 h-5" />, label: "Instagram", tooltip: "life" },
    { href: "https://github.com/simplegray", icon: <Github className="w-5 h-5" />, label: "GitHub", tooltip: "code" },
    { href: "https://dribbble.com/huntergray", icon: <Dribbble className="w-5 h-5" />, label: "Dribbble", tooltip: "design" },
    { 
      href: "https://azuki.com/c/hunter", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ), 
      label: "Azuki",
      tooltip: "art"
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {links.map((link, index) => (
        <div
          key={link.label}
          className="opacity-0 animate-slide-up"
          style={{ animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: 'forwards' }}
        >
          <SocialLink {...link} />
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
