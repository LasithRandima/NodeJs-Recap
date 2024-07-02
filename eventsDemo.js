// Events emitted by the EventEmitter class are synchronous. 
// This means that the event listener will be called before the code that emits the event continues to run.
// what eventemmitter does is the same as the promise version of fs module. It is used to handle the asynchronous code.
// the EventEmitter class from the events module is used for handling and emitting events. It provides a way to create and handle custom events within your application, enabling a pattern of communication between different parts of your code. 
// This is especially useful in building asynchronous and event-driven applications.


import { EventEmitter } from 'events';

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();


function greetHandler(name) {
    console.log(`Hello ${name}`);
}

function goodbyehandler(name) {
    console.log(`Goodbye ${name}`);
}

// Register an event listener
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyehandler);

// Emit an event
myEmitter.emit('greet', 'Lasith');
myEmitter.emit('goodbye', 'Lasith');

// Error handeling
myEmitter.on('error', (err) => {
    console.error('Error:', err);
});

// Simulate an error
myEmitter.emit('error', new Error('Something went wrong'));