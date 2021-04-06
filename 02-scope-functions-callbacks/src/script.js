// Review 
    // let myName = "Adam"
    // myName = "notAdam"
    // const anotherName = "Adam too"
    // anotherName = "This is another value"

    // Primitive Data

    // Boolean
    // const boolVar = 0
    // if(!boolVar){
    //     console.log("this is truthy");
    // }else{
    //     console.log("this is falsey");
    // }

    // // Number
    // console.log(parseInt("100"))

    // Non-Primitive (objects)
    // arrays
    // const myArr = [1, "strings", [1, 2, 3], {name: "Adam", hobby: "anime"}]
    // console.log(myArr[3].hobby)

    // objects
    // const personObj = {
    //     firstName: "Naruto",
    //     lastName: "Uzumaki",
    //     power: "Never giving up"
    // }
    
// Functions 



// Function Declaration 
function sayHi() {
    console.log("Helloooo everyone")
}

// // Function Expressons
// const myFunc = function(){
//     console.log("this is a function expression")
// }

// myFunc()
// addTwo(13, 12)
// const myVar = "hey im global"

// function addTwo(num1=0, num2=0){
//     const anotherVar = "Hey I'm local/block scope"
//     console.log(myVar)
//     return num1 + num2
// }

//Global Scope
// const globalVar = "Hey I am global"

// function inGlobal(){
//     //Block Scope
//     console.log(globalVar)

//     const localVar = "inside block scope"

//     function inlocal(){
//         // Block scope within block scope
//         console.log(localVar)
//     }
  

// }

// inGlobal()



//Callback functions 
//.map()
    // returns a new array 
    // where that array has been operated on by your callback
function addTwo(num){
    // Inside the callback be sure to return 
    return num + 2
}

function onlyEven(num){
    return num % 2 === 0 
}

const myArray = [1, 2, 3, 4]

console.log(myArray.filter(onlyEven))

 //.filter()

setTimeout(sayHi, 3000)

document.addEventListener('click', () => {
    console.log("Hey I clicked the page")
})


