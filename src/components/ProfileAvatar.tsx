import profileImage from "@/assets/profile.png";

const ProfileAvatar = () => {
  return (
    <div className="relative shrink-0">
      <div
        className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden"
        style={{
          boxShadow: `
            0 0 12px rgba(255, 200, 40, 0.35),
            0 0 28px rgba(255, 200, 40, 0.18),
            0 0 60px rgba(255, 200, 40, 0.08)
          `,
        }}
      >
        <img src={profileImage} alt="Hunter Gray" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
