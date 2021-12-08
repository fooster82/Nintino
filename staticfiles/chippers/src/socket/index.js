let socketURL = "http://localhost:1234";

const io = require("socket.io-client");

export const socket = io(socketURL,{
    extraHeaders: { "my-custom-header":"abcd"}
});