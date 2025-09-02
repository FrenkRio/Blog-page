import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        primary: 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-900',
        secondary: 'bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-800',
        cta: 'bg-white text-gray-900 text-lg px-8 py-4 hover:bg-gray-200 transform hover:-translate-y-0.5 focus:ring-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
  href: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant, href, children, icon, ...props }, ref) => {
    
  
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      
      e.stopPropagation();
     
      if (props.onClick) {
        props.onClick(e);
      }
    };
    
    return (
      <a
        href={href}
        className={buttonVariants({ variant, className })}
        ref={ref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick} 
        {...props}
      >
        {icon}
        {children}
      </a>
    );
  }
);

export default Button;