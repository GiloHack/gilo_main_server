const express = require("express")
const router = express.Router()
const connection = require("../db/connection")
const mysql = require("mysql")
const app = express()
const cors = require("cors")
app.use(cors({origin:"http:127.0.0.1:3000"}))


//config
router.get("/config", (req,res)=>{
        connection.connect(err=>{
            if(err){
                res.json({"Err":err})
            }else{
                res.json("DB Connected")
            }
        })
})
//homepage
router.get("/", (req, res)=>{
    res.json({
        "msg":"welcome to Homepage"
    })
})

//services
    //Get Services
    //All
    router.get("/get_services", (req,res)=>{
            res.json({
                "msg":"Getting all Services"
            })
    })
    //By id
    router.get("/get_service/:id", (req,res)=>{
                const id = req.params.id
                res.json({
                    "msg":"Getting Service of Id "+id
                })
    })



    //Edit Services
    router.get("/edit_service/:id", (req,res)=>{
        const id = req.params.id
        res.json({
            "msg":"Editing Serice of Id "+id
        })
    })
    
    //Delete Services
    //All
    router.get("/delete_services", (req,res)=>{
        res.json({
            "msg":"Delete all Services"
        })
})
    //By id
    router.get("/delete_service/:id", (req,res)=>{
                const id = req.params.id
                res.json({
                    "msg":"Deleting Service of Id "+id
                })
    })



    //users
        //Add
        router.post("/user_register", (req,res)=>{
             const query = `INSERT INTO users(fname,lname,email,phone,password) VALUES('${req.body.fname}','${req.body.lname}','${req.body.email}', '${req.body.phone}', '${req.password}')`
             connection.query(query, (error,result)=>{
                   if(error){
                      res.json({"err:":error})
                   }else{
                      res.json({"msg":result})
                   }
             })
        })

        //login
        router.post("/user_login", (req, res)=>{
             const query = `SELECT * FROM users WHERE email='${req.body.email}' AND password='${req.body.password}'`
             connection.query(query, (err,result)=>{
                if(err){
                    res.json({"err":err})
                }else{
                    res.json({"msg":result})
                }
             })
        })
       //fetch
       router.get("/fetch_users", (req, res)=>{
            connection.query("SELECT * FROM users", (error, result)=>{
                  if(error){
                    res.json({"err: ":error})
                  }else{
                    res.json({"msg:":result})
                  }
            })
       })
      //fetch some user
      router.get("/fetch_user/:id", (req, res)=>{
            const id = req.params.id
            const query = `SELECT * FROM users WHERE user_id=${mysql.escape(id)}`
             connection.query(query, (error, result)=>{
                      if(error){
                        res.json({"err: ":error})
                      }else{
                        res.json({"msg:":result})
                      }
                })
     })

     //edit some user
     router.get("/edit_user/:id", (req, res)=>{
        const id = req.params.id
        
        const firstname = 'firstname'
        const lastname = 'lastname'
        const email = 'email'
        const phone = 'phone'
        const password = 'password'
        const query = `UPDATE users SET fname='${firstname}', lname='${lastname}', email='${email}', phone='${phone}', password='${password}' WHERE user_id=${mysql.escape(id)}`
         connection.query(query, (error, result)=>{
                  if(error){
                    res.json({"err: ":error})
                  }else{
                    res.json({"msg:":result})
                  }
            })
    })
    //delete users
    router.get("/delete_users", (req,res)=>{
         connection.query("DELETE FROM users", (error,result)=>{
               if(error){
                  res.json({"err":error})
               }else{
                   res.json({"msg":result})
               }
         })
    })
        //delete some users
        router.get("/delete_user/:id", (req,res)=>{
            const id = req.params.id
            const query = `DELETE FROM users WHERE user_id=${mysql.escape(id)}`
            connection.query(query, (error,result)=>{
                  if(error){
                     res.json({"err":error})
                  }else{
                      res.json({"msg":result})
                  }
            })
       })

       

    

module.exports = router