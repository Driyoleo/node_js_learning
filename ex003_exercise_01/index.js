const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname);
const len = files.length;


for (let e = 0; e < len; e++) {
    var ext = files[e].split('.')[1];
    if (ext == undefined || ext == 'json' || ext == 'js') {             // this will filter all the folders , json and js files
        
    }else{
        if (!fs.existsSync(__dirname + `/${ext}`)) {                    // this checks the existance of a folder or file in a directory
            fs.mkdirSync(__dirname + `/${ext}`, { recusive: true })     // this will create a folder 
        }
        
    }
}
console.log('folders created');


for (e in files){
    let ext = files[e].split('.')[1];
    if (ext == undefined || ext == 'json' || ext == 'js'){
    }else{
        fs.rename(__dirname + `/${files[e]}`, __dirname + `/${ext}/${files[e]}`, (err) => {
            if (err) throw err;
        });
    };
};
console.log('rearrangement completed');








//// these section have all the codes in which i failed to make the problem.. but they are important cause they have taught me several things later i will restudy them and put comments on important point to remember


/*
notes : 

1>
var ext = files[e].split('.')[1];

on doing this we ...
- we can get the extensions in ext
- but the folder doesn't have any extension so then ext becomes undefined

by this we can get the folders

exapmle
jpg cat.jpg
pdf harry.pdf
zip harry.zip
js index.js
undefined jpg
jpg name.jpg
png name.png
undefined node_modules
json package-lock.json
json package.json
txt question.txt
zip rohan.zip
pdf this.pdf

2> 
const files = fs.readdirSync(__dirname);

it returns an object which contains name of all the files and folders in string


3>

if (!fs.existsSync(__dirname + `/${ext}`)) {                    // this checks the existance of a folder or file in a directory
    
    - .existsSync take directory path as an argument
    
    
    
4>
    
fs.mkdirSync(__dirname + `/${ext}`, { recusive: true })     // this will create a folder 
    
- mkdirSync if given only one argument then it will take it as file name and as it is it will create a folder or file in the main directory
- to avoid this we give { recursive : true}
    
*/