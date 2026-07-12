const express = require("express");
const app = express();
const port = 8080;

const methodOverride = require("method-override");

app.use(methodOverride("_method"));
const Chat = require("./models/chats.js");

//public
const path = require("path");
app.use(express.static(path.join(__dirname,"public")));

//views EJS
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//for new data parsing from post request to server
app.use(express.urlencoded({extended:true}));


//MONGOOSE
const mongoose = require('mongoose'); //mongoose

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/telegram')
}

main()
    .then( ()=>{
        console.log("Database Connection Successfull");
    })
    .catch( (err)=>{
        console.log(err);
    })

// let chat1 = new Chat({
//     from:"Neha",
//     to:"Avni",
//     msg:"Hi how are you neha",
//     created_at: new Date()
// })

// chat1.save().then( (res)=>{
//     console.log(res);
// });



app.get("/chats",async(req,res)=>{
    let chats = await Chat.find({})
    res.render("allChats.ejs",{chats});
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/chats",async(req,res)=>{
   let {from,to,msg}= req.body; //use url encoded middlware for this

   let newChat = new Chat ( {
    from:from,
    to:to,
    msg:msg,
    created_at: new Date()
   } )

   await newChat.save();
   console.log("chat is saved");
   res.redirect("/chats");
})

app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let chatToEdit = await Chat.findById(id);
    res.render("edit.ejs",{chatToEdit});
})

app.put("/chats/:id",async(req,res)=>{
    let {id} = req.params;
    let {msg:newmsg}=req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true,new:true});

    console.log(updatedChat);
    res.redirect("/chats");
})

app.listen( port,()=>{
    console.log("port is listening");
})