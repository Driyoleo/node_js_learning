/***********HOW to set up server***************/
/*
    follow the steps below :

    1> create your js file .
    2> open integrated terminal of that file . 
    3> initiate your project by :   npm init -y                // -y will skip all the questions asked by terminal
    4> install express by :         npm i express@4            // @4 means i need to install the version 4 of express
    5> install nodemon by :         npm i nodemon              // nodemon is installed to regularly restart your server 
    6> apply nodemon on js file :   nodemon main.js            // main.js is your js file 
    
    */
   
   // method in node.js:
   /*
   const http = require('node:http');
   const hostname = '127.0.0.1';
   const port = 3000;
   const server = http.createServer((req, res) => {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Hello World\n');
    });
    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/

// method in express.js :

const express = require('express');                             // importing express module 
const hostname = '127.0.0.1';                                   // giving hostname , here it is given a localhost
const app = express();                                          // creating app
const port = 3000;                                              // port name

/************************************************************************************************************************/

// now we will learn about sattic and public files:
// static files are those files which are kept private at server side and user can't fetch it
// public files are those files which the user can get and fetch it

// example :
// here we have a public folder which i want to show to the user :

app.use(express.static('public'));

// now all files inside my public folder can be seen by user by get request 
// but other than that all other files are private and safe .. and these files are called static files



/************************************************************************************************************************/


app.get('/',(req,res)=>{
    res.send("hello world");
})

// now if we want to add more pages :

app.get('/about',(req,res)=>{
    res.send("here is about us");
})

app.get('/home',(req,res)=>{
    res.send("here is about us");
})

// but if we want to build a logic to get all the end points as per user
// we use req.params and req.query


app.get('/:slug',(req,res)=>{
    res.send(`here is ${req.params.slug}`);              // req.params is a object which contains value of all the variables introduced in the url
    console.log(`req.params = ${req.params}`);
    console.log(`req.query = ${req.query}`);                // req
})


/************************************************************************************************************************/



app.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/************************************************************************************************************************/

// note : before sending or saving in somewhere you must delete the module file cause it has many things kept in it .. but don't worry your data will not be lost as you can easily get it back by just writting on terminal :  npm i 


