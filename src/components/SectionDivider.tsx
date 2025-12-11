interface SectionDividerProps {
  variant?: 'wave' | 'angle' | 'gradient';
  flip?: boolean;
}

export const SectionDivider = ({ variant = 'wave', flip = false }: SectionDividerProps) => {
  if (variant === 'angle') {
    return (
      <div className={`w-full h-16 md:h-24 relative ${flip ? 'rotate-180' : ''}`}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L1440 120V0H0Z"
            fill="hsl(var(--muted) / 0.3)"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className="w-full h-32 md:h-48 bg-gradient-to-b from-muted/30 to-transparent" />
    );
  }

  // Wave variant (default)
  return (
    <div className={`w-full h-20 md:h-32 relative ${flip ? 'rotate-180' : ''}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0C240 53.3 480 80 720 80C960 80 1200 53.3 1440 0V120H0V0Z"
          fill="hsl(var(--muted) / 0.15)"
        />
      </svg>
    </div>
  );
};
