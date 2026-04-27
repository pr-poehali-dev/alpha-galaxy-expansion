export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Grass block icon */}
      <rect x="2" y="14" width="26" height="26" fill="#8B5E3C" />
      <rect x="2" y="14" width="26" height="8" fill="#5B9E3A" />
      <rect x="2" y="14" width="26" height="8" fill="url(#grass)" opacity="0.3" />

      {/* Server name text */}
      <text
        x="36"
        y="28"
        fill="white"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="16"
        letterSpacing="1"
      >
        SURVIVAL
      </text>
      <text
        x="36"
        y="38"
        fill="#5B9E3A"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="9"
        letterSpacing="3"
      >
        MINECRAFT
      </text>

      <defs>
        <linearGradient id="grass" x1="0" y1="0" x2="26" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7EC850" />
          <stop offset="100%" stopColor="#4A8C2A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
