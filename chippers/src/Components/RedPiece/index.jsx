import React , { useRef }  from 'react';


export function RedPiece({imageSource , id, checkPiece}){
    const id_num = useRef(id)
    const racetrack = id_num.current

    const clicked = (e) => {
        checkPiece(id);

    }

    return(
        <input onClick={clicked} ref={id_num} type='image' alt='player piece' src={imageSource}  className='piece-img' id={id}></input>
    )
   
}