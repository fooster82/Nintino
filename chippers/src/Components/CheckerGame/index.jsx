import React, {useRef} from 'react';
import redChip from './assets/red.png';
import blueChip from './assets/blue.png';
import { GamePiece } from '../GamePiece';
import { Gameboard } from '../Gameboard';
import './style.css';

// this will use django authentication

const Red = ['a1','c1','e1','g1','b2','d2','f2','h2','a3','c3','e3','g3']
const Blue =['b6','d6','f6','h6','a7','c7','e7','g7','b8','d8','f8','h8']
const coordinates = [
        'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1',
        'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
        'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
        'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
        'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
        'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
        'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
        'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'
    ]

const numCoords = [
    [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8],
    [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8],
    [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8],
    [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8],
    [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8],
    [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8],
    [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]
]

export function clickPiece(id) {

    if( Red.includes(id) || Blue.includes(id) ){     
        checkMove(id);
        return true;
    }else{
        console.log("flase");
        return false;
    }
}

// export function checkMove (id) {
//     let availableMoves=[];
//     let newSpace;
//     if( Red.includes(id) || Blue.includes(id)){
//         console.log(id[0]);
//         if(id[0] === 'a'){
//             console.log('b'+(parseInt(id[1])+1));
//             newSpace = 'b' + (parseInt(id[1])+1)
//             if(! Blue.includes('b'+(parseInt(id[1])+1))){
//                 availableMoves.push('b'+(parseInt(id[1])+1))
//                 console.log(availableMoves);
//                 return availableMoves;
//             }
//         }
//     }
// }

export function checkMove(id) {
    const availableMoves=[]
    if( Red.includes(id) ){
        switch(id[0]){
            case 'a' :
                console.log(id);
                if((! Red.includes('b'+(parseInt(id[1])+1))) && (! Blue.includes('b'+(parseInt(id[1])+1))) && ( id[1] !== 8)){
                    availableMoves.push('b'+(parseInt(id[1])+1))
                    console.log(availableMoves);
                    return availableMoves;
                } 
                break;
            case 'h':
                console.log(id);
                if((! Red.includes('g'+(parseInt(id[1])+1)) )&& (! Blue.includes('g'+(parseInt(id[1])+1))) && ( id[1] !== 8)){
                    availableMoves.push('g'+(parseInt(id[1])+1))
                    console.log(availableMoves);
                    return availableMoves;
                }
            case 'b':
                console.log(id);
                if(( ! Red.includes('a'+(parseInt(id[1])+1)) )&& (! Blue.includes('a'+(parseInt(id[1])+1))) && ( id[1] !== 8)) {
                    availableMoves.push('a' + (parseInt(id[1])+1))
                    return availableMoves;
                } else if (( ! Red.includes('c'+(parseInt(id[1])+1)) )&& (! Blue.includes('c'+(parseInt(id[1])+1))) && ( id[1] !== 8)) {
                    availableMoves.push('c' + (parseInt(id[1])+1))
                    return availableMoves;
                }
        }
    }else if(Blue.includes(id)){
        switch(id[0]){
            case 'a' :
                console.log(id);
                if((! Blue.includes('b'+(parseInt(id[1])-1))) && (! Red.includes('b'+(parseInt(id[1])-1))) && (id[1] !== 1)){
                    availableMoves.push('b'+(parseInt(id[1])-1))
                    console.log(availableMoves);
                    return availableMoves;
                }
            case 'h':
                console.log(id);
                if((! Blue.includes('g'+(parseInt(id[1])-1))) &&   (! Red.includes('g'+(parseInt(id[1])-1)))  && (id[1] !== 1)){
                    availableMoves.push('g'+(parseInt(id[1])-1))
                    console.log(availableMoves);
                    return availableMoves;
                }
        }
    }
}

export function CheckerGame() {

    const playerPieces= i => {
        console.log(coordinates);
        return coordinates[i].map((c) => { 
            if( Red.includes(c) ) {
                return pieceImg(c,redChip)
            } else if(Blue.includes(c)){
                pieceImg(c,blueChip)
            }
        })
    }
     

    const pieceImg = (id , img) => {
        return <GamePiece id={id} imageSource={img} />
    }

 

    return(
        <div>
            <Gameboard  Red={Red} Blue={Blue} />
            {/* {playerPieces(0)}           */}
            {/* {startGame()} */}
        </div>    
    )
}
