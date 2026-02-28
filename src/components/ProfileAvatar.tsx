import profileImage from "@/assets/profile.png";

const ProfileAvatar = () => {
  return (
    <div className="relative shrink-0">
      <div className="absolute -inset-1 rounded-full opacity-50" style={{ background: 'radial-gradient(circle, hsl(45 100% 60% / 0.4), hsl(200 80% 60% / 0.2), transparent)', filter: 'blur(12px)' }} />
      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-primary/30" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)', willChange: 'transform' }}>
        <img
          src={profileImage}
          alt="Hunter Gray"
          className="w-full h-full object-cover object-center"
          style={{ WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
        />
      </div>
    </div>
  );
};

export default ProfileAvatar;
