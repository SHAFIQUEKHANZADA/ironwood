import type { SVGProps } from "react";

// Lightweight line-icon set (stroke-based, 24x24). Rendered white on the
// category cards and in brand colour elsewhere via `currentColor`.
const paths: Record<string, React.ReactNode> = {
  table: (
    <>
      <path d="M3 9h18" />
      <path d="M5 9v9M19 9v9M9 9v4M15 9v4" />
      <path d="M4 9l2-3h12l2 3" />
    </>
  ),
  chair: (
    <>
      <path d="M6 10V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
      <path d="M5 10h13a1 1 0 0 1 1 1v3H5z" />
      <path d="M6 14v6M18 14v6" />
    </>
  ),
  linen: (
    <>
      <path d="M4 6h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M4 6l8 5 8-5" />
      <path d="M9 18h6M12 14v4" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  tent: (
    <>
      <path d="M12 3L3 20h18z" />
      <path d="M12 3v17" />
      <path d="M12 20l4-6 4 6" />
    </>
  ),
  stage: (
    <>
      <path d="M3 8l9-4 9 4-9 4z" />
      <path d="M6 11v6M18 11v6M3 20h18" />
    </>
  ),
  light: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 1 4 10.5c-.7.6-1 1-1 2H9c0-1-.3-1.4-1-2A6 6 0 0 1 12 3z" />
    </>
  ),
  av: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
      <path d="M8 10l4 2-4 2z" fill="currentColor" stroke="none" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M7 5v14M17 5v14M3 9h4M3 15h4M17 9h4M17 15h4" />
    </>
  ),
  decor: (
    <>
      <path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-5 5-9 5-9z" />
      <path d="M9 21h6" />
    </>
  ),
  heat: (
    <>
      <path d="M12 3s3 3 3 6a3 3 0 0 1-6 0M9 9c0 2 1 3 1 3" />
      <path d="M8 21h8M10 15c-1 1-1 3 0 4M14 15c1 1 1 3 0 4" />
    </>
  ),
  bar: (
    <>
      <path d="M5 4h14l-6 7v6" />
      <path d="M9 20h8M4 8h6" />
    </>
  ),
  // service icons
  truck: (
    <>
      <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>
  ),
  wrench: (
    <>
      <path d="M15 6a3.5 3.5 0 0 0-4.6 4.3L4 16.7 7.3 20l6.4-6.4A3.5 3.5 0 0 0 18 9l-2 2-2-2 2-2a3.5 3.5 0 0 0-1-1z" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9l-4 3v-3H4z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  clapper: (
    <>
      <path d="M3 9h18v10H3z" />
      <path d="M3 9l2-4 4 1-2 4M9 6l4 1-2 4M15 7l4 1-2 4" />
    </>
  ),
  // ui icons
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-3.5-3.5" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2 12h11l2-8H6" />
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: keyof typeof paths | string;
  size?: number;
};

export default function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] ?? null}
    </svg>
  );
}
