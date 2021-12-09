import { CheckerGame  } from ".";
import { render , screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import './style.css'





describe("CheckerGame", () => {

    test("it renders CheckerGame div", () => {
        render(<CheckerGame />);
        let div = screen.getByRole("div");
        expect(div).toBeInTheDocument();
    });

    test("it renders CheckerGame", () => {
        render(<CheckerGame />);
        let gameBoard = screen.getByRole("gameBoard");
        expect(gameBoard).toBeInTheDocument();
    });

    test("it renders home button", () => {
        render(<CheckerGame />);
        let homeButton = screen.getByRole("homeButton");
        expect(homeButton).toBeInTheDocument();
        expect(homeButton.textContent).toContain('Return Home')
    });

    test("it renders playerInfo", () => {
        render(<CheckerGame />);
        let playerInfo = screen.getByRole("playerInfo");
        expect(playerInfo).toBeInTheDocument();
        expect(playerInfo.textContent).toContain('Red')
        expect(playerInfo.textContent).toContain('Blue')
    });

    test("it renders forfeit button", () => {
        render(<CheckerGame />);
        let forfeit = screen.getByRole("forfeit");
        expect(forfeit).toBeInTheDocument();
    });

    test("it renders players turn", () => {
        render(<CheckerGame />);
        let turn = screen.getByRole("turn");
        expect(turn).toBeInTheDocument();
    });
    

    test("it selects a board square", () => {
        render(<CheckerGame />);
        let red=CheckerGame.Red
        console.log(`red : ${red}`);
        
        let square = screen.getByTestId("62");
        expect(square).toBeInTheDocument();
        userEvent.click(square)
                
        expect(square).toHaveBeenCalledTimes(1)
    });
    


    
 
    

})