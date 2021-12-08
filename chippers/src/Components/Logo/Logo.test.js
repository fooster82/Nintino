import { Logo } from ".";
import { render , screen } from "@testing-library/react";
import './style.css'



describe("Logo", () => {

    test("it renders Logo", () => {
        render(<Logo />);
        let logo = screen.getByRole("logo");
        expect(logo).toBeInTheDocument();
    });

})