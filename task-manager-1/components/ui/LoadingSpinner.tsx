// components/ui/LoadingSpinner.tsx
type LoadingSpinnerProps = {
  small?: boolean;
  className?: string;
};

export const LoadingSpinner = ({ small = false, className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = small ? 'h-5 w-5 border-2' : 'h-8 w-8 border-[3px]';
  
  return (
    <div 
      className={`animate-spin rounded-full ${sizeClasses} border-primary-500 border-t-transparent ${className}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};