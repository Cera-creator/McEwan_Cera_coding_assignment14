import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p<{ backgroundColor?: string; disabled?: boolean }>`
  margin: 0;
  padding: 10px;
  background-color: ${({ backgroundColor, disabled }) =>
    disabled ? '#ccc' : backgroundColor || 'transparent'};
  color: ${({ disabled }) => (disabled ? '#666' : '#333')};
  font-size: 16px;
  line-height: 1.5;
  border-radius: 4px;
  transition: all 0.3s ease;
`;

export interface TextProps {
  content: string;
  disabled?: boolean;
  backgroundColor?: string;
}

export const Text: React.FC<TextProps> = ({
  content,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledText backgroundColor={backgroundColor} disabled={disabled}>
      {content}
    </StyledText>
  );
};
