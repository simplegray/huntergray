import { Twitter, Github, Instagram, Dribbble, Linkedin } from "lucide-react";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  const links = [
    { href: "https://twitter.com/huntergray", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { href: "https://github.com/simplegray", icon: <Github className="w-5 h-5" />, label: "GitHub" },
    { href: "https://instagram.com/simplegray", icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
    { href: "https://dribbble.com/huntergray", icon: <Dribbble className="w-5 h-5" />, label: "Dribbble" },
    { href: "https://linkedin.com/in/huntergray", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
    { 
      href: "https://azuki.com/c/hunter", 
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ), 
      label: "Azuki" 
    },
  ];

  return (
    <div className="flex items-center gap-3">
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
