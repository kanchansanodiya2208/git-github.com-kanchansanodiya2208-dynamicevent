const bodyParser = require('body-parser');
const express = require('express');
const eventroutes = require('./routes/events');
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/events',eventroutes);

app.use((error,req, res, next)=>{
    const status = error.status || 500;
    const message = error.message || 'Somthing went Wrong';
    res.status(status).json({message : message});

});

app.listen(8080);

