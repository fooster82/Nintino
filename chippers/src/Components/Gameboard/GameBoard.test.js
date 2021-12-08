import { Gameboard } from ".";
import { render , screen } from "@testing-library/react";
import './style.css'
import axios from 'axios';

jest.mock('axios');
const data = {
    Red: ['11','31','51','71','22','42','62','82','13','33','53','73'],
    Blue: ['26','46','66','86','17','37','57','77','28','48','68','88']
}



describe("Gameboard", () => {

    test("it renders Gameboard", async() => {
        render(<Gameboard />);
        axios.get.mockResolvedValue({ ...data })
        let gameBoard = screen.getByRole("gameBoard");
        await waitFor(() => {
            expect(gameBoard).toBeInTheDocument();
        })
       
    });

})