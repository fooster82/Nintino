import { LoginButton } from ".";
import { render , screen } from "@testing-library/react";
import './style.css'



describe("LoginButton", () => {

    test("it renders LoginButton", () => {
        render(<LoginButton />);
        let loginButton = screen.getByRole("loginButton");
        expect(loginButton).toBeInTheDocument();
        expect(loginButton.textContent).toContain('Already got an account?');
    });

})