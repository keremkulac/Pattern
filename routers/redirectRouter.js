const router = require('express')();
const db = require('../database/database');



router.get("/:shorturlid",async(req,res) =>{
    let shorturlid = req.params.shorturlid;
    let sqlquery = 'SELECT * FROM links WHERE shorturlid = ?';
    db.query(sqlquery,[shorturlid], await function (err, rows) {
     
    if(err) {
    console.log("mysql error",err);
    throw err;
    }
    console.log(rows[0].longurl);
    res.redirect(rows[0].longurl);
    });
    
});

  module.exports = router;
  