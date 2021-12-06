import React, { useRef } from 'react'
import * as Layout from '../../Layout';
import { CheckerGame } from "../../Components";




export function Homepage() {

    

    const printID = (id) => {
        const id_num=useRef(id).current
        if(id_num){
            console.log(id_num)
        }else{
            console.log("False")
        }
    }

    return (
        <div>
            <Layout.Header />
            <CheckerGame />
            {printID('b6')}
            {printID('a2')}
        </div>
    )
}
