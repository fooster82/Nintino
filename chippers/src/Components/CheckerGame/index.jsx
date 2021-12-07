import React, { useRef , useEffect} from 'react';
import redChip from './assets/red.png';
import blueChip from './assets/blue.png';
// import { GamePiece } from '../RedPiece';
import { Gameboard } from '../Gameboard';
import './style.css';

// this will use django authentication
<<<<<<< HEAD
          
const Red = ['11','31','51','71','22','55','62','82','13','33','53','75']
// const Blue=['26','46','66','86','17','37','57','77','28','48','68','88']
// const Red = ['11','31','51','71','22','42','62','82','13','33','53','73']
const Blue=['24','46','66','86','17','37','57','77','28','48','68','88']
const coordinates=[
        ['11', '21', '31', '41', '51', '61', '71', '71'],
        ['12', '22', '32', '42', '52', '62', '72', '72'],
        ['13', '23', '33', '43', '53', '63', '73', '73'],
        ['14', '24', '34', '44', '54', '64', '74', '74'],
        ['15', '25', '35', '45', '55', '65', '75', '75'],
        ['16', '26', '36', '46', '56', '66', '76', '76'],
        ['17', '27', '37', '47', '57', '67', '77', '77'],
        ['18', '28', '38', '48', '58', '68', '78', '88'],
    ]

export function checkPiece(id) {
=======

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

>>>>>>> dev/george
    if( Red.includes(id) || Blue.includes(id) ){     
        checkMove(id);
        return true;
    }else{
        console.log("flase");
        return false;
    }
}
<<<<<<< HEAD
let availableMoves;
const checkMove=(id)=>{
    availableMoves=[]
    if( Red.includes(id) ){
        switch(id[0]){
            case '1' :
                console.log(id);
                if (rightMovePiece(id,1 , '8')){
                    availableMoves.push(rightMovePiece(id,1 , '8'))
                    console.log(availableMoves);
                    return movePiece('Red', id ,availableMoves);
                }else if(Blue.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))){
                    if(rightJump(id , 2 , 8)){
                        availableMoves.push(rightJump(id , 2 , 8))
                        console.log(availableMoves);
                        return movePiece('Red', id ,availableMoves);
                    }
                    
                }    
                break      
            case '8':
                console.log(id);
                if (leftmMovePiece(id,1 , '8')){
                    availableMoves.push(leftmMovePiece(id,1 , '8'))
                    console.log(availableMoves);
                    return movePiece('Red', id ,availableMoves);
                }else if(Blue.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))){
                    if(leftJump(id , 2 , 8)){
                        availableMoves.push(leftJump(id , 2 , 8))
                        console.log(availableMoves);
                        return movePiece('Red', id ,availableMoves);
                    }
                    
                } 
                break
            default:
                if(rightMovePiece(id,1 , '8')){
                    console.log(rightMovePiece(id,1 , '8'));
                    availableMoves.push(rightMovePiece(id,1 , '8'))  
                }else if(Blue.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))){
                    if(rightJump(id , 2 , 8)){
                        availableMoves.push(rightJump(id , 2 , 8))
                        console.log(availableMoves);
                    }
                    
                }  
                if(leftmMovePiece(id,1 , '8')){
                    console.log(leftmMovePiece(id,1 , '8'));
                    availableMoves.push(leftmMovePiece(id,1 , '8'))                      
                }else if(Blue.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))){
                    if(leftJump(id , 2 , 8)){
                        availableMoves.push(leftJump(id , 2 , 8))
                        console.log(availableMoves);
                    }
                   
                } 
                console.log(availableMoves);
                return movePiece('Red' ,id ,availableMoves);  
        }
            
    }else if(Blue.includes(id)){
        switch(id[0]){
            case '1' :
                console.log(id);
                if (rightMovePiece(id, -1 , '1')){
                    availableMoves.push(rightMovePiece(id, -1 , '1'))
                    console.log(availableMoves);
                    return movePiece('Blue' ,id ,availableMoves);
                }else if(Red.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))){
                    console.log('getting here');
                    if(rightJump(id , -2 , 1)){
                        availableMoves.push(rightJump(id , -2 , 1))
                        console.log(availableMoves);
                    return movePiece('Blue', id ,availableMoves);
                    }                   
                    
                }   
                break      
            case '8':
                console.log(id);
                if (leftmMovePiece(id, -1 , '1')){
                    availableMoves.push(leftmMovePiece(id, -1 , '1'))
                    console.log(availableMoves);
                    return movePiece('Blue', id ,availableMoves);
                }else if(Red.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))){
                    console.log('getting here');
                    if(leftJump(id , -2 , 1)){
                         availableMoves.push(leftJump(id , -2 , 1))
                        console.log(availableMoves);
                        return movePiece('Blue', id ,availableMoves);
                    }
                   
                }  
                break
            default:
                if(rightMovePiece(id, -1 , '1')){
                    console.log("blue right");
                    console.log(rightMovePiece(id, -1 , '1'));
                    availableMoves.push(rightMovePiece(id, -1 , '1'))  
                } else if(Red.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))){
                    console.log('getting here');
                    if(rightJump(id , -2 , 1)){
                        availableMoves.push(rightJump(id , -2 , 1))
                        console.log(availableMoves);
                    }
                    
                    
                } 

                if(leftmMovePiece(id, -1 , '1')){
                    console.log("blue left");
                    console.log(leftmMovePiece(id, -1 , '1'));
                    availableMoves.push(leftmMovePiece(id, -1 , '1'))                      
                }else if(Red.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))){
                    console.log('getting here');
                    if(leftJump(id , -2 , 1)){
                        availableMoves.push(leftJump(id , -2 , 1))
                        console.log(availableMoves);
                    }
                    
                }  
                console.log(availableMoves);
                return movePiece('Blue', id ,availableMoves);  
        }
    }

}

