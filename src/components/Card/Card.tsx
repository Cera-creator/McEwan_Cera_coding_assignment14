import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || '#fff'};
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: all 0.3s ease;

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0 4px 8px rgba(0, 0, 0, 0.15)'};
  }
`;

const StyledTitle = styled.h3`
  margin: 0 0 15px 0;
  color: #333;
  font-size: 18px;
  font-weight: 600;
`;

const StyledContent = styled.div`
  margin-bottom: 15px;
  color: #666;
  line-height: 1.5;
`;

const StyledFooter = styled.div`
  border-top: 1px solid #eee;
  padding-top: 15px;
  margin-top: 15px;
`;

export interface CardProps {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  footer,
  disabled = false,
  backgroundColor,
  onClick,
}) => {
  return (
    <StyledCard
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
      data-testid="card"
    >
      <StyledTitle>{title}</StyledTitle>
      <StyledContent>{content}</StyledContent>
      {footer && <StyledFooter>{footer}</StyledFooter>}
    </StyledCard>
  );
};
