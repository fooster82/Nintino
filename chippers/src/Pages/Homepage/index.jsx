import React, {useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import * as Layout from '../../Layout';
import { socket } from '../../socket'

export function Homepage() {

    let history = useHistory()
    const [gameID, setGameID] = useState("")
    const [submitter, setSubmitter] = useState("")
    const [message, setMessage] = useState("")
    const handleInput = e =>{
        setGameID(e.target.value)
    }
    
    useEffect(()=>{
        socket.connect();
    })
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const user_id = JSON.parse(document.getElementById('user_id').textContent);
        let room = gameID
        localStorage.setItem('roomName', room)
        console.log(user_id);
        if (submitter === "Join Game"){
            socket.emit("check-room", room, (res)=>{
                if (res.roomExists){
                    setMessage("Joining Game...")
                    setTimeout(()=>{
                        history.push("/lobby")
                    },1000)
                } else {
                    setMessage("This room doesn't exist")
                    setTimeout(() => {
                        setMessage("")
                    }, 2000);
                }
            })
        }  else {
            socket.emit("check-room", room, (res) => {
                console.log(res);
                if (res.roomExists) {
                    setMessage("This room already exists")
                    setTimeout(() => {
                        setMessage("")
                    }, 2000);
                } else {
                    setMessage("Creating Room...");
                    socket.emit("create",room, (res)=>{
                        if(res.message==="game successfully created"){
                            history.push('/lobby')
                        }
                    })
                }
            })


        }
    }

    return (
        <div>
            <Layout.Header />
<<<<<<< HEAD
            <CheckerGame />
            {printID('b6')}
            {printID('a2')}
=======

            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text' role="gameID"
                        name='gameID' id='gameID' required
                        className="gameID" placeholder="Enter a game ID"
                        value={gameID} onChange={handleInput}
                        maxLength='12'
                    />
                    <input onClick={(e) => setSubmitter(e.target.value)} type="submit" role="join" value="Join Game" />
                    <input onClick={(e) => setSubmitter(e.target.value)} type="submit" role="create" value="Create Game" />
                </form>
                <p className="Message">{message}</p>
            </div>
>>>>>>> 46b7cd87b0ab30044d5151ac91c0e402d418feb4
        </div>
    )
}
