import React from 'react';

interface PortfolioButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const PortfolioButton: React.FC<PortfolioButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`portfolio-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default PortfolioButton;
