import http from "http";
import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import {format} from "date-fns";


const app = express();

dotenv.config();

const port=process.env.PORT || 5000;


app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="text-align:center;">Welcome to Backend </h1>`);
})

app.get("/file",(req,res)=>{
    let today=format(new Date(),"dd-MM-yyyy-HH-mm-ss");
    //console.log(today);
    const filepath=`TimeStamps/${today}`;
    fs.writeFileSync(filepath,`${today}`,"utf-8")
    let data=fs.readFileSync(filepath,"utf-8")
    try{
        res.status(200).send(data);
    }catch(error){
        res.status(503).json({message:"Failed To Create A File"});
    }
})

/* http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("Hello all welcome to the node backend");
    res.end();
}).listen(port,() =>{
    console.log(`server is started and running on the port${port}`);
}) */

app.listen(port,()=>{
    console.log("server started");
})