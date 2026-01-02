import http from "http";
import dotenv from "dotenv";
import express from "express";
import { log } from "console";


const app = express();

dotenv.config();

const port=process.env.PORT || 5000;


app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="text-align:center;">Welcome to Backend </h1>`);
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