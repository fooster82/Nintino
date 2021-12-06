import React, {useRef} from 'react';
import redChip from './assets/red.png';
import blueChip from './assets/blue.png';
import { GamePiece } from '../GamePiece';
import { Gameboard } from '../Gameboard';
import './style.css';

// this will use django authentication

const Red = ['a1','c1','e1','g1','b2','d2','f2','h2','a3','c3','e3','g3']
const Blue=['b6','d6','f6','h6','a7','c7','e7','g7','b8','d8','f8','h8']
const coordinates=[
        ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
        ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
        ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
        ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
        ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
        ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
        ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
        ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
    ]

export function checkPiece(id) {

    if( Red.includes(id) || Blue.includes(id) ){     
        return true;
    }else{
        console.log("flase");
    }
}

export function CheckerGame() {
    let cols= 'abcdefgh'

    const playerPieces= i => {
        console.log(coordinates);
        return coordinates[i].map((c) => { 
            if( Red.includes(c) ) {
                console.log("red");
                return pieceImg(c,redChip)
            } else if(Blue.includes(c)){
                pieceImg(c,blueChip)
            }
            // <BoardSquare id={c} imageSource={lightSquare} />          
        })
    }
     

    const pieceImg = (id , img) => {
        return <GamePiece id={id} imageSource={img} />
    }
 

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

    return(
        <div>
            <Gameboard  Red={Red} Blue={Blue} />
            {playerPieces(0)}
            
            {/* {startGame()} */}
        </div>
        
    )

     

}