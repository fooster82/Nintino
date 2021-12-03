import React from 'react';

export function BoardSquare({id, imageSource}) {
    return (
            <input type='image' src={imageSource} disabled className='board-btn' id={id}></input>
    )
}
