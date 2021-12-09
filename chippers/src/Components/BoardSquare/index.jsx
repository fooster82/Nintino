import React, { useRef } from 'react';


export function BoardSquare({id, imageSource,checkPiece}) {

    const id_num = useRef(id)
    const racetrack = id_num.current

    const clicked = (e) => {
        checkPiece(id);

    }

    return (
        <>
            { imageSource ? 
                 <input role="boardSquare" data-testid={id} type='image' alt='board piece' src={imageSource}  className='board-btn' id={id}></input>
                :
                <input role="boardSquare" data-testid={id}  onClick={clicked} ref={id_num} type='image' className='board-btn' id={id}></input>
            }
            
        </>
   )
    
}
