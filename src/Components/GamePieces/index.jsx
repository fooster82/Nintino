import React from 'react';

export function GamePieces(){
    return(
        <input type='image' alt='player piece' src={imageSource} disabled className='piece-img' id={id}></input>
    )
}