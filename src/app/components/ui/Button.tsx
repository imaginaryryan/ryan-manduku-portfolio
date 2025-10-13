// components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  download?: boolean | string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className = '', href, download, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600",
      secondary: "bg-neutral-200 hover:bg-neutral-300 text-neutral-900 focus:ring-neutral-500 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-white dark:focus:ring-neutral-400",
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950",
      ghost: "text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-500 dark:text-neutral-100 dark:hover:bg-neutral-800"
    };
    
    const sizes = {
      sm: "px-3 py-1.5 text-sm rounded-md",
      md: "px-6 py-3 text-base rounded-lg",
      lg: "px-8 py-4 text-lg rounded-xl"
    };
    
    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
    
    // If href is provided, render as an anchor tag
    if (href) {
      return (
        <a 
          href={href} 
          className={classes}
          download={download}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }
    
    // Otherwise render as button
    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };