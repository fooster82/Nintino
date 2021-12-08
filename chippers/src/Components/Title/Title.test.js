import { Title } from ".";
import { render , screen } from "@testing-library/react";
import './style.css'



describe("Title", () => {

    test("it renders Title", () => {
        render(<Title />);
        let title = screen.getByRole("title");
        expect(title).toBeInTheDocument();
    });

})