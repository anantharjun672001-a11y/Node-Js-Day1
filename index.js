import http from "http";
import dotenv from "dotenv";


dotenv.config();

const port=process.env.PORT || 5000;





http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("Hello all welcome to the node backend");
    res.end();
}).listen(port,() =>{
    console.log(`server is started and running on the port${port}`);
})