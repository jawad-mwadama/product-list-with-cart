import React, { type ReactNode } from 'react';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'secondary';
  disabled?: boolean;

  //   children prop
  children: ReactNode;
}

function Button({ onClick, type, disabled = false, children }: ButtonProps) {
  const base = 'inline-block rounded-full   ';
  const styles = {
    primary: base + 'text-white font-redHat-50 px-4 py-1 bg-red',
    secondary: base,
  };

  return (
    <button
      onClick={onClick}
      className={styles[type || 'primary']}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
