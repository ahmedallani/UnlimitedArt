const express = require('express');
var router = express.Router();
const contact = require("../Data-Base/contacts/contact")

router.post('/addtocontact', function(req, res, next) {
  console.log(req.body)
    contact.AddToContact(req.body)
      });

router.post('/contactlistc', function(req, res, next) {
       contact.getContactListClient(req.body,(result)=>{
           console.log("==>",result)
           res.send(result)
       })
    });

    router.post('/contactlists', function(req, res, next) {
      contact.getContactListFreelancer(req.body,(result)=>{
          console.log("==>",result)
          res.send(result)
      })
   });

router.post('/getmessages', function(req, res, next) {
  console.log(req.body)
        contact.RetrieveMessages(req.body,(result)=>{
         res.send(result)
        })
          });

router.post('/sendmessage', function(req, res, next) {
        contact.SendMessage(req.body,(result)=>{
            console.log(result)
         res.send(result)
        })
          });

module.exports=router