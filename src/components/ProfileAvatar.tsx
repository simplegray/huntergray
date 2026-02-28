import profileImage from "@/assets/profile.png";

const ProfileAvatar = () => {
  return (
    <div className="relative shrink-0">
      {/* Warm gold glow matching site */}
      <div
        className="absolute -inset-5 rounded-full"
        style={{
          background: `
            radial-gradient(
              circle,
              hsl(46 100% 60% / 0.95) 0%,
              hsl(46 100% 58% / 0.75) 22%,
              hsl(46 100% 55% / 0.45) 40%,
              hsl(46 100% 50% / 0.20) 55%,
              transparent 70%
            )
          `,
          filter: "blur(14px)",
          opacity: 1,
          pointerEvents: "none",
        }}
      />

      {/* Avatar */}
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
          className="w-full h-full object-cover"
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
