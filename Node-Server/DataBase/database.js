 const mysql=require('mysql2');

 const db=mysql.createPool({
     host:'localhost',
     user:'root',
     password:'Elagon@7',
     database:'node'

 });



 


 module.exports=db.promise();