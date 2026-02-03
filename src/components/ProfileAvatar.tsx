import profileImage from "@/assets/profile.jpg";

const ProfileAvatar = () => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/30">
        <img
          src={profileImage}
          alt="Hunter Gray"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
