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
  const base = 'inline-block rounded-full   ';
  const styles = {
    primary: base + 'text-white font-redHat-50 px-4 py-1 bg-red',
    secondary: base + 'text-black font-redHat-50 px-4 py-1 bg-rose-50',
  };

  const Variant = type ?? 'primary';

  return (
    <button
      onClick={onClick}
      className={`${styles[Variant]} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
