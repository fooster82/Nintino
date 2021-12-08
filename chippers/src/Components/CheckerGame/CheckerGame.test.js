import { CheckerGame } from ".";
import { render , screen } from "@testing-library/react";
import './style.css'



describe("CheckerGame", () => {

    test("it renders CheckerGame", () => {
        render(<CheckerGame />);
        let gameBoard = screen.getByRole("gameBoard");
        expect(gameBoard).toBeInTheDocument();
    });

    test("it renders home button", () => {
        render(<CheckerGame />);
        let homeButton = screen.getByRole("homeButton");
        expect(homeButton).toBeInTheDocument();
    });

    test("it renders playerInfo", () => {
        render(<CheckerGame />);
        let playerInfo = screen.getByRole("playerInfo");
        expect(playerInfo).toBeInTheDocument();
    });

    test("it renders forfeit button", () => {
        render(<CheckerGame />);
        let forfeit = screen.getByRole("forfeit");
        expect(forfeit).toBeInTheDocument();
    });
    


    
 
    

})