import React, { useRef , useEffect, useState} from 'react';
import redChip from './assets/red.png';
import blueChip from './assets/blue.png';
// import { GamePiece } from '../RedPiece';
import { Gameboard } from '../Gameboard';
import './style.css';
import { useHistory } from "react-router";
import { socket } from "../../socket";
// this will use django authentication

export function CheckerGame() {
    let history = useHistory();
    const [pieces, setPieces]= useState({red:['11','31','51','71','22','42','62','82','13','33','53','73'], blue:['26','46','66','86','17','37','57','77','28','48','68','88'], redKing:[], blueKing:[]})
    const [gameData, setGameData] = useState({})
    const [selectedPiece, setSelectedPiece] = useState('')
    const [redPlayer, setRedPlayer] = useState('')
    const [bluePlayer, setBluePlayer] = useState('')
    const [currentTurn, setCurrentTurn] = useState('red')
    const socketID = socket.id
    console.log(socketID);
    let roomName = localStorage.getItem("roomName")
    useEffect(()=>{
        socket.emit("getGameDetails", roomName)
        console.log("asked for game details");
        socket.on("updatedPieces", (game,rand)=>{
            if (game){
                console.log(game);
                setGameData(game);
                let red = game.players.find(player=> player.colour==='red');
                let blue = game.players.find(player=> player.colour==='blue');
                setRedPlayer(red.username);
                setBluePlayer(blue.username);
                setCurrentTurn(game.currentplayer)
            }
        })
        socket.on("gameEnded", (winner)=>{
            history.push("/winningPage", {winner:winner})
        })     
            
    },[])
    
    
    useEffect(()=>{
        const addCoords = (gamePieces) => {
            let red = []
            let redKing = []
            let blue = []
            let blueKing = []
            console.log(`gamePieces ${gamePieces}`);
            if (gamePieces){
    
                for (let i=0; i<gamePieces.length; i++){
                    if (gamePieces[i].alive === true){
                        if(gamePieces[i].colour ==="red"){
                            if(gamePieces[i].king === false){
                                red.push(gamePieces[i].location)
                            }else{
                                redKing.push(gamePieces[i].location)
                            }
                        } else {
                            if(gamePieces[i].king === false){
                                blue.push(gamePieces[i].location)
                            } else {
                                blueKing.push(gamePieces[i].location)
                            }
                        }
                    }
                }
                if (red.length === 0 && redKing.length === 0) {
                    try{
                        let winner = gameData.players.find(player => player.colour === 'red')
                        socket.emit("end-game", roomName, winner.username)
                    } catch (e){
                        
                    }
                }
                if (blue.length === 0 && blueKing.length === 0) {
                    try{
                        let winner = gameData.players.find(player => player.colour === 'blue')
                        socket.emit("end-game", roomName, winner.username)
                        
                    } catch (e){
                        
                    }
                }
            }
            // console.log(`This is red: ${red}`);
            setPieces({red:red,blue:blue, redKing:redKing, blueKing:blueKing})
        }
        let gamePieces = gameData.pieces
        addCoords(gamePieces)
    },[gameData])
    
    const Red = pieces.red
    // const Blue=['26','46','66','86','17','37','57','77','28','48','68','88']
    // const Red = ['11','31','51','71','22','42','62','82','13','33','53','73']
    const Blue = pieces.blue
    const RedKing = pieces.redKing
    const BlueKing = pieces.blueKing
    // if (Red.length === 0) {
    //     try{
    //         let winner = gameData.players.find(player => player.colour === 'red')
    //         socket.emit("end-game", roomName, winner.username)
    //     } catch (e){
            
    //     }
    // }
    // if (Blue.length === 0) {
    //     try{
    //         let winner = gameData.players.find(player => player.colour === 'blue')
    //         socket.emit("end-game", roomName, winner.username)
            
    //     } catch (e){
            
    //     }
    // }

    const coordinates=[
        ['11', '21', '31', '41', '51', '61', '71', '71'],
        ['12', '22', '32', '42', '52', '62', '72', '72'],
        ['13', '23', '33', '43', '53', '63', '73', '73'],
        ['14', '24', '34', '44', '54', '64', '74', '74'],
        ['15', '25', '35', '45', '55', '65', '75', '75'],
        ['16', '26', '36', '46', '56', '66', '76', '76'],
        ['17', '27', '37', '47', '57', '67', '77', '77'],
        ['18', '28', '38', '48', '58', '68', '78', '88'],
    ]
    

    const checkPiece=(id)=> {

        const player = gameData.players.find(player=> player.socketID === socketID); 
        console.log(player);
        console.log(`Current player ${gameData.currentplayer}`);
        if( Red.includes(id) && gameData.currentplayer ===  player.colour && gameData.currentplayer ==='red'){
            setSelectedPiece(id)
        }else if ( RedKing.includes(id) && gameData.currentplayer ===  player.colour && gameData.currentplayer ==='red'){
            setSelectedPiece(id)
        }else if( Blue.includes(id) && gameData.currentplayer ===  player.colour && gameData.currentplayer ==='blue'){     
            setSelectedPiece(id)
        }else if( BlueKing.includes(id) && gameData.currentplayer ===  player.colour && gameData.currentplayer ==='blue'){     
            setSelectedPiece(id)
        }else{
            console.log("false");
        }
    }
    useEffect(()=>{
        let availableMoves;
        const checkMove=(id)=>{
            availableMoves=[]
            if( Red.includes(id) ){
                switch(id[0]){
                    case '1' :
                        console.log(id);
                        if (rightMovePiece(id,1 , '8')){
                            availableMoves.push(rightMovePiece(id,1 , '8'))
                            console.log(availableMoves);
                            return movePiece('Red', id ,availableMoves);
                        }else if(Blue.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))||BlueKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))){
                            if(rightJump(id , 2 , 8)){
                                availableMoves.push(rightJump(id , 2 , 8))
                                console.log(availableMoves);
                                return movePiece('Red', id ,availableMoves);
                            }
                            
                        }    
                        break      
                    case '8':
                        console.log(id);
                        if (leftmMovePiece(id,1 , '8')){
                            availableMoves.push(leftmMovePiece(id,1 , '8'))
                            console.log(availableMoves);
                            return movePiece('Red', id ,availableMoves);
                        }else if(Blue.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))||BlueKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))){
                            if(leftJump(id , 2 , 8)){
                                availableMoves.push(leftJump(id , 2 , 8))
                                console.log(availableMoves);
                                return movePiece('Red', id ,availableMoves);
                            }
                            
                        } 
                        break
                    default:
                        if(rightMovePiece(id,1 , '8')){
                            console.log(rightMovePiece(id,1 , '8'));
                            availableMoves.push(rightMovePiece(id,1 , '8'))  
                        }else if(Blue.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))||BlueKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))){
                            if(rightJump(id , 2 , 8)){
                                availableMoves.push(rightJump(id , 2 , 8))
                                console.log(availableMoves);
                            }
                            
                        }  
                        if(leftmMovePiece(id,1 , '8')){
                            console.log(leftmMovePiece(id,1 , '8'));
                            availableMoves.push(leftmMovePiece(id,1 , '8'))                      
                        }else if(Blue.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))||BlueKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))){
                            if(leftJump(id , 2 , 8)){
                                availableMoves.push(leftJump(id , 2 , 8))
                                console.log(availableMoves);
                            }
                        
                        } 
                        console.log(availableMoves);
                        return movePiece('Red' ,id ,availableMoves);  
                }
                    
            }else if(Blue.includes(id)){
                switch(id[0]){
                    case '1' :
                        console.log(id);
                        if (rightMovePiece(id, -1 , '1')){
                            availableMoves.push(rightMovePiece(id, -1 , '1'))
                            console.log(availableMoves);
                            return movePiece('Blue' ,id ,availableMoves);
                        }else if(Red.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))||RedKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))){
                            console.log('getting here');
                            if(rightJump(id , -2 , 1)){
                                availableMoves.push(rightJump(id , -2 , 1))
                                console.log(availableMoves);
                            return movePiece('Blue', id ,availableMoves);
                            }                   
                            
                        }   
                        break      
                    case '8':
                        console.log(id);
                        if (leftmMovePiece(id, -1 , '1')){
                            availableMoves.push(leftmMovePiece(id, -1 , '1'))
                            console.log(availableMoves);
                            return movePiece('Blue', id ,availableMoves);
                        }else if(Red.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))||RedKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))){
                            console.log('getting here');
                            if(leftJump(id , -2 , 1)){
                                availableMoves.push(leftJump(id , -2 , 1))
                                console.log(availableMoves);
                                return movePiece('Blue', id ,availableMoves);
                            }
                        
                        }  
                        break
                    default:
                        if(rightMovePiece(id, -1 , '1')){
                            console.log("blue right");
                            console.log(rightMovePiece(id, -1 , '1'));
                            availableMoves.push(rightMovePiece(id, -1 , '1'))  
                        } else if(Red.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))||RedKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))){
                            console.log('getting here');
                            if(rightJump(id , -2 , 1)){
                                availableMoves.push(rightJump(id , -2 , 1))
                                console.log(availableMoves);
                            }
                            
                            
                        } 

                        if(leftmMovePiece(id, -1 , '1')){
                            console.log("blue left");
                            console.log(leftmMovePiece(id, -1 , '1'));
                            availableMoves.push(leftmMovePiece(id, -1 , '1'))                      
                        }else if(Red.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))||RedKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))){
                            console.log('getting here');
                            if(leftJump(id , -2 , 1)){
                                availableMoves.push(leftJump(id , -2 , 1))
                                console.log(availableMoves);
                            }
                            
                        }  
                        console.log(availableMoves);
                        return movePiece('Blue', id ,availableMoves);  
                }
            } else if (RedKing.includes(id)){
                if(rightMovePiece(id,1 , '8')){
                    console.log(rightMovePiece(id,1 , '8'));
                    availableMoves.push(rightMovePiece(id,1 , '8'))  
                }else if(Blue.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))||BlueKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))){
                    if(rightJump(id , 2 , 8)){
                        availableMoves.push(rightJump(id , 2 , 8))
                        console.log(availableMoves);
                    }
                    
                }  
                if(leftmMovePiece(id,1 , '8')){
                    console.log(leftmMovePiece(id,1 , '8'));
                    availableMoves.push(leftmMovePiece(id,1 , '8'))                      
                }else if(Blue.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))||BlueKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))){
                    if(leftJump(id , 2 , 8)){
                        availableMoves.push(leftJump(id , 2 , 8))
                        console.log(availableMoves);
                    }
                
                } 
                


                if(rightMovePiece(id, -1 , '1')){
                    console.log("blue right");
                    console.log(rightMovePiece(id, -1 , '1'));
                    availableMoves.push(rightMovePiece(id, -1 , '1'))  
                } else if(Blue.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))||BlueKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))){
                    console.log('getting here');
                    if(rightJump(id , -2 , 1)){
                        availableMoves.push(rightJump(id , -2 , 1))
                        console.log(availableMoves);
                    }
                    
                    
                } 

                if(leftmMovePiece(id, -1 , '1')){
                    console.log("blue left");
                    console.log(leftmMovePiece(id, -1 , '1'));
                    availableMoves.push(leftmMovePiece(id, -1 , '1'))                      
                }else if(Blue.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))||BlueKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))){
                    console.log('getting here');
                    if(leftJump(id , -2 , 1)){
                        availableMoves.push(leftJump(id , -2 , 1))
                        console.log(availableMoves);
                    }
                    
                }  
                
                console.log(availableMoves);
                return movePiece('Red' ,id ,availableMoves); 

            } else if (BlueKing.includes(id)){
                if(rightMovePiece(id,1 , '8')){
                    console.log(rightMovePiece(id,1 , '8'));
                    availableMoves.push(rightMovePiece(id,1 , '8'))  
                }else if(Red.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))||RedKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+1))){
                    if(rightJump(id , 2 , 8)){
                        availableMoves.push(rightJump(id , 2 , 8))
                        console.log(availableMoves);
                    }
                    
                }  
                if(leftmMovePiece(id,1 , '8')){
                    console.log(leftmMovePiece(id,1 , '8'));
                    availableMoves.push(leftmMovePiece(id,1 , '8'))                      
                }else if(Red.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))||RedKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+1))){
                    if(leftJump(id , 2 , 8)){
                        availableMoves.push(leftJump(id , 2 , 8))
                        console.log(availableMoves);
                    }
                
                } 
                


                if(rightMovePiece(id, -1 , '1')){
                    console.log("Red right");
                    console.log(rightMovePiece(id, -1 , '1'));
                    availableMoves.push(rightMovePiece(id, -1 , '1'))  
                } else if(Red.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))||RedKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])-1))){
                    console.log('getting here');
                    if(rightJump(id , -2 , 1)){
                        availableMoves.push(rightJump(id , -2 , 1))
                        console.log(availableMoves);
                    }
                    
                    
                } 

                if(leftmMovePiece(id, -1 , '1')){
                    console.log("Red left");
                    console.log(leftmMovePiece(id, -1 , '1'));
                    availableMoves.push(leftmMovePiece(id, -1 , '1'))                      
                }else if(Red.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))||RedKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])-1))){
                    console.log('getting here');
                    if(leftJump(id , -2 , 1)){
                        availableMoves.push(leftJump(id , -2 , 1))
                        console.log(availableMoves);
                    }
                    
                }
                console.log(availableMoves);
                return movePiece('Blue', id ,availableMoves);  
                
            }

        }
        if (selectedPiece){
            checkMove(selectedPiece)
        }
    },[selectedPiece])

    
    const leftmMovePiece= (id , num , end ) => {
        if((! Red.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))) && (! RedKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))) && (! BlueKing.includes((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))) ){
            if(checkBounds((parseInt(id[0])-1).toString()+(parseInt(id[1])+num))){
                return (parseInt(id[0])-1).toString()+(parseInt(id[1])+num)
        }
    }}

    const rightMovePiece = (id , num , end ) => {
        if((! Red.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))) &&(! RedKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))) && (! BlueKing.includes((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))) ){
            if(checkBounds((parseInt(id[0])+1).toString()+(parseInt(id[1])+num))){
                return (parseInt(id[0])+1).toString()+(parseInt(id[1])+num)
        }
    }}

    const leftJump = (id , num , end) => {
        if(end){
            console.log('gettinggg');
            if((! Red.includes((parseInt(id[0])-2).toString()+(parseInt(id[1])+num)))&& (! RedKing.includes((parseInt(id[0])-2).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])-2).toString()+(parseInt(id[1])+num)))&&(! BlueKing.includes((parseInt(id[0])-2).toString()+(parseInt(id[1])+num)))){
                if(checkBounds((parseInt(id[0])-2).toString()+(parseInt(id[1])+num))){
                    return (parseInt(id[0])-2).toString()+(parseInt(id[1])+num)
            }
        }
        
    }}

    const rightJump = (id , num , end) => {
        if(end){
            if((! Red.includes((parseInt(id[0])+2).toString()+(parseInt(id[1])+num))) && (! RedKing.includes((parseInt(id[0])+2).toString()+(parseInt(id[1])+num))) && (! Blue.includes((parseInt(id[0])+2).toString()+(parseInt(id[1])+num)))&& (! BlueKing.includes((parseInt(id[0])+2).toString()+(parseInt(id[1])+num)))){
                if(checkBounds((parseInt(id[0])+2).toString()+(parseInt(id[1])+num))){
                    return (parseInt(id[0])+2).toString()+(parseInt(id[1])+num)
                }
                else{
                    console.log("move not allowed!");
                }
                
            }
        }
    
    }

    const checkBounds = (id) =>{
        if((parseInt(id[0]) <= 8 && (parseInt(id[1])) <= 8 && (parseInt(id[0])) > 0 && (parseInt(id[1])) > 0)){
            return true
        }   
        else{
            return false
        }

    }

    const removePiece = async(colour , id ) => {
        let index;
        console.log(`trying to take piece at ${id} and my colour was ${colour}`);
        await socket.emit("takePiece", roomName, id)
        // if(colour === 'Red'){
        //     console.log(Red);
        //     index=Red.indexOf(id);
        //     Red.splice(index,1);           
        //     console.log(Red);
            
        // }else{
        //     console.log(Blue);
        //     index=Blue.indexOf(id);
        //     Blue.splice(index,1);         
        //     console.log(Blue.length);
        //     console.log(Blue)
        // }
    }

    const movePiece = async (colour ,id,availableMoves) => {
        let index;
        if(availableMoves.length){
                
            for(let x=0 ; x < availableMoves.length ; x++){
                console.log(availableMoves[x]);
                let piece= document.getElementById(availableMoves[x])
                piece.style.border = "5px solid green";
                setTimeout(()=>{piece.style.border = "0px"},3000)
                piece.style.boxSizing = "border-box"
                piece.addEventListener('click', function handleClick(e){  
                    e.preventDefault()
                    if(colour === 'Red'){
                        console.log(Math.abs(parseInt(id[0]) - parseInt(availableMoves[x][0])) );
                        if( Math.abs(parseInt(id[0]) - parseInt(availableMoves[x][0])) == 2 ){
                            // console.log(availableMoves[x]);
                            // console.log(id);
                            let location=(((parseInt(id[0]))+parseInt(availableMoves[x][0]))/2).toString() + ((parseInt(id[1])+ parseInt(availableMoves[x][1]))/2)
                            console.log(location);
                            let newLocation = availableMoves[x];
                            // console.log(new_id);
                            let oldLocation = id;
                            
                            socket.emit("movePiece", roomName, oldLocation, newLocation)
                            setTimeout((removePiece),1000, "Blue", location)
                            // piece.removeEventListener('click', handleClick)
                            setSelectedPiece('')
                        }
                        // console.log(Red);     
                        // piece.id=availableMoves[x]
                        let newLocation = availableMoves[x];
                        let oldLocation = id;
                        // index=Red.indexOf(id)
                        // Red[index]=availableMoves[x]
                        // console.log("minus");
                        socket.emit("movePiece", roomName, oldLocation, newLocation)
                        // piece.removeEventListener('click', handleClick)
                        setSelectedPiece('')
                        // console.log(Red);
                        // console.log(piece.id);
                    }else{
                        console.log(Math.abs(parseInt(id[0]) - parseInt(availableMoves[x][0])) );
                        if( Math.abs(parseInt(id[0]) - parseInt(availableMoves[x][0])) == 2 ){
                            // console.log(availableMoves[x]);
                            // console.log(id);
                            console.log((parseInt(id[0])-1).toString());
                            console.log(((parseInt(id[1]))))
                            console.log(((parseInt(availableMoves[x][1]))/2))
                            let location=(((parseInt(id[0]))+parseInt(availableMoves[x][0]))/2).toString() + ((parseInt(id[1])+ parseInt(availableMoves[x][1]))/2)
                            console.log(location);
                            let newLocation = availableMoves[x];
                            // console.log(new_id);
                            let oldLocation = id;
                            socket.emit("movePiece", roomName, oldLocation, newLocation)
                            setTimeout((removePiece),1000,'Red',location)
                            // piece.removeEventListener('click', handleClick)
                            setSelectedPiece('')
                        }
                        // console.log(Blue);     
                        // piece.id=availableMoves[x]
                        // index=Blue.indexOf(id)
                        // console.log(index);
                        // Blue[index]=availableMoves[x]                  
                        // console.log(Blue);
                        // console.log(piece.id);
                        let newLocation = availableMoves[x];
                        let oldLocation = id;
                        socket.emit("movePiece", roomName, oldLocation, newLocation)
                        // piece.removeEventListener('click', handleClick)
                        setSelectedPiece('')
                    }
                    
                })
            }
        }
    }



    const playerPieces= i => {
        console.log(coordinates);
        return coordinates[i].map((c) => { 
            if( Red.includes(c) ) {
                return pieceImg(c,redChip)
            } else if(Blue.includes(c)){
                pieceImg(c,blueChip)
            }
        })
    }

   

    const pieceImg = (id , img) => {
        return <GamePiece id={id} imageSource={img} />
    }

    const handleClick =() => {
        history.push("/")
        socket.disconnect(true)
    }

    const HandleTurn =() => {
        try{
            const player = gameData.players.find(player=> player.socketID === socketID); 
            if(player.colour===currentTurn){
                return (<p>It's your turn!</p>)
            }else{
                return (<p>Waiting for your opponent to make a move...</p>)
            }
        } catch (e){
            return (<p></p>)
        }
    }

    const handleForfeit =() => {
        let playerIndex = gameData.players.findIndex(player=> player.socketID === socketID)
        if (playerIndex===1){
            let winnerIndex = 0
            let winner = gameData.players[winnerIndex]
            socket.emit("end-game", roomName, winner.username)
        } else{
            let winnerIndex = 1
            let winner = gameData.players[winnerIndex]
            socket.emit("end-game", roomName, winner.username)
        }
    }
    return(
        <> 
            <div id="chipper-gamepage-container">           
                <button id="forfeit-btn" onClick={handleForfeit}>Forfeit</button>            
                <Gameboard  Red={Red} Blue={Blue} RedKing={RedKing} BlueKing={BlueKing} checkPiece={checkPiece}/>
                {/* {playerPieces(0)}           */}
                {/* {startGame()} */}

                <div id="underboard-container">
                    <HandleTurn/>
                    <div id="player-container">
                        <p>Red: {redPlayer} </p>
                        <p>Blue: {bluePlayer} </p>
                    </div>
                </div>

            </div>
        </>
    )




}
