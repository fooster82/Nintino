import React, { useRef } from 'react';
import { checkPiece } from '../CheckerGame';

export function BoardSquare({id, imageSource}) {

    const id_num = useRef(id)
    const racetrack = id_num.current

    const clicked = (e) => {
        checkPiece(id);

    }

    return (
        <>
            { imageSource ? 
                 <input onClick={clicked} ref={id_num} type='image' alt='board piece' src={imageSource}  className='board-btn' id={id}></input>
                :
                <input onClick={clicked} ref={id_num} type='image' className='board-btn' id={id}></input>
            }
            
        </>
   )
    
}
