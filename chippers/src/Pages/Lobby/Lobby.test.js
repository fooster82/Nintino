import { Lobby } from '.';
import { screen , render } from '@testing-library/react';
import axios from 'axios';

jest.mock('axios');

const playersData = {
    username: "user1",
    roomName: "room1"
}


describe('Lobby', () => {

    test('it renders Lobby', () => {
        render(<Lobby />)
        axios.get.mockResolvedValue({ ...playersData })
        const lobby = screen.getByRole('lobby')
        expect(lobby).toBeInTheDocument()

    });
});