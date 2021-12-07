class Game {
    constructor(){
        this.games = [];
        this.players = [];
    }

    addGame(roomName){
        let game = {
            room: roomName,
            players:[],
            currentplayer:"",
            pieces: [
                {location: "26",colour : "blue",alive:true,king:false},
                {location: "46",colour : "blue",alive:true,king:false},
                {location: "66",colour : "blue",alive:true,king:false},
                {location: "86",colour : "blue",alive:true,king:false},
                {location: "17",colour : "blue",alive:true,king:false},
                {location: "37",colour : "blue",alive:true,king:false},
                {location: "57",colour : "blue",alive:true,king:false},
                {location: "77",colour : "blue",alive:true,king:false},
                {location: "28",colour : "blue",alive:true,king:false},
                {location: "48",colour : "blue",alive:true,king:false},
                {location: "68",colour : "blue",alive:true,king:false},
                {location: "88",colour : "blue",alive:true,king:false},
                {location: "11",colour : "red",alive:true,king:false},
                {location: "31",colour : "red",alive:true,king:false},
                {location: "51",colour : "red",alive:true,king:false},
                {location: "71",colour : "red",alive:true,king:false},
                {location: "22",colour : "red",alive:true,king:false},
                {location: "42",colour : "red",alive:true,king:false},
                {location: "62",colour : "red",alive:true,king:false},
                {location: "82",colour : "red",alive:true,king:false},
                {location: "13",colour : "red",alive:true,king:false},
                {location: "33",colour : "red",alive:true,king:false},
                {location: "53",colour : "red",alive:true,king:false},
                {location: "73",colour : "red",alive:true,king:false},

            ],
        }
        this.games.push(game);
        return game;
    }

    addPlayer(username, roomName, socketID){
        let player = {
            username: username,
            socketID: socketID,
            colour: "",
        }
        try{
            let game = this.getRoom(roomName);
            console.log(`Player trying to join this game ${game}`);
            if (!!game){
                game.players.push(player);
            }
        } catch(e){
            console.warn(e);
        }
    }

    getRoom(roomName){
        try{
            const currentGame = this.games.find(game=>game.room===roomName)
            return currentGame
        } catch (e){
            return (null);
        }
    }
    checkRoom(roomName){
        let room = this.getRoom(roomName);
        console.log(room);
        if (room){
            let playerCount = room.players.length
            console.log(`Player count ${playerCount}`);
            if (playerCount == 2){
                return(false);
            }else{
                return (!!room)
            } 
        }
    }

    deletePlayer(socketID){
        for (let i=0; i<this.games.length; i++){
            try{
                let playerIndex = this.games[i].players.findIndex(player=>player.socketID===socketID)
                if (playerIndex > -1){
                    this.games[i].players.splice(playerIndex, 1);
                    let roomName = this.games[i].room;
                    return { updatedPlayers: this.games[i].players, roomName: roomName}
                }
            }catch (e){
                console.warn(e);
            }
        }
        return{message:"No players found with that ID"};
    }

    deleteRoom(roomName){
        let gameIndex = this.games.findIndex(game => game.roomName ===roomName);
        this.games.splice(gameIndex, 1);
        return this.games
    }

    movePiece(roomName, oldLocation, newLocation){
        try{
            let room = this.getRoom(roomName);
            let piece = room.pieces.find(piece => piece.location === oldLocation)
            piece.location = newLocation;
            let currentplayer = room.currentplayer
            let players = room.players
            if (currentplayer === players[0].username){
                currentplayer = players[1].username
            } else {
                currentplayer = players[0].username
            }
            return room

        }catch (e){
            return null
        }
    }

    takePiece(roomName, location){
        try{
            let gameIndex = this.games.findIndex(game => game.room === roomName)
            let pieceIndex = this.games[gameIndex].pieces.findIndex(piece=> piece.location === location)
            this.games[gameIndex].pieces[pieceIndex].alive = false
            return this.games[gameIndex]

        }catch (e){
            return null
        }
    }

    setColour(roomName){
        let currentplayer = this.getRoom(roomName).currentplayer
        let players = this.getRoom(roomName).players;
        let coinflip = Math.floor(Math.random()*2);
        console.log(`coinflip ${coinflip}`);
        if (coinflip ===0){
            players[0].colour = "red";
            players[1].colour = "blue";
            currentplayer = players[0].username;
        } else {
            players[0].colour = "blue";
            players[1].colour = "red";
            currentplayer = players[1].username;
        }
        console.log(`Playerlist with colours ${players[0].username} ${players[0].colour}`);
        return players
    }

    crown(roomName, location){
        let room = this.getRoom(roomName);
        let piece = room.pieces.find(piece => piece.location===location)
        piece.king = true
        return room
    }
}

module.exports = Game;