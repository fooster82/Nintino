import { BluePiece } from ".";
import { render , screen } from "@testing-library/react";
import './style.css'



describe("BluePiece", () => {

    test("it renders BluePiece", () => {
        render(<BluePiece />);
        let bluePiece = screen.getByRole("bluePiece");
        expect(bluePiece).toBeInTheDocument();
    });

})