import React, {useRef} from 'react';
import redChip from './assets/red.png';
import blueChip from './assets/blue.png';
import { GamePiece } from '../GamePiece';
import { Gameboard } from '../Gameboard';
import './style.css';

// this will use django authentication

const Red = ['11','31','51','71','22','42','62','82','13','33','53','73']
const Blue=['26','46','66','86','17','37','57','77','28','48','68','88']
const coordinates=[
        ['11', '21', '31', '41', '51', '61', '71', '71'],
        ['12', '22', '32', '42', '52', '62', '72', '72'],
        ['13', '23', '33', '43', '53', '63', '73', '73'],
        ['14', '24', '34', '44', '54', '64', '74', '74'],
        ['15', '25', '35', '45', '55', '65', '75', '75'],
        ['16', '26', '36', '46', '56', '66', '76', '76'],
        ['17', '27', '37', '47', '57', '67', '77', '77'],
        ['18', '28', '38', '48', '58', '68', '78', '78'],
    ]

export function checkPiece(id) {
    if( Red.includes(id) || Blue.includes(id) ){     
        checkMove(id);
    }else{
        console.log("flase");
    }
}

const checkMove=(id)=>{
    const availableMoves=[]
    if( Red.includes(id) ){
        switch(id[0]){
            case '1' :
                console.log(id);
                if (rightMovePiece(id,1 , '8')){
                    availableMoves.push(rightMovePiece(id,1 , '8'))
                    console.log(availableMoves);
                    return availableMoves;
                }    
                break      
            case '8':
                console.log(id);
                if (leftmMovePiece(id,1 , '8')){
                    availableMoves.push(leftmMovePiece(id,1 , '8'))
                    console.log(availableMoves);
                    return availableMoves;
                }   
                break
            default:
                if(rightMovePiece(id,1 , '8')){
                    console.log(rightMovePiece(id,1 , '8'));
                    availableMoves.push(rightMovePiece(id,1 , '8'))  
                } 
                if(leftmMovePiece(id,1 , '8')){
                    console.log(leftmMovePiece(id,1 , '8'));
                    availableMoves.push(leftmMovePiece(id,1 , '8'))                      
                } 
                console.log(availableMoves);
                return availableMoves;  
        }
            
    }else if(Blue.includes(id)){
        switch(id[0]){
            case '1' :
                console.log(id);
                if (rightMovePiece(id, -1 , '8')){
                    availableMoves.push(rightMovePiece(id, -1 , '8'))
                    console.log(availableMoves);
                    return availableMoves;
                }    
                break      
            case '8':
                console.log(id);
                if (leftmMovePiece(id, -1 , '8')){
                    availableMoves.push(leftmMovePiece(id, -1 , '8'))
                    console.log(availableMoves);
                    return availableMoves;
                } 
                break
            default:
                if(rightMovePiece(id, -1 , '8')){
                    console.log(rightMovePiece(id, -1 , '8'));
                    availableMoves.push(rightMovePiece(id,1 , '8'))  
                } 
                if(leftmMovePiece(id, -1 , '8')){
                    console.log(leftmMovePiece(id, -1 , '8'));
                    availableMoves.push(leftmMovePiece(id, -1 , '8'))                      
                } 
                console.log(availableMoves);
                return availableMoves;  
        }
    }

}

const leftmMovePiece= (id , num , end ) => {
    if((! Red.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))) && ( id[1] !== end)){
        return (parseInt(id[0])-1).toString()+(parseInt(id[1])+num)
    }else{
        return null
    }
}

const rightMovePiece= (id , num , end ) => {
    if((! Red.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))) && ( id[1] !== end)){
        return (parseInt(id[0])+1).toString()+(parseInt(id[1])+num)
    }else{
        return null
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