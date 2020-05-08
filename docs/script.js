
// this code is being sent to the "computer translator" and being processed to see if it's valid JavaScript code 
// in this case our function is being processed by the syntax parser or "computer translator" and then we see the result in the console
// var helloGreeting = "Hello World"

// function hello() {
//     return helloGreeting;
// }




// show how in the window context this code is being stored 
// var helloGreeting = "Hello World"

// function hello() {
    
// }




// show how creation and 'hoisting' works
// hello();
// console.log(helloGreeting);

// var helloGreeting = "Hello World!"

// function hello() {
//     console.log("yehhh boiiii")
// }



// shows how undefined value works in the context of creation and 'hoisting'
// var helloGreeting = "hello world"

// if (helloGreeting === undefined) {
//     console.log("this variable is undefined")
// } else {
//     console.log("this variable is defined")
// }



// guess how the output will be in this code
function hello() {
    console.log('called hello function');
}

hello();

console.log(helloGreeting);

var helloGreeting = 'helloGreeting variable has been called'

console.log(helloGreeting);