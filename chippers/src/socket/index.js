import { fas } from "@fortawesome/free-solid-svg-icons";

let socketURL = "http://localhost:1234";

const io = require("socket.io-client");

export const socket = io(socketURL,{
    transports:['websocket'],
    upgrade:false
});