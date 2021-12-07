import React from 'react';
import './style.css';
import {  CheckerGame } from '..';
import { BoardSquare } from '..';
import redChip from './assets/red.png';
import blueChip from './assets/blue.png';
import { RedPiece } from '../RedPiece';
import { BluePiece } from '../BluePiece';
import lightSquare from './assets/light-square.png';
import darkSquare from './assets/dark-square.png';

let cols = ['1', '2', '3', '4', '5', '6', '7', '8'];
let rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
let coordinates = [[], [], [], [], [], [], [], []];

for(let c=0; c < cols.length; c++) {
    for(let r=0; r < rows.length; r++) {
        coordinates[r][c] = cols[c] + rows[r]
    }
};  


export function Gameboard({Red,Blue, checkPiece}) {
    console.log("im rendering");

    const renderPieces = i => {
        if(i % 2 ==0) {     
            return coordinates[i].map((c, j) => { 
                
                if(c[0] == '2' || c[0] == '4' || c[0] == '6' || c[0] == '8') {
                    return <BoardSquare key={j} checkPiece={checkPiece} id={c} imageSource={lightSquare} />
                } else {  
                    if(Red.includes(c)) {
                        return  <RedPiece key={j} checkPiece={checkPiece} id={c} imageSource={redChip} />
                    }else if(Blue.includes(c)){
                        return  <BluePiece key={j} checkPiece={checkPiece} id={c} imageSource={blueChip} />
                    }else{
                        return <BoardSquare key={j} checkPiece={checkPiece} id={c} imageSource={darkSquare} />
                    }                                  
                }                  
                }
            )
        } else {
            return coordinates[i].map((c, j) => { 
                if(c[0] == '1' || c[0] == '3' || c[0] == '5' || c[0] == '7') {
                    
                    return <BoardSquare key={j} checkPiece={checkPiece} id={c}  imageSource={lightSquare} />
                } else {
                    if(Red.includes(c)) {
                        return  <RedPiece key={j} checkPiece={checkPiece} id={c} imageSource={redChip} />
                    }else if(Blue.includes(c)){
                        return  <BluePiece key={j} checkPiece={checkPiece} id={c} imageSource={blueChip} />
                    }else{
                        return <BoardSquare key={j} checkPiece={checkPiece} id={c} imageSource={darkSquare} />
                    }                              
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

