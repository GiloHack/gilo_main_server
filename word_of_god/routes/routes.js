const express = require("express")
const router = express.Router()
const axios = require("axios")

router.get("/", (req, res)=>{
    res.json({"msg":"welcome to word of god"})
})
router.get("/books/", async (req,res)=>{
      try{
            const response = await axios.get("https://bible-go-api.rkeplin.com/v1/books")
            res.json({"result":response.data})
      }
      catch(err){
         res.json({"err":err})
      }
})
router.get("/book/:book_id", async (req,res)=>{
        const book_id = req.params.book_id
        try{
                    const response = await axios.get("https://bible-go-api.rkeplin.com/v1/books/"+book_id+"/chapters")
                    res.json({"result":response.data})
        }catch(err){
            res.json({"err":err})
        }
})

router.get("/chapter/:book_id/:chapter_id", async (req,res)=>{
     const book_id = req.params.book_id
     const chapter_id = req.params.chapter_id
     try{
            const response = await axios.get("https://bible-go-api.rkeplin.com/v1/books/"+book_id+"/chapters/"+chapter_id)
            res.json({"result":response.data})
     }catch(err){
        res.json({"err":err})
     }
})

module.exports = router