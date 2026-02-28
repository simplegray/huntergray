import profileImage from "@/assets/profile.png";

const ProfileAvatar = () => {
  return (
    <div className="relative shrink-0">
      {/* Glow */}
      <div
        className="absolute -inset-4 rounded-full"
        style={{
          background: `
            radial-gradient(
              circle,
              hsl(45 100% 60% / 0.8) 0%,
              hsl(45 100% 60% / 0.5) 30%,
              hsl(200 80% 60% / 0.35) 50%,
              transparent 70%
            )
          `,
          filter: "blur(12px)",
          opacity: 0.95,
          pointerEvents: "none",
        }}
      />

      {/* Avatar (no border outline) */}
      <div
        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden"
        style={{
          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          willChange: "transform",
        }}
      >
        <img
          src={profileImage}
          alt="Hunter Gray"
          className="w-full h-full object-cover object-center"
          style={{
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
