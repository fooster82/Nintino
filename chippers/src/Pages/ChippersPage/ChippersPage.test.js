import { ChippersPage } from '.';
import { screen , render } from '@testing-library/react';


describe('ChippersPage', () => {

    test('it renders ChippersPage', () => {
        render(<ChippersPage />)
        const chippersPage = screen.getByRole('chippersPage')
        expect(chippersPage).toBeInTheDocument()

    });
});