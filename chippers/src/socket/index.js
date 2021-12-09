import { fas } from "@fortawesome/free-solid-svg-icons";

let socketURL = "https://nintino-sockets.herokuapp.com/";

const io = require("socket.io-client");

export const socket = io(socketURL,{
    transports:['websocket'],
    upgrade:false
});