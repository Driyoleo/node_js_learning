// const express = require("express");

const express = require('express');
const hostname = '127.0.0.1';
const app = express();
const port = 3000;
/*
    middleware :  it is used to acccess the request send before sending any response and it can be also used to modify it

        synatx :

            app.use(<function>);
            - middleware can be set up with app.use()
            - this take an function as a argument
            - e.g:

            app.use((req,res,next)=>{
                // code to be run
                next();
            })
            
            -inside the function it three arguments:
                                - req : for request for which it will opereate
                                - res : to send respose 
                                - next: to pass the req to other headers
*/
app.use((req,res,next)=>{
    console.log('middleware 1');                              // here sequence matter very much
    // console.log(req);                                      // req is a very large object with many values 
    req.url = '/about';                                       // we can change the url value of the  request by this
    next();
})

app.use((req,res,next)=>{
    console.log('middleware 2');                              // we can add multiple middleware 
    next();                                                   // if we don't give next req will become hanging no respose is send to the browser
})

app.use((req,res,next)=>{
    res.send('nothing');                                      // if we send response here then further we can't send response                                   
    // next();                                                // and next will show error so if sending response here ignore next
})                                                            // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.get('/about',(req,res)=>{
    res.send('hello about');
})
app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});