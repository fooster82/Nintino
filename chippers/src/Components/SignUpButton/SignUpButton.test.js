import { SignUpButton } from ".";
import { render , screen } from "@testing-library/react";
import './style.css'



describe("SignUpButton", () => {

    test("it renders SignUpButton", () => {
        render(<SignUpButton />);
        let signUpButton = screen.getByRole("signUpButton");
        expect(signUpButton).toBeInTheDocument();
        expect(signUpButton.textContent).toContain('Sign Up!');
    });

})