import profileImage from "@/assets/profile.png";

const ProfileAvatar = () => {
  return (
    <div className="relative shrink-0 w-20 h-20 md:w-24 md:h-24">
      {/* Visible gold halo */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          transform: "scale(1.25)",
          background: `
            radial-gradient(
              circle,
              transparent 60%,
              hsl(46 100% 60% / 0.45) 68%,
              hsl(46 100% 58% / 0.28) 76%,
              hsl(46 100% 55% / 0.12) 84%,
              transparent 92%
            )
          `,
        }}
      />

      {/* Avatar */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <img src={profileImage} alt="Hunter Gray" className="w-full h-full object-cover rounded-full" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
