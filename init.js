const mongoose = require('mongoose'); //mongoose
const Chat = require("./models/chats.js");

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/telegram')
}

main()
    .then( ()=>{
        console.log("Database Connection Successfull");
    })
    

let allChats = [
    {
        from: "Aarav",
        to: "Diya",
        msg: "Good morning!",
        created_at: new Date()
    },
    {
        from: "Kabir",
        to: "Ananya",
        msg: "Did you finish the assignment?",
        created_at: new Date()
    },
    {
        from: "Rohan",
        to: "Meera",
        msg: "Let's meet after class.",
        created_at: new Date()
    },
    {
        from: "Ishita",
        to: "Arjun",
        msg: "Happy Birthday! Have a great day!",
        created_at: new Date()
    },
    {
        from: "Vikram",
        to: "Sneha",
        msg: "Can you call me when you're free?",
        created_at: new Date()
    },
    {
        from: "Karan",
        to: "Simran",
        msg: "The movie starts at 7 PM.",
        created_at: new Date()
    },
    {
        from: "Nisha",
        to: "Yash",
        msg: "Thanks for your help yesterday.",
        created_at: new Date()
    },
    {
        from: "Aditya",
        to: "Pooja",
        msg: "I'll send the documents tonight.",
        created_at: new Date()
    },
    {
        from: "Tanvi",
        to: "Dev",
        msg: "Where are you right now?",
        created_at: new Date()
    },
    {
        from: "Sahil",
        to: "Ritika",
        msg: "Congratulations on your new job!",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);