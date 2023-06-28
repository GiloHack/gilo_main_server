const mysql = require("mysql")
const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"gilo3D"
})
module.exports=connection
