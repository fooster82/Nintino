import React from "react";
import {  Header } from '.';
import { render, screen } from '@testing-library/react';


describe('Header', () => { 
    
    beforeEach(() => {
        render(<Header />)
    })

    test('it renders header', () => {
        const header = screen.getByRole('header')
        expect(header.textContent).toContain('Logout')
        expect(header.textContent).toContain('Home')
    });

    test('it renders menu', () => {
        const menu = screen.getByRole('menu')
        expect(menu).toBeInTheDocument();
    });

    
})