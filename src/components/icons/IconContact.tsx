const INTRINSIC_WIDTH = 28;
const INTRINSIC_HEIGHT = 24;

export default function IconContact({
  width = INTRINSIC_WIDTH,
  includeTitle = true,
}: {
  width?: number;
  includeTitle?: boolean;
}) {
  return (
    <svg
      width={width}
      height={(INTRINSIC_HEIGHT * width) / INTRINSIC_WIDTH}
      viewBox="0 0 28 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {includeTitle && <title>Contact</title>}
      <rect x="6" y="7" width="16" height="10" rx="1" strokeWidth="1.5" />
      <path d="M6 8l8 5l8-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
