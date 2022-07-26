/* 
_______________________
ADVANCED ARRAY METHODS 
________________________
*/

let studentNames = ['jason', 'john', 'bobby']

let teachers = [
    {
        name: 'damian',
        subjects: 'arrays, javascript, mongodb', // a string can have spaces and commas
    }, // when having multiple objects in an array make sure to separate the two with a comma
    {
        name: 'jonathan',
        subjects: 'arrays, javascipt',
    }
]

// if I wanted to go through (loop) the array and get just the names of the students 
/* / sort()
// created another array without changing the properties of the original array */
// const sortedStudentNames = studentNames.sort() // array comes by alphabetically 
// console.log(sortedStudentNames) 

/*/ filter() 
// creates another array without changing the properties of the last one */
const filteredStudentNames = studentNames.filter( 
    // function (student) { //anonymous function
    //     return student === 'bobby'
    // }

    // (student) => { //same exact line as above 
    //     return student === 'bobby'
    // }

    // (student) => student === 'bobby' // same exact as above // no curly bracket because there is only 1 line
    
    (student) => true // don't do this 
)
// console.log(filteredStudentNames) // [ 'bobby' ]

/* / studentNames = studentNames.filter ((student) => true)
    this is editing the original array and changing its properties */

/*/ //.sort() example 
    // let fruits = ['strawberry', 'apple', 'banana', 'orange']
    // console.log (fruits.sort())
         // //  [ 'apple', 'banana', 'orange', 'strawberry' ] */

/*/ //.filter() example
    // const ages = [11,17,20,42,45]
    // const adults = ages.filter(age => age => 18)
    // console.log (adults)
        // // [ 11, 17, 20, 42, 45 ] */

/* // .some() example
    let ages = [11,17,20,42,45]
    ages.some(ages => age >=18 )
        // true
*/

/* / .find()
returns the FIRST ELEMEND matching criteria
*/
const bobby = studentNames.find ((student) => student === 'bobby')
console.log(bobby) // we get only the element 

/* / .some()
- returns true if SOME element matches criteria 
*/
const someBobby = studentNames.some((student) => student === 'bobby')
console.log('Do we at least have one bobby?', someBobby)

/* / .every ()
- return true if EVERY ELEMENT matches criteria
*/
const everyBobby = studentNames.every((student) => student === 'bobby')
console.log('Everyone is a bobby?', everyBobby)