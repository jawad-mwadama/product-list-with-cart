import React, { type ReactNode } from 'react';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;

  //   children prop
  children: ReactNode;
}

function Button({ onClick, variant, disabled = false, children }: ButtonProps) {
  const baseStyle = 'rounded-full bg-red px-4 py-1 text-white font-redHat-50';
  const styles =
    variant === 'primary'
      ? `${baseStyle} `
      : `${baseStyle} bg-gray-200 text-gray-800`;
  return (
    <button onClick={onClick} className={styles} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
