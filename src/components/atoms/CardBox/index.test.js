import { render, screen, fireEvent } from '@testing-library/react';
import Card from './index';
import { mockPropsData } from "../../../__mocks__/CardMockData";

const mockedHandleClickEvent = jest.fn();


describe("Card", () => {
    it('should render same name passed into props', () => {
        render(
            <Card
                compData={mockPropsData}
            />
        );
        const name = screen.queryAllByText(/charizard/i);
        expect(name.length).toBe(1);
    });
    
    it('should not rendered component if no data passed to compData props', () => {
        render(
            <Card
                compData={''} 
            />
        );
        const name = screen.queryAllByText(/charizard/i);
        expect(name.length).toBe(0);
    });

    it('should be able to click card', () => {
        render(
            <Card
                compData={mockPropsData}
                handleClickEvent={mockedHandleClickEvent}
            />
        );
      
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement)
        expect(mockedHandleClickEvent).toBeCalled()
    });
})