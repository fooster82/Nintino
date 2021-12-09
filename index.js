const server = require("./server");
const port = process.env.PORT || 1234;
server.listen(port, () => {
    console.log(`Open for play on port ${port}!`)
});