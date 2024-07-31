const http = require('http');
 
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our homepage')
        return
    }
    //console.log(req)
    //res.write('I loved her you know')
    if(req.url==='/about'){
        res.end('What can I say about me??')
        return
    }
    res.end(`
        <h1>
        Return to home page
        </h1>
        <br>
        <a href="/">back Home</a>
        `)
})
server.listen(5000)