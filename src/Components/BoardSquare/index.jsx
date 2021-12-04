import React from 'react';

export function BoardSquare({id, imageSource}) {
    return (
            <input type='image' alt='board piece' src={imageSource} disabled className='board-btn' id={id}></input>
    )
}
