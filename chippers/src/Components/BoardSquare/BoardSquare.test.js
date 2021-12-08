import { BoardSquare } from ".";
import { render , screen } from "@testing-library/react";
import './style.css'



describe("BoardSquare", () => {

    test("it renders BoardSquare", () => {
        render(<BoardSquare />);
        let boardSquare = screen.getByRole("boardSquare");
        expect(boardSquare).toBeInTheDocument();
    });

})