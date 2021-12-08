import { socket } from "../../socket";
import React, {useEffect} from "react";
import { useHistory } from "react-router";

export const Lobby=() => {
    let history = useHistory();
    const username = JSON.parse(document.getElementById('user_id').textContent);
    
    let roomName = localStorage.getItem('roomName');

    useEffect(() => {
        if(!roomName){
            history.push("/")
        } else{
            socket.emit("joinRoom", username, roomName, (res) => {
                
            })
        }
    },[])

    socket.on("game-start", ()=>{
        console.log("game started");
        history.push("/chippers")
    })

    return (
        <h1 role="lobby">You're in the lobby</h1>
    )

}