const express = require("express")
const dotenv = require("dotenv")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")


//routes
const GILO_ROUTE = require("./gilo3d/routes/routes.js")
const BIBLE_ROUTE = require("./word_of_god/routes/routes.js")
dotenv.config()

const PORT = process.env.SERVER_PORT

app.listen(PORT, ()=>{
        console.log("Listening to PORT : "+PORT)
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(cors({origin:"http://localhost:3000"}))
//middlewares

app.use("/gilo3d", GILO_ROUTE)
app.use("/word_of_god/", BIBLE_ROUTE)