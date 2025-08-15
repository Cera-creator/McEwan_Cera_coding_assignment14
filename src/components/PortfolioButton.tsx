import React from 'react'

interface PortfolioButtonProps {
  label: string
  onClick?: () => void
  disabled?: boolean
  backgroundColor?: string
}

const PortfolioButton: React.FC<PortfolioButtonProps> = ({
  label,
  onClick,
  disabled = false,
  backgroundColor = '#2563eb'
}) => {
  return (
    <button
      className="portfolio-button"
      onClick={onClick}
      disabled={disabled}
      style={{ 
        backgroundColor: disabled ? '#ccc' : backgroundColor,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer'
      }}
    >
      {label}
    </button>
  )
}

export default PortfolioButton
