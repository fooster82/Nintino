import React, {useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Logo } from '../../Components/Logo';
import * as Layout from '../../Layout';
import { socket } from '../../socket';
import './style.css';

export function Homepage() {

    let history = useHistory()
    const [gameID, setGameID] = useState("")
    const [submitter, setSubmitter] = useState("")
    const [message, setMessage] = useState("")
    const handleInput = e =>{
        setGameID(e.target.value)
    }
    
    useEffect(()=>{
        socket.removeAllListeners()
        socket.connect();
    },[])
    
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

        <div role="homepage">
            <div id="logo-container">
                <Logo />
            </div>

            <Layout.Header />

            <div id="chippers-image-container">
                <div id="checkers-container">
                    <h1 id="chippers-title" className='center-text'>Chippers</h1>
                    <h3 className='center-text'>A spin on the classic game of checkers</h3><br />
                    <h4 className="checker-info">• To start a new game, enter the name you would like to give it in the box below and press 'Create Game'.</h4><br />
                    <h4 className="checker-info">• To join an already created game, enter its name into the box below and press 'Join Game'.</h4>
                    <form id="checkers-form" onSubmit={handleSubmit}>
                        <input
                            type='text' role="gameID"
                            name='gameID' id='gameID' required
                            className="gameID" placeholder="Enter a game ID"
                            value={gameID} onChange={handleInput}
                            maxLength='12'
                            id="chippers-lobby"
                        />
                        <div id="btns-container">
                            <input className="game-btn" onClick={(e) => setSubmitter(e.target.value)} type="submit" role="join" value="Join Game" />
                            <input className="game-btn" onClick={(e) => setSubmitter(e.target.value)} type="submit" role="create" value="Create Game" />
                        </div>
                    </form>
                    <p className="Message">{message}</p>
                </div>
            </div>

            <h4 id="comingsoon">Want a sneak peak at what we have planned for the future? Click <a id="comingsoon-link" href="games/commingsoon">here!</a></h4>
        </div>
    )
}
