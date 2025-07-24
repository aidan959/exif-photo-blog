const INTRINSIC_WIDTH = 24;
const INTRINSIC_HEIGHT = 24;

export default function IconMusic({
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
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      {includeTitle && <title>Music</title>}
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
