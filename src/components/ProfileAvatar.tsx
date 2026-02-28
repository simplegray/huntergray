import profileImage from "@/assets/profile.png";

const ProfileAvatar = () => {
  return (
    <div className="relative shrink-0 overflow-visible">
      {/* Glow layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-28 h-28 md:w-32 md:h-32 rounded-full"
          style={{
            background: `
              radial-gradient(
                circle,
                hsl(46 100% 60% / 1) 0%,
                hsl(46 100% 58% / 0.7) 30%,
                hsl(46 100% 55% / 0.35) 55%,
                transparent 75%
              )
            `,
            filter: "blur(16px)",
          }}
        />
      </div>

      {/* Avatar */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
        <img src={profileImage} alt="Hunter Gray" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
