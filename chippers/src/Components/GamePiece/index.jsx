import React from 'react';

export function GamePiece({imageSource , id }){
    return(
        <input type='image' alt='player piece' src={imageSource}  className='piece-img' id={id}></input>
    )
}