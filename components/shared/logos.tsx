import type { LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

/**
 * Brand logos for the community section, rendered as self-contained "app-icon"
 * tiles (each fills a rounded, clipped badge — see community.tsx). Cast to
 * `LucideIcon` so they slot into the existing icon-typed data structures.
 *
 * Microsoft and Google use their canonical multi-color marks. Amazon uses the
 * dark tile + orange "a" smile. DevLoom has no public SVG, so it's a branded
 * monogram — TODO: swap for their official logo when available.
 */

type IconProps = SVGProps<SVGSVGElement>;

/** Amazon — dark tile with the orange "a" smile. */
export const AwsLogo = ((props: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
    <rect width="24" height="24" fill="#232F3E" />
    <text
      x="12"
      y="15.5"
      textAnchor="middle"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="14"
      fontWeight="700"
      fill="#fff"
    >
      a
    </text>
    <path
      d="M6 16.4c3.6 2.3 8.4 2.3 12 0"
      stroke="#FF9900"
      strokeWidth="1.7"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M16.2 15.1l2.3.9-.7 2.3"
      stroke="#FF9900"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)) as unknown as LucideIcon;

/** Microsoft — four-square logo on a white tile. */
export const MicrosoftLogo = ((props: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
    <rect width="24" height="24" fill="#fff" />
    <rect x="5" y="5" width="6.4" height="6.4" fill="#F25022" />
    <rect x="12.6" y="5" width="6.4" height="6.4" fill="#7FBA00" />
    <rect x="5" y="12.6" width="6.4" height="6.4" fill="#00A4EF" />
    <rect x="12.6" y="12.6" width="6.4" height="6.4" fill="#FFB900" />
  </svg>
)) as unknown as LucideIcon;

/** Google Developer Groups — Google's four-color "G" on a white tile. */
export const GoogleLogo = ((props: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
    <rect width="24" height="24" fill="#fff" />
    <g transform="translate(4.5 4.5) scale(0.625)">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
        fill="#EA4335"
      />
    </g>
  </svg>
)) as unknown as LucideIcon;

/** DevLoom — purple hexagon mark. */
export const DevloomLogo = ((props: IconProps) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
    <defs>
      <linearGradient id="devloom-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7C3AED" />
        <stop offset="1" stopColor="#C084FC" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" fill="url(#devloom-grad)" />
    {/* Outer hexagon */}
    <path
      d="M12 4.6l6.4 3.7v7.4L12 19.4l-6.4-3.7V8.3z"
      fill="none"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinejoin="round"
      opacity="0.9"
    />
    {/* Inner hexagon */}
    <path
      d="M12 9l3.1 1.8v3.4L12 16l-3.1-1.8v-3.4z"
      fill="#fff"
      opacity="0.95"
    />
  </svg>
)) as unknown as LucideIcon;
