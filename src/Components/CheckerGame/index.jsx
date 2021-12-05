import React from 'react';
import redChip from './assets/red.png';
import blueChip from './assets/blue.png';
import { GamePieces } from '../GamePieces';
import { Gameboard } from '../Gameboard';
import './style.css';

// this will use django authentication

export function CheckerGame() {

    var GameBoard = React.createClass({
        getInitialState: function() {
            return {
                board: [
                    ['-','b','-','b','-','b','-','b'],
                    ['b','-','b','-','b','-','b','-'],
                    ['-','b','-','b','-','b','-','b'],
                    ['-','-','-','-','-','-','-','-'],
                    ['-','-','-','-','-','-','-','-'],
                    ['r','-','r','-','r','-','r','-'],
                    ['-','r','-','r','-','r','-','r'],
                    ['r','-','r','-','r','-','r','-']
                ],
                activePlayer: 'r',
                aiDepthCutoff: 3,
                count: 0,
                popShown: false
            }
        }
    })

    const Red = ['a0','c0','e0','g0','b1','d1','f1','h1','a2','c2','e2','g2']
    const Blue=['b5','d5','f5','h5','a6','c6','e6','g6','b7','d7','f7','h7']

    const coordinates=[
        ['a0', 'b0', 'c0', 'd0', 'e0', 'f0', 'g0', 'h0'],
        ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
        ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
        ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
        ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
        ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
        ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
        ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7']
    ]

    console.log(coordinates[0][0]);
    console.log(Red.includes(coordinates[0][1]));

    const startGame = () => {

            for(let i =0 ; i < coordinates.length ; i ++){
                console.log("working");
                for(let j =0 ; j < coordinates.length ; j ++){
                    if(Red.includes(coordinates[i][j])){
                        console.log(coordinates[i][j]);
                        let newPiece = document.getElementById('board');
                        if(newPiece){
                            newPiece.src=redChip
                        // newPiece = <GamePieces imageSource={redChip} id={coordinates[i][j]}/>
                            console.log("changing src");
                        }else{
                            console.log("fkejnkjn");
                        }
                        
                    }else if(Blue.includes(coordinates[i][j])){
                        <GamePieces imageSource={blueChip} id={coordinates[i][j]}/>
                    }else{
                        console.log("else");
                        continue;
                    }
                }
            }
            
    }

    // const possibleMoves= (coordinate , player) => {
    //     if( player === 'red'){
    //         if(coordinate[0] === 'a'){
    //             if( coordinates['b'+(parseInt(coordinate[1])+1)] === 'empty' ){
    //                 'b'+(parseInt(coordinate[1])+1)
    //             }
    //         }
    //     }

    // }

    return(
        <div>
            <Gameboard  Red={Red} Blue={Blue} />
            
            {startGame()}
        </div>
        
    )

     

}