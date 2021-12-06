import React from 'react';
import './style.css';

import { BoardSquare } from '../../../../src/Components';
import lightSquare from './assets/light-square.png';
import darkSquare from './assets/dark-square.png';

let cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
let coordinates = [[], [], [], [], [], [], [], []];

for(let c=0; c < cols.length; c++) {
    for(let r=0; r < rows.length; r++) {
        coordinates[r][c] = cols[c] + rows[r]
    }
};  

export function Gameboard() {
    const renderPieces = i => {
        if(i % 2 ==0) {
            return coordinates[i].map((c) => { 
                if(c[0] == 'b' || c[0] == 'd' || c[0] == 'f' || c[0] == 'h') {
                    return <BoardSquare id={c} imageSource={lightSquare} />
                } else {
                    return <BoardSquare id={c} imageSource={darkSquare} />
                }
            })
        } else {
            return coordinates[i].map((c) => { 
                if(c[0] == 'a' || c[0] == 'c' || c[0] == 'e' || c[0] == 'g') {
                    console.log(c[0])
                    return <BoardSquare id={c} imageSource={lightSquare} />
                } else {
                    return <BoardSquare id={c} imageSource={darkSquare} />
                }
            })
        }
    }

    return (
        <div id='board'>
            <div id="row1" className='board-row'>
                { renderPieces(7) }
            </div>

            <div id="row2" className='board-row'>
                { renderPieces(6) }
            </div>

            <div id="row3" className='board-row'> 
                { renderPieces(5) }
            </div>

            <div id="row4" className='board-row'>
                { renderPieces(4) }
            </div>

            <div id="row5" className='board-row'>
                { renderPieces(3) }
            </div>

            <div id="row6" className='board-row'>
                { renderPieces(2) }
            </div>   

            <div id="row7" className='board-row'>
                { renderPieces(1) }
            </div>

            <div id="row8" className='board-row'>
                { renderPieces(0) }
            </div>
        </div>
    )
}

