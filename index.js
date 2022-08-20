const Express = require("express");
const express = Express();

// select server port from here:
const port = 900;

// define server files path
express.use(Express.static('server'));

// server listen
express.listen(port, function()
{
    console.log(`Server started at port: ${port}`);
});