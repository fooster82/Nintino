import { Lobby } from '.';
import { screen , render } from '@testing-library/react';
import { username , roomName } from './index'
const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

const playersData = {
    username: "user1",
    roomName: "room1"
}


describe('Lobby', () => {

    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());



    test('it renders Lobby', async() => {
        render(<Lobby />)
        Lobby.username = "user1";
        Lobby.roomName = "room1";
        expect(username).toBe("user1");
        // expect(allowThrough({ value: 1 })).toBe(true);
        // jest.spyOn(Lobby, 'username', 'roomName')
        //     .mockResolvedValue(['user1', 'room1']);
        // await leaderController.index(null, mockRes);
        // expect(mockStatus).toHaveBeenCalledWith(200);
        // expect(mockJson).toHaveBeenCalledWith(['user1', 'room1']);

    });
});