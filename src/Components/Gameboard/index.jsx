import React from 'react';

import { BoardSquare } from '..';
import lightSqaure from './assets/light-square.png'

export function Gameboard() {
    return (
        <div id='board'>
            <div className="row-A" className='board-row'>
                <BoardSquare id='A1' imageSource={lightSqaure} />
            </div>

            <div className="row-B" className='board-row'>

            </div>

            <div className="row-C" className='board-row'> 

            </div>

            <div className="row-D" className='board-row'>

            </div>

            <div className="row-E" className='board-row'>

            </div>

            <div className="row-F" className='board-row'>
                </div>   

            <div className="row-G" className='board-row'>

            </div>

            <div className="row-H" className='board-row'>

            </div>
        </div>
    )
}
