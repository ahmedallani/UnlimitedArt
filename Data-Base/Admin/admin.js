  
const express = require('express');
const { useCallback } = require('react');




const loginAdmin= (req,callback)=>{
    var userData=null
    var password=null
       connection.query(`SELECT * from Admin where name="${req.name}"`, function (error, results) {
           if(results.length){
               userData=results[0]
               password=results[0].password
               {bcrypt.compareSync(req.Password, password)?callback({error:null,userData}):callback({error:"Wrong Password",userData:null})}
           }else{
               callback({error:"name Unvalid",userData:null,})
           }
         }); 
  }