const leftmMovePiece= (id , num , end ) => {
    if((! Red.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))) ){
        if(checkBounds((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))){
            return (parseInt(id[0])-1).toString()+(parseInt(id[1])+num)
    }
}}

const rightMovePiece = (id , num , end ) => {
    if((! Red.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))) ){
        if(checkBounds((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))){
            return (parseInt(id[0])+1).toString()+(parseInt(id[1])+num)
    }
}}

const leftJump = (id , num , end) => {
    if(end){
        console.log('gettinggg');
        if((! Red.includes((parseInt(id[0])-2).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])-2).toString()+(parseInt(id[1])+num)))){
            if(checkBounds((parseInt(id[0])-2).toString()+(parseInt(id[1])+num))){
                return (parseInt(id[0])-2).toString()+(parseInt(id[1])+num)
        }
    }
    
}}

const rightJump = (id , num , end) => {
    if(end){
        if((! Red.includes((parseInt(id[0])+2).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])+2).toString()+(parseInt(id[1])+num)))){
            if(checkBounds((parseInt(id[0])+2).toString()+(parseInt(id[1])+num))){
                return (parseInt(id[0])+2).toString()+(parseInt(id[1])+num)
            }
            else{
                console.log("move not allowed!");
            }
            
        }
    }
   
}

const checkBounds = (id) =>{
    if((parseInt(id[0]) <= 8 && (parseInt(id[1])) <= 8 && (parseInt(id[0])) > 0 && (parseInt(id[1])) > 0)){
         return true
    }   
    else{
        return false
    }

=======

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
>>>>>>> dev/george
}

const removePiece = (colour , id ) => {
    let index;
    if(colour === 'Red'){
        console.log(Red);
        index=Red.indexOf(id);
        Red.splice(index,1);           
        console.log(Red);
        
    }else{
        console.log(Blue);
        index=Blue.indexOf(id);
        Blue.splice(index,1);         
        console.log(Blue.length);
        console.log(Blue)
    }
}

const movePiece = (colour ,id,availableMoves) => {
    let index;
    if(availableMoves.length){
            
        for(let x=0 ; x < availableMoves.length ; x++){
            console.log(availableMoves[x]);
            let piece= document.getElementById(availableMoves[x])
           
            piece.addEventListener('click', (e) => {  
                e.preventDefault()
                if(colour === 'Red'){
                    console.log(Math.abs(parseInt(id[0]) - parseInt(availableMoves[x][0])) );
                    if( Math.abs(parseInt(id[0]) - parseInt(availableMoves[x][0])) == 2 ){
                        console.log(availableMoves[x]);
                        console.log(id);
                        let new_id= (parseInt(id[0])+1).toString() + ((parseInt(id[1])+ parseInt(availableMoves[x][1]))/2)
                        console.log(new_id);
                        removePiece('Blue' ,new_id)
                    }
                    console.log(Red);     
                    piece.id=availableMoves[x]
                    index=Red.indexOf(id)
                    Red[index]=availableMoves[x]
                    console.log("minus");
                    
                     
                    console.log(Red);
                    console.log(piece.id);
                }else{
                    console.log(Math.abs(parseInt(id[0]) - parseInt(availableMoves[x][0])) );
                    if( Math.abs(parseInt(id[0]) - parseInt(availableMoves[x][0])) == 2 ){
                        console.log(availableMoves[x]);
                        console.log(id);
                        let new_id= (parseInt(id[0])-1).toString() + ((parseInt(id[1])+ parseInt(availableMoves[x][1]))/2)
                        console.log(new_id);
                        removePiece('Red' ,new_id)
                    }
                    console.log(Blue);     
                    piece.id=availableMoves[x]
                    index=Blue.indexOf(id)
                    console.log(index);
                    Blue[index]=availableMoves[x]                  
                    console.log(Blue);
                    console.log(piece.id);
                }
                
            })
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
