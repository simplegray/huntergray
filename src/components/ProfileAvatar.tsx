import profileImage from "@/assets/profile.png";

const ProfileAvatar = () => {
  return (
    <div className="relative shrink-0">
      {/* Soft ambient gold aura */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full"
        style={{
          width: "220%",
          height: "220%",
          background: `
            radial-gradient(
              circle,
              hsl(46 100% 60% / 0.18) 0%,
              hsl(46 100% 58% / 0.12) 25%,
              hsl(46 100% 55% / 0.06) 45%,
              transparent 65%
            )
          `,
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
