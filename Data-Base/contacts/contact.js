const {connection}=require("../database")



const SendMessage= (req,callback)=>{
      var query=`INSERT INTO Messages (SenderId,message,ReceiverId,type) values ('${req.SenderId}','${req.message}','${req.ReceiverId}','${req.type}');`
      connection.query(query, function (error, results, fields) {
        console.log(results,error)
        callback(results,error)});

}
const RetrieveMessages= (req,callback)=>{
    var query=`select SenderId,message,ReceiverId,type From Messages where SenderId=${req.SenderId} and ReceiverId=${req.reciverid} or SenderId=${req.reciverid} and ReceiverId=${req.SenderId};`
    connection.query(query, function (error, results, fields) {
      console.log(results)
      callback(results,error)
    });

}
const AddToContact= (req,callback)=>{
    var query=`INSERT INTO Contacts (UsersId,FriendsId,UserType) values (${req.clientId},${req.FreelancerId},'client');`
    var query0=`INSERT INTO Contacts (UsersId,FriendsId,UserType) values (${req.FreelancerId},${req.clientId},'freelancer');`
    connection.query(query, function (error, results, fields) {
    }
      );
      connection.query(query0, function (error, results, fields) {
      }
        );
}
const getContactListClient= (req,callback)=>{
    var reslt=[]
    var query=`select FriendsId from Contacts where UsersId=${req.UserId} and UserType="client";`
    
    connection.query(query, function (error, results, fields) {
       
     results.map((elem)=>{
        var query0=`select FirstName,LastName,Field,imgsrc from Freelancers where id=${elem.FriendsId};`
       return  connection.query(query0, function (error, result, fields) {
           result[0].id=elem.FriendsId
           reslt.push(result)
       })
        })
        
});
setTimeout(()=>{  console.log(reslt)
    callback(reslt)},200)
  ////dont forget this
}

const getContactListFreelancer= (req,callback)=>{
  var reslt=[]
  var query=`select FriendsId from Contacts where UsersId=${req.UserId} and UserType="freelancer";`
  
  connection.query(query, function (error, results, fields) {
     console.log(results,error)
   results.map((elem)=>{
     console.log(elem.FriendsId)
      var query0=`select FirstName,LastName,imgsrc from Clients where id=${elem.FriendsId};`
     return  connection.query(query0, function (error, result, fields) {
         result[0].id=elem.FriendsId
         result[0].Field="clientnpm "
         reslt.push(result)
     })
      })
});
setTimeout(()=>{  console.log(reslt)
  callback(reslt)},200)
////dont forget this
}

module.exports={
    SendMessage,
    RetrieveMessages,
    AddToContact,
    getContactListClient,
    getContactListFreelancer
  }