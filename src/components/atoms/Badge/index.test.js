import { render, screen } from '@testing-library/react';
import Badge from './index';

describe("Badge", () => {
    it('should render same text passed into props', () => {
        render(<Badge title="Poison" />);
        const elements = screen.getAllByText(/Poison/i);
        expect(elements.length).toBe(1);
    });
    
    it('should have class as badge', () => {
        render(<Badge title="Poison" />);
        const elements = screen.getAllByText(/Poison/i);
        expect(elements[0]).toHaveClass('badge');
    });
})