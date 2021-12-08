import React , { useRef }  from 'react';
import { checkPiece } from '../CheckerGame';

export function BluePiece({ id ,imageSource}){
    const id_num = useRef(id)
    const racetrack = id_num.current
    
    const clicked = (e) => {
        checkPiece(id);

        console.log(`clicked!!! ${id}`);
    }

    return(
        <input onClick={clicked} ref= {id_num} type='image' alt='player piece' src={imageSource}  className='piece-img' id={id}></input>
    )
}