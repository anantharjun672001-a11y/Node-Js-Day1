import http from "http";




const port=5000;



http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("Hello welcome to the backend");
    res.end();
}).listen(port,() =>{
    console.log(`server is started and running on the port${port}`);
})