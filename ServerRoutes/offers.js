const express = require('express')
var router = express.Router();
const Jobs = require("../Data-Base/jobs/jobs");



router.get('/', function(req, res, next) {
    Jobs.retrieveJobs((result, error) => {
        if(result) {
          res.send(result)
        } else {
          res.send(error)
        }
      })
      });

      router.post('/deletepost', function(req, res, next) {
        console.log(req.body)
        Jobs.deletepost(req.body)
        
          });
     
 module.exports=router