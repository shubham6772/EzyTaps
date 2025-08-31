import "./JumpingDotsSVG.scss";

const JumpingDotsSVG = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 60 40"   // taller box for bounce space
      width="60" 
      height="40" 
      style={{ display: "block", overflow: "visible" }} // prevents clipping
    >
      <circle className="bounce-animation-1" cx="10" cy="20" r="5" fill="var(--main-theme-clr)" />
      <circle className="bounce-animation-2" cx="30" cy="20" r="5" fill="var(--main-theme-clr)" />
      <circle className="bounce-animation-3" cx="50" cy="20" r="5" fill="var(--main-theme-clr)" />
    </svg>
  );
};

export default JumpingDotsSVG;
