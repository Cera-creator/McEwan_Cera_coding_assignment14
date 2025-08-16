import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#007bff'};
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.2)'};
  }
`;

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  backgroundColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {label}
    </StyledButton>
  );
};
