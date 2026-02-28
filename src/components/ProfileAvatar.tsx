import profileImage from "@/assets/profile.png";

const ProfileAvatar = () => {
  return (
    <div className="relative shrink-0">
      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "140%",
          height: "140%",
          background: `
            radial-gradient(
              circle at center,
              hsl(46 100% 60% / 0.9) 0%,
              hsl(46 100% 58% / 0.6) 35%,
              hsl(46 100% 55% / 0.25) 55%,
              transparent 70%
            )
          `,
          borderRadius: "50%",
          filter: "blur(10px)",
        }}
      />

      {/* Avatar */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
        <img src={profileImage} alt="Hunter Gray" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
