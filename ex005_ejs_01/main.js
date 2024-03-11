/*
# ejs template enjine #

we use ejs to make tmplate websites or files for some same set of informtion or work just like functions.
for this we to:
*/


const express = require('express');
const hostname = '127.0.0.1';
const app = express();
const port = 4000;

// step 1: first set your view engine to ejs

app.set('view engine','ejs');

// step 2: now give response to the req as follows.

app.get('/:slug', (req, res) => {
    let title = req.params.slug
    res.render('index.ejs',{title : title})
})
/*
- render is used to send template files 
- in second argument we send variables which we want to place inside the template ejs 
*/

// step 3: put the variable passed here in your template as <%= <variable> %>

// step 4: now from browser send request you will get your required page
// http://127.0.0.1:4000/netflix


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});