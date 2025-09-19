// components/ui/Input.tsx
import { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = ({ label, error, className = '', ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-red-500 dark:text-red-400">{error}+" "</span>}
    </div>
  );

};
