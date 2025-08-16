import React from 'react';

interface PortfolioCardProps {
  title: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  content,
  footer,
}) => {
  return (
    <div className="portfolio-card">
      <h3 className="card-title">{title}</h3>
      <div className="card-content">{content}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default PortfolioCard;
