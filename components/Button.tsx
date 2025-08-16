import React from 'react';
import { LoaderCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  icon?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  icon: Icon,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed px-5 py-2.5 text-sm';

  const variantStyles = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 focus:ring-teal-500 shadow-lg shadow-teal-500/20',
    secondary: 'bg-slate-700 text-slate-100 hover:bg-slate-600 focus:ring-slate-500',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <LoaderCircle className="animate-spin -ml-1 mr-3 h-5 w-5" />
          درحال پردازش...
        </>
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5 ml-2" />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
