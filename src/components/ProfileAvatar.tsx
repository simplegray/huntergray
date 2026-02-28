import profileImage from "@/assets/profile.png";

const ProfileAvatar = () => {
  return (
    <div className="relative shrink-0">
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-visible">
        <img
          src={profileImage}
          alt="Hunter Gray"
          className="w-full h-full object-cover rounded-full"
          style={{
            filter: `
              drop-shadow(0 0 6px hsl(46 100% 60% / 0.9))
              drop-shadow(0 0 14px hsl(46 100% 58% / 0.7))
              drop-shadow(0 0 28px hsl(46 100% 55% / 0.45))
              drop-shadow(0 0 48px hsl(46 100% 50% / 0.25))
            `,
          }}
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
