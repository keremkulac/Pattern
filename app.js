const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const redirectrouter = require('./routers/redirectRouter');
const longurlrouter = require('./routers/longurlRouter');
app.use(redirectrouter);
app.use(longurlrouter);

  app.listen("3000",() => {
    console.log("Server port 3000");
  
  });