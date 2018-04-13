const express = require('express');
//Setting app that will listen and handle requests
const app = express();

app.get('/', (req,res) => {
  res.send({hi: 'there'});
});

//Setting port
//If there is not defined use the value of 5000
const PORT = process.evn.PORT || 5000;
app.listen(PORT);
