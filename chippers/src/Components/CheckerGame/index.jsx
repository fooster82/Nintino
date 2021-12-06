import React, {useRef} from 'react';
import redChip from './assets/red.png';
import blueChip from './assets/blue.png';
import { GamePieces } from '../GamePieces';
import { Gameboard } from '../Gameboard';
import './style.css';

// this will use django authentication

const Red = ['a1','c1','e1','g1','b2','d2','f2','h2','a3','c3','e3','g3']
const Blue=['b6','d6','f6','h6','a7','c7','e7','g7','b8','d8','f8','h8']

export function checkPiece(id) {

    if( Red.includes(id) || Blue.includes(id) ){
        console.log("True");
        return true;
    }else{
        console.log("flase");
    }
}

export function CheckerGame() {


    

    

    // const checkPiece = (id) => {
    //     if( id in Red || id in Blue){
    //         console.log("True");
    //         return true;
    //     }
    // }

    

    // const possibleMoves= (coordinate , player) => {
    //     if( player === 'red'){
    //         if(coordinate[0] === 'a'){
    //             if( coordinates['b'+(parseInt(coordinate[1])+1)] === 'empty' ){
    //                 'b'+(parseInt(coordinate[1])+1)
    //             }
    //         }
    //     }

    // }

    // const coordinates=[
    //     ['a0', 'b0', 'c0', 'd0', 'e0', 'f0', 'g0', 'h0'],
    //     ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    //     ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    //     ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
    //     ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
    //     ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
    //     ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
    //     ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7']
    // ]

    // console.log(coordinates[0][0]);
    // console.log(Red.includes(coordinates[0][1]));

    // const startGame = () => {

    //         for(let i =0 ; i < coordinates.length ; i ++){
            
    //             for(let j =0 ; j < coordinates.length ; j ++){
    //                 if(Red.includes(coordinates[i][j])){
                        
    //                     let newPiece = document.getElementById('board');
    //                     if(newPiece){
    //                         newPiece.src=redChip
    //                     // newPiece = <GamePieces imageSource={redChip} id={coordinates[i][j]}/>
                            
    //                     }else{
    //                         continue;
    //                     }
                        
    //                 }else if(Blue.includes(coordinates[i][j])){
    //                     <GamePieces imageSource={blueChip} id={coordinates[i][j]}/>
    //                 }else{
                        
    //                     continue;
    //                 }
    //             }
    //         }
            
    // }

    return(
        <div>
            <Gameboard  Red={Red} Blue={Blue} />
            
            {/* {startGame()} */}
        </div>
        
    )

     

}