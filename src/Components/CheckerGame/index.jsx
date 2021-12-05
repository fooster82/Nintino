import React from 'react';
import redChip from './assets/red.png';
import blueChip from './assets/blue.png';
import { GamePieces } from '../GamePieces';
import './style.css';

// this will use django authentication

export function CheckerGame() {

    const Red = ['b1','d1','f1','h1','a2','c2','e2','g2','b3','d3','f3','h3']
    const Blue=['a6','c6','e6','g6','b7','d7','f7','h7','a8','c8','e8','g8']

    const coordinates=[
        ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
        ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
        ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
        ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
        ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
        ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
        ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
        ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']
    ]

    console.log(Red[0][1]);

    const startGame = () => {

            for(let i =0 ; i < coordinates.length ; i ++){
                console.log("working");
                for(let j =0 ; j < coordinates.length ; j ++){
                    if(coordinates[i][j] in Red){
                        console.log("red");
                        <GamePieces id={coordinates[i][j]} imageSource={redChip} />
                    }else if(coordinates[i][j] in Blue){
                        <GamePieces id={coordinates[i][j]} imageSource={blueChip} />
                    }else{
                        continue;
                    }
                }
            }
            
    }

    return(
        <div>
            { startGame }
        </div>
        
    )

     

}