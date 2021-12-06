import React from 'react';
import "./style.css";

import { CheckerGame, Gameboard } from "../../../../src/Components";

export function ChippersPage() {

    let num=document.getElementById('root')
    if(num){
        console.log("num.row3");
    }

    return (
        <div>
            {/* <Gameboard /> */}
            <CheckerGame />
        </div>
        
    )
}
