const express = require('express'); // to install express type `npm i express`

const app = express();   // running express module


const port = 3000;      // assigning port address to port value 
const server = require('http').createServer(app);   // created a server for snake game 

app.get("/", (req, res) => {
  res.send("Snake game server");                // sending response to server
});

app.listen(port => {
  console.log(`Listening at port ${port}`);       // listening at assigned port
}
       

// sample node js server for snake game contributed by - mahendra gandham
           
