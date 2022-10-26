const router = require('express')();
const db = require('../database/database');
const ids = require('short-id');
const baseurl = "http://localhost:3000";

router.post("/longurl",(req,res) => {
    let longurl = req.body.longurl;
    let shorturlid = ids.generate();
    console.log(req.body.longurl);
    res.send(baseurl+"/"+shorturlid);
    let query = `INSERT INTO links(longurl,shorturlid) VALUES (?, ?);`;
    db.query(query, [longurl, shorturlid], (err, rows) => {
        if (err){
            console.log("longurl mysql error",err);
            throw err;
        } 
      });   
  });

  module.exports = router;
