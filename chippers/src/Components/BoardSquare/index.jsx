import React, { useRef } from 'react';


export function BoardSquare({id, imageSource,checkPiece}) {

    const id_num = useRef(id)
    const racetrack = id_num.current
    
 
    // const check =document.getElementById('b3')
    // if(racetrack){

    //     console.log("got it");
    // }else{
    //     console.log("not working");
    // }



    const clicked = (e) => {
        checkPiece(id);

        console.log(`clicked!!! ${id}`);
    }

    return (
        <>
            { imageSource ? 
                 <input onClick={clicked} ref={id_num} type='image' alt='board piece' src={imageSource}  className='board-btn' id={id}></input>
                :
                <input onClick={clicked} ref={id_num} type='image' className='board-btn' id={id}></input>
            }
            
        </>
   )
    
}
