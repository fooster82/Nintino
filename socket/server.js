const server = require("http").createServer();
const Game = require("./model")

const io = require("socket.io")(server, {
    cors:{
        origin: "*",
        method: ["GET", "POST"],
        credentials: true
    }
});

const game = new Game();

io.on("connection", socket => {
    console.log(("connected"));

    let socketID = socket.id
    socket.on("create", (roomName, cb) =>{
        game.addGame(roomName);
        cb({
            message: "game successfully created"
        })
        console.log(`We just created this game ${game}`);
    })

    socket.on("joinRoom", (username, roomName, cb)=>{
        game.addPlayer(username, roomName, socketID);
        socket.join(roomName);
        try{
            let currentGame = game.getRoom(roomName);
            console.log(`currentGame ${currentGame}`);
            cb({
                players: currentGame.players,
                host: currentGame.host
            })
            io.to(roomName).emit("updatedPlayers", currentGame.players)
            if (currentGame.players.length==2){
                console.log(`Setting colour`);
                game.setColour(roomName)
                io.to(roomName).emit("game-start",true)
            }
        }
        catch (e){
            console.warn(e);
        }
    })

    socket.on("disconnect", () =>{
        let resp = game.deletePlayer(socketID)
        if (resp.updatedPlayers && resp.roomName){
            let {updatedPlayers, roomName} = resp;
            console.log((updatedPlayers));
            if (!updatedPlayers.length){
                game.deleteRoom(roomName)
            }
            io.to(roomName).emit("updatedPlaters", updatedPlayers)
        } else{
            console.log(resp.message);
        }
    })

    socket.on("game-start", (roomName) => {
        io.to(roomName).emit("game-start", true)
    })

    socket.on("check-room", (roomName,cb) => {
        let room = game.checkRoom(roomName)
        cb({
            roomExists: room
        })
        console.log(`room ${room}`);
    })

    socket.on("movePiece", (roomName, oldLocation, newLocation) => {
        console.log(`asking piece to move from ${oldLocation} to ${newLocation}`);
        let resp = game.movePiece(roomName, oldLocation, newLocation)
        console.log(resp);
        rand = Math.random();
        io.to(roomName).emit("updatedPieces", resp,rand)
    })

    socket.on("takePiece", (roomName, location)=>{
        console.log(`Trying to take piece at ${location}`);
        let resp = game.takePiece(roomName, location)
        console.log(resp);
        rand = Math.random();
        io.to(roomName).emit("updatedPieces", resp,rand)
    })

    socket.on("crown", (roomName, location)=>{
        let resp = game.crown(roomName, location)
        rand = Math.random();
        io.to(roomName).emit("updatedPieces",resp)
    })

    socket.on("getGameDetails",(roomName)=>{
        try{
            let currentGame = game.games.find(game => game.room === roomName)
            console.log(`This is the current game ${currentGame}`);
            rand = Math.random();
            io.to(roomName).emit("updatedPieces", currentGame,rand)
        } catch (e){
            console.warn(e);
        }
    })
})

module.exports = server;