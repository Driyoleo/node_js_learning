/* mongodb CRUED operationns */

// 1> we have to switched to our database

use('dumy_01');

// 2> select the collection of database in which you want to do work

// var collec =  db.school;
// console.log(collec);

// // 3> now we can do all our CRUED operations on the collection inside our database

// // a> create : 

// db.createCollection("students");

db.createCollection("students");
var stud = db.students;
// console.log(students)


// // b> insert : insertion of data inside database

// db.students.insertOne({"class":"I" , "strength":45});
// db.students.insertMany([
//     {"class": "I", "total_strength": 45, "girls_strength": 22, "boys_strength": 23},
//     {"class": "II", "total_strength": 50, "girls_strength": 25, "boys_strength": 25},
//     {"class": "III", "total_strength": 55, "girls_strength": 28, "boys_strength": 27},
//     {"class": "IV", "total_strength": 60, "girls_strength": 30, "boys_strength": 30},
//     {"class": "V", "total_strength": 65, "girls_strength": 32, "boys_strength": 33},
//     {"class": "VI", "total_strength": 70, "girls_strength": 35, "boys_strength": 35},
//     {"class": "VII", "total_strength": 75, "girls_strength": 38, "boys_strength": 37},
//     {"class": "VIII", "total_strength": 80, "girls_strength": 40, "boys_strength": 40},
//     {"class": "IX", "total_strength": 85, "girls_strength": 42, "boys_strength": 43},
//     {"class": "X", "total_strength": 90, "girls_strength": 45, "boys_strength": 45},
//     {"class": "XI", "total_strength": 95, "girls_strength": 48, "boys_strength": 47},
//     {"class": "XII", "total_strength": 100, "girls_strength": 50, "boys_strength": 50}
// ]
// )


// c> reading data: we can get all the data from database like this

// var data = db.students.find();
// // console.log(data);
// for (const item of data) {
//     console.log(item)   
// }


/* output :
{
    _id: ObjectId('65eff316c57108befa2f2aed'),
    class: 'I',
    total_strength: 45,
    girls_strength: 22,
    boys_strength: 23
  }
  {
    _id: ObjectId('65eff316c57108befa2f2aee'),
    class: 'II',
    total_strength: 50,
    girls_strength: 25,
    boys_strength: 25
  }
  {
    _id: ObjectId('65eff316c57108befa2f2aef'),
    class: 'III',
    total_strength: 55,
    girls_strength: 28,
    boys_strength: 27
  }
  {
    _id: ObjectId('65eff316c57108befa2f2af0'),
    class: 'IV',
    total_strength: 60,
    girls_strength: 30,
    boys_strength: 30
  }
  {
    _id: ObjectId('65eff316c57108befa2f2af1'),
    class: 'V',
    total_strength: 65,
    girls_strength: 32,
    boys_strength: 33
  }
  {
    _id: ObjectId('65eff316c57108befa2f2af2'),
    class: 'VI',
    total_strength: 70,
    girls_strength: 35,
    boys_strength: 35
  }
  {
    _id: ObjectId('65eff316c57108befa2f2af3'),
    class: 'VII',
    total_strength: 75,
    girls_strength: 38,
    boys_strength: 37
  }
  {
    _id: ObjectId('65eff316c57108befa2f2af4'),
    class: 'VIII',
    total_strength: 80,
    girls_strength: 40,
    boys_strength: 40
  }
  {
    _id: ObjectId('65eff316c57108befa2f2af5'),
    class: 'IX',
    total_strength: 85,
    girls_strength: 42,
    boys_strength: 43
  }
  {
    _id: ObjectId('65eff316c57108befa2f2af6'),
    class: 'X',
    total_strength: 90,
    girls_strength: 45,
    boys_strength: 45
  }
  {
    _id: ObjectId('65eff316c57108befa2f2af7'),
    class: 'XI',
    total_strength: 95,
    girls_strength: 48,
    boys_strength: 47
  }
  {
    _id: ObjectId('65eff316c57108befa2f2af8'),
    class: 'XII',
    total_strength: 100,
    girls_strength: 50,
    boys_strength: 50
  }
*/



// d> update : through this we can update 

// note : for updateone() we need to use atomic operator $set

// db.students.updateOne({"class":"I"},{$set:{"total_strength":70}});
// var class1 = db.students.find({"class":"I"});
// console.log(class1);

/* output:
{
    cursorHasMore: false,
    documents: [
      {
        _id: ObjectId('65eff316c57108befa2f2aed'),
        class: 'I',
        total_strength: 70,
        girls_strength: 22,
        boys_strength: 23
      }
    ]
  }
*/

// db.students.updateMany({},      // leave seletor empty to update all documents
//     {
//         $set:{
//             "section":"A"
//         }
//     })


// e> delete :

var del = db.students.deleteOne({"section":"B"})
console.log(del);

// output: { acknowledged: true, deletedCount: 1 }










