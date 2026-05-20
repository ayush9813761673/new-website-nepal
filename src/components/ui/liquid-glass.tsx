import React from "react";

// Types
interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
}

interface DockIcon {
  src: string;
  alt: string;
  onClick?: () => void;
}

// Glass Effect Wrapper Component
const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
}) => {
  const glassStyle: React.CSSProperties = {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  const content = (
    <div
      className={`relative overflow-hidden rounded-2xl transition-transform duration-200 hover:scale-105 ${className}`}
      style={glassStyle}
    >
      {/* Glass Layers */}
      <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-xl" />
      <div className="absolute inset-0 rounded-2xl border border-white/20" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/15 to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};

// Dock Component
const GlassDock: React.FC<{ icons: DockIcon[]; href?: string }> = ({
  icons,
  href,
}) => (
  <GlassEffect className="inline-flex items-center gap-2 px-3 py-2" href={href}>
    <div className="flex items-center gap-2">
      {icons.map((icon, index) => (
        <button
          key={index}
          onClick={icon.onClick}
          className="h-10 w-10 rounded-xl transition-transform duration-200 hover:scale-125"
        >
          <img src={icon.src} alt={icon.alt} className="h-full w-full rounded-xl" />
        </button>
      ))}
    </div>
  </GlassEffect>
);

// Button Component
const GlassButton: React.FC<{ children: React.ReactNode; href?: string }> = ({
  children,
  href,
}) => (
  <GlassEffect className="inline-flex cursor-pointer items-center px-6 py-3" href={href}>
    <span className="text-sm font-medium text-white">
      {children}
    </span>
  </GlassEffect>
);

// SVG Filter Component
const GlassFilter: React.FC = () => (
  <svg className="hidden">
    <defs>
      <filter id="glass-filter">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          result="goo"
        />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
);

// Main Component
export const Component = () => {
  const dockIcons: DockIcon[] = [
    {
      src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a13d1acfd046f503f987c1c95af582c8_low_res_Claude.png",
      alt: "Claude",
    },
    {
      src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9e80c50a5802d3b0a7ec66f3fe4ce348_low_res_Finder.png",
      alt: "Finder",
    },
    {
      src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c2c4a538c2d42a8dc0927d7d6530d125_low_res_ChatGPT___Liquid_Glass__Default_.png",
      alt: "Chatgpt",
    },
    {
      src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/6d26d432bd65c522b0708185c0768ec3_low_res_Maps.png",
      alt: "Maps",
    },
    {
      src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/7c59c945731aecf4f91eb8c2c5f867ce_low_res_Safari.png",
      alt: "Safari",
    },
    {
      src: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b7f24edc7183f63dbe34c1943bef2967_low_res_Steam___Liquid_Glass__Default_.png",
      alt: "Steam",
    },
  ];

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920')",
        animation: "moveBackground 120s linear infinite",
      }}
    >
      <GlassFilter />

      <div className="flex flex-col items-center gap-8">
        <GlassEffect className="px-8 py-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-semibold text-white">
              How can I help you today?
            </p>
          </div>
        </GlassEffect>

        <GlassDock icons={dockIcons} />
      </div>
    </div>
  );
};

export { GlassEffect, GlassDock, GlassButton, GlassFilter };
