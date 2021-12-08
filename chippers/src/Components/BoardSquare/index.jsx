import React, { useRef } from 'react';


export function BoardSquare({id, imageSource,checkPiece}) {

    const id_num = useRef(id)
    const racetrack = id_num.current
    


    const clicked = (e) => {
        checkPiece(id);

        console.log(`clicked!!! ${id}`);
    }

    return (
            <input type='image' alt='board piece' src={imageSource} disabled className='board-btn' id={id}></input>
    )
}
