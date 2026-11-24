import { pkConfig } from "@/lib/parikrama/config";
import { cn } from "@/lib/utils";

type IconProps = { className?: string };

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export const pkSocialIcons = { youtube: YouTubeIcon, facebook: FacebookIcon, x: XIcon };

export const pkSocialLinks = [
  { key: "youtube" as const, href: pkConfig.social.youtube, label: "YouTube" },
  { key: "facebook" as const, href: pkConfig.social.facebook, label: "Facebook" },
  { key: "x" as const, href: pkConfig.social.x, label: "X (Twitter)" },
];

export function PkSocialLinks({
  className,
  iconClassName = "h-4 w-4",
  onDark = true,
}: {
  className?: string;
  iconClassName?: string;
  onDark?: boolean;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {pkSocialLinks.map(({ key, href, label }) => {
        const Icon = pkSocialIcons[key];
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "transition-colors duration-300 hover:text-copper",
              onDark ? "text-white/80" : "text-stone-parikrama hover:text-copper",
            )}
          >
            <Icon className={iconClassName} />
          </a>
        );
      })}
    </div>
  );
}
