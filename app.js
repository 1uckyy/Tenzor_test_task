const express = require("express");
const app = express();

const mongoClient = require("mongodb").MongoClient;
  
const url = "mongodb://localhost:27017/";
 
mongoClient.connect(url, function(err, client){
      
    const db = client.db("usersdb");
    const collection = db.collection("users");
 
    if(err) return console.log(err);
      
    collection.find().toArray(function(err, results){
                 
        console.log(results);
        client.close();
    });
});

app.get("/", function(request, response){
     
    response.send("some text");
});
app.listen(3000);
