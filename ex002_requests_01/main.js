/*********Response, Request and Routers in Express***********/


const express = require('express');
const hostname = '127.0.0.1';
const app = express();
const port = 3000;

app.use(express.static('public'));

// 1> get request : A GET request, in simple terms, is a way for you to grab data from a data source with the help of the internet

app.get('/', (req, res) => {
    console.log('get request claimed');
    res.send('hello world how are you');
});

// 2> post request : In computing, POST is a request method supported by HTTP used by the World Wide Web. By design, the POST request method requests that a web server accept the data enclosed in the body of the request message, most likely for storing it. 

//  there are two ways of testing it :

//          1) made a html file , make it public , and do there a post request , now run that html in server
//          2) use postman (industrial way of doing rquest to a server)

app.post('/', (req, res) => {
    console.log('post request clamied');
    res.send('post requst got');
})

// 3> put request : can be done in a same way and delete also

app.put('/', (req, res) => {
    console.log('put request clamied');
    res.send('put request got');
})


// now if want to send any file as respose to anything we use res.sendfile()

app.get('/home',(req,res)=>{
    res.sendFile('templates/home.html',{root: __dirname});      // here we we don't have to make template as public.. and 
});                                                             // we have not defined the absolute path of the file so have mentioned the root name 





app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
