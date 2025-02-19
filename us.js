// Create a simple routing system within the Node.js http module 
// that handles different paths (e.g., /home, /about, /contact). Send a 
// different response for each route, such as "Welcome to Home," "About Us,"
// etc.
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/home'){
        res.writeHead(200,{ 
             'Content-Type':'text/plain'
        });
        res.end('Welcome to Home');
    }
    else if(req.url === '/about'){
        res.writeHead(200,{ 
             'Content-Type':'text/plain'
        });
        res.end('About us');
    }
    else if(req.url === '/contact'){
        res.writeHead(200,{ 
             'Content-Type':'text/plain'
        });
        res.end('contact details');
    }
    else{
        res.writeHead(404,{
              'Content-Type':'text/plain'

        });
        res.end('page not found');       
    }         
})
server .listen(3000, () =>{
    console.log('server is running on port 3000');

})





