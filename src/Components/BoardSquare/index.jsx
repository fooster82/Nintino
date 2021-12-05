import React from 'react';
import { render } from 'react-dom';
import { CheckerGame } from '../CheckerGame';

export function BoardSquare({id, imageSource}) {

    let buttons = document.querySelectorAll('.board-btn')
        if(buttons){
            console.log(buttons.length);
        }
    let boardClick= () => {
        possibleMoves(id)
    }

    return (          
            <input onClick={boardClick} type='image' alt='board piece' src={imageSource}  className='board-btn' id={id}></input>
    )
    
}
