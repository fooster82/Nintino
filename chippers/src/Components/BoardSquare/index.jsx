import React, { useRef } from 'react';
import { render } from 'react-dom';
import { CheckerGame } from '../CheckerGame';

export function BoardSquare({id, imageSource}) {

    // const myRef = useRef(id);
    // console.log(myRef.current);
    
    return (          
            <input  type='image' alt='board piece' src={imageSource}  className='board-btn' id={id}></input>
    )
    
    
}
