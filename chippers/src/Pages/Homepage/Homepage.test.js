import { Homepage } from '.';
import { screen , render } from '@testing-library/react';


describe('Homepage', () => {

    test('it renders Homepage', () => {
        render(<Homepage />)
        const homepage = screen.getByRole('homepage')
        expect(homepage).toBeInTheDocument()

    });
});