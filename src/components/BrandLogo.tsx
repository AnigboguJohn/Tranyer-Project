const BrandLogo = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <div className={`inline-flex items-center justify-center rounded-xl bg-primary ${className}`}>
    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
      <circle cx="50" cy="50" r="45" fill="#1E5936" />
      <path d="M50 12a38 38 0 0 1 0 76" stroke="#F6D941" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M30 40c10 10 18 18 20 30" stroke="#F6D941" strokeWidth="10" fill="none" strokeLinecap="round" />
    </svg>
  </div>
);

export default BrandLogo;
