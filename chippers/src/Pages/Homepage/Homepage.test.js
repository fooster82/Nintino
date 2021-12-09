import { Homepage } from '.';
import { screen , render } from '@testing-library/react';


describe('Homepage', () => {

    test('it renders Homepage', () => {
        render(<Homepage />)
        const homepage = screen.getByRole('homepage')
        expect(homepage).toBeInTheDocument()

    });

    test('it renders Homepage container', () => {
        render(<Homepage />)
        const container = screen.getByRole('container')
        expect(container).toBeInTheDocument()

    });

    test('it renders Homepage comingsoon', () => {
        render(<Homepage />)
        const comingsoon = screen.getByRole('comingsoon')
        expect(comingsoon).toBeInTheDocument()

    });

    test('it renders Homepage title', () => {
        render(<Homepage />)
        const title = screen.getByRole('title')
        expect(title).toBeInTheDocument()

    });

    test('it renders Homepage text', () => {
        render(<Homepage />)
        const text = screen.getByRole('text')
        expect(text).toBeInTheDocument()

    });

    test('it renders Homepage info', () => {
        render(<Homepage />)
        const info = screen.getByRole('info')
        expect(info).toBeInTheDocument()

    });

    test('it renders Homepage checker info', () => {
        render(<Homepage />)
        const checker_info = screen.getByRole('checker-info')
        expect(checker_info).toBeInTheDocument()

    });

    test('it renders Homepage checker form', () => {
        render(<Homepage />)
        const form = screen.getByRole('form')
        expect(form).toBeInTheDocument()

    });

    test('it renders Homepage checker gameID', () => {
        render(<Homepage />)
        const gameID = screen.getByRole('gameID')
        expect(gameID).toBeInTheDocument()

    });

    test('it renders Homepage checker message', () => {
        render(<Homepage />)
        const message = screen.getByRole('message')
        expect(message).toBeInTheDocument()

    });

    
    
});