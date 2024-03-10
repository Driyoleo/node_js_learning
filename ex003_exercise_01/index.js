const fs = require('fs');
const path = require('path');
const { dirname } = require('path');
// const express = require('express');
// console.log(fs.readdirSync(__dirname));

const files = fs.readdirSync(__dirname);
const folder = [];
const len = files.length;
// const ext = 'jpg'
console.log(__dirname)
console.log(fs.existsSync(__dirname + '/jpg'));


for (let e = 0; e < len; e++) {
    var ext = files[e].split('.')[1];
    if (ext == undefined || ext == 'json' || ext == 'js') {
        
    }else{
        if (!fs.existsSync(__dirname + `/${ext}`)) {
            fs.mkdirSync(__dirname + `/${ext}`, { recusive: true })
            console.log(ext)
        }

    }
}

// finally done we have created the folders.. next day we will see how to move all those files to their respective directories.....




//   now putting all folders in their respective folders except .json and js files 


for (e in files){
    let ext = files[e].split('.')[1];
    if (ext == undefined || ext == 'json' || ext == 'js'){
        // console.log(ext , false);
    }else{
        fs.rename(__dirname + `/${files[e]}`, __dirname + `/${ext}/${files[e]}`, (err) => {
            if (err) throw err;
            // console.log('Rename complete!');
        });
        // console.log(ext , true);
    }
}








//// these section have all the codes in which i failed to make the problem.. but they are important cause they have taught me several things later i will restudy them and put comments on important point to remember


// var goods = files.filter((e)=>{
//     if (e.split('.')[1] in ['.json','js',undefined]){
    //     }else {
        //         return e
        //     }
        // });
        // console.log(goods)
        
        
        
        
        
        
        
        
        
        
        
        
        // this way we can move file from one directory to another

// for (i in files){
//     console.log(i)
// }




// for (let e = 0; e < len; e++) {
//     var ext = files[e].split('.')[1];
//     if (ext != undefined) {
//         if (!fs.existsSync(__dirname + `/${ext}`)) {
//             fs.mkdirSync(__dirname + `/${ext}`, { recusive: true })
//             console.log(ext)
//         }
//     }
// }

// for (let e = 0 ; e < len ; e++){
//     var ext = files[e].split('.')[1];
//     // saturate undefined
//     if (ext == undefined){
//         if (!(ext in folder)){
//             console.log(ext);
//             folder.push(ext);
//         }
//     }







// if (ext != undefined){
//     if (!(fs.existsSync('./')){
//         console.log(files[e],ext)
//     }
// }




// if (ext == undefined || fs.existsSync('ext')){
//     console.log(false);
// }else{
//     console.log(true)
// }
// console.log(ext, files[e])
// add folder





/* note :
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
*/
