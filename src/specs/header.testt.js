import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/main/Header';

describe('Header component', () => {
    it('renders with flex display on devices less than 767px', () => {
        // Mocking window innerWidth to simulate a smaller screen
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 766, // Set the width to less than 767px
        });

        // Render the Header component
        render(<Header />);

        // Find the element you want to test
        const headerElement = screen.getByTestId('header');

        // Assert that the element is displayed with flex
        expect(headerElement).toHaveStyle({ display: 'flex' });
    });

    // Reset the mocked window innerWidth after the test
    afterAll(() => {
        delete window.innerWidth;
    });
});
