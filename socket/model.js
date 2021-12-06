class Game {
    constructor(){
        this.games = [];
        this.players = [];
    }

    addGame(username, roomName){
        let game = {
            room: roomName,
            players:[],
            pieces: [
                {location: "26",colour = "blue",alive=true,king=false},
                {location: "46",colour = "blue",alive=true,king=false},
                {location: "66",colour = "blue",alive=true,king=false},
                {location: "86",colour = "blue",alive=true,king=false},
                {location: "17",colour = "blue",alive=true,king=false},
                {location: "37",colour = "blue",alive=true,king=false},
                {location: "57",colour = "blue",alive=true,king=false},
                {location: "77",colour = "blue",alive=true,king=false},
                {location: "28",colour = "blue",alive=true,king=false},
                {location: "48",colour = "blue",alive=true,king=false},
                {location: "68",colour = "blue",alive=true,king=false},
                {location: "88",colour = "blue",alive=true,king=false},
                {location: "11",colour = "red",alive=true,king=false},
                {location: "31",colour = "red",alive=true,king=false},
                {location: "51",colour = "red",alive=true,king=false},
                {location: "71",colour = "red",alive=true,king=false},
                {location: "22",colour = "red",alive=true,king=false},
                {location: "42",colour = "red",alive=true,king=false},
                {location: "62",colour = "red",alive=true,king=false},
                {location: "82",colour = "red",alive=true,king=false},
                {location: "13",colour = "red",alive=true,king=false},
                {location: "33",colour = "red",alive=true,king=false},
                {location: "53",colour = "red",alive=true,king=false},
                {location: "73",colour = "red",alive=true,king=false},

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
        if (room){
            playerCount = room.players.length
            if (playerCount == 2){
                return(false);
            }
        }else{
            return (!!room)
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
        let room = this.getRoom(roomName);
        let piece = room.pieces.find(piece => piece.location === oldLocation)
        piece.location = newLocation;
        return room
    }

    takePiece(roomName, location){
        let gameIndex = this.games.findIndex(game => game.room === roomName)
        let pieceIndex = this.games[gameIndex].pieces.findIndex(piece=> piece.location === location)
        this.games[gameIndex].pieces.splice(pieceIndex,1)
        return this.games[gameIndex]
    }

}