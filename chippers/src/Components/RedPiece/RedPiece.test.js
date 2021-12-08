import { RedPiece } from ".";
import { render , screen } from "@testing-library/react";
import './style.css'



describe("RedPiece", () => {

    test("it renders RedPiece", () => {
        render(<RedPiece />);
        let redPiece = screen.getByRole("redPiece");
        expect(redPiece).toBeInTheDocument();
    });

})