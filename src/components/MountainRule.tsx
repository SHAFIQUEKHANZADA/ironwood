/**
 * Thin hand-drawn mountain range that runs along the bottom of the header,
 * echoing the North Shore skyline. Purely decorative.
 */
export default function MountainRule({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      {/* back range — few, tall, irregular peaks so it reads as mountains
          rather than a zigzag once the viewBox is stretched to full width */}
      <path
        d="M0 48 C 40 46, 70 40, 104 26 C 118 20, 126 20, 140 30
           C 162 44, 180 46, 208 38 C 238 30, 258 14, 286 8
           C 300 6, 312 14, 330 28 C 356 46, 382 48, 414 42
           C 452 34, 486 20, 520 24 C 548 28, 566 42, 598 46
           C 640 50, 676 30, 712 18 C 728 12, 742 16, 758 30
           C 782 48, 812 50, 848 44 C 890 36, 922 16, 958 12
           C 976 10, 990 20, 1006 34 C 1030 48, 1062 50, 1096 44
           C 1136 36, 1168 34, 1200 40"
        opacity="0.5"
      />
      {/* snow-line detail on the tallest peaks */}
      <path
        d="M92 32 L104 26 L114 33 M276 14 L286 8 L296 16 M702 24 L712 18 L724 27 M948 18 L958 12 L970 21"
        opacity="0.35"
      />
      {/* front range — lower, softer foothills */}
      <path
        d="M0 56 C 44 52, 78 46, 118 50 C 152 53, 178 44, 214 46
           C 256 48, 288 40, 328 44 C 366 48, 398 52, 436 48
           C 478 43, 512 50, 552 52 C 594 54, 626 44, 668 46
           C 706 48, 736 54, 776 52 C 818 50, 848 42, 890 46
           C 930 50, 962 54, 1002 50 C 1044 46, 1078 48, 1118 52
           C 1148 55, 1174 54, 1200 52"
        opacity="0.7"
      />
    </svg>
  );
}
