import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the header with name and title', () => {
    render(<Header />);

    expect(screen.getByText('Cera McEwan')).toBeInTheDocument();
    expect(screen.getByText('Component Library Portfolio')).toBeInTheDocument();
  });

  it('has the correct header structure', () => {
    render(<Header />);

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header.tagName).toBe('HEADER');
  });
});
