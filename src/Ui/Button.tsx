import React, { type ReactNode } from 'react';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;

  //   children prop
  children: ReactNode;
}

function Button({
  onClick,
  type,
  disabled = false,
  children,
  className = '',
}: ButtonProps) {
  const base = 'rounded-full ';
  const styles = {
    primary:
      base +
      'text-white font-redHat-50 px-7 py-1.5 bg-red cursor-pointer font-medium transition-colors hover:bg-red/85',
    secondary: base + 'text-black font-redHat-50 px-7 py-1.5 bg-rose-50 ',
  };

  const Variant = type ?? 'primary';

  return (
    <button
      onClick={onClick}
      // className={`${styles[Variant]} ${className}`}
      className={`${styles[Variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
