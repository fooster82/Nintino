import { BoardSquare } from ".";
import { render , screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import './style.css'



describe("BoardSquare", () => {

    test("it renders BoardSquare", () => {
        const clicked = jest.fn();
        render(<BoardSquare />) //id={'12'} checkPiece={check}/>);
        // let btn = screen.getByTestId("12");
        // userEvent.click(btn)
        // expect(btn).toHaveBeenCalledTimes(1);
        expect(clicked).toBeInTheDocument();
    });

})