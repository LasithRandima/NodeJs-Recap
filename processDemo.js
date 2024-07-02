// process is a global object that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require(). 
// It can be accessed from anywhere in the code without requiring it.

// The process object is an instance of EventEmitter, which means it can be used to handle and emit events.

// argv is an array of arguments passed to the Node.js process. The first element of the array is the path to the Node.js executable, and the second element is the path to the file being executed. The rest of the elements are the arguments passed to the script.
console.log(process.argv);

//  process.env is an array of environment variables passed to the Node.js process. It can be used to access environment variables such as PORT, NODE_ENV, and others.
console.log(process.env);

// cwd() method is used to get the current working directory of the Node.js process.
console.log(process.cwd());

// exit() method is used to exit the Node.js process with a specified exit code. By default, the exit code is 0, which indicates success exit.
// process.exit(1);

// pid property is used to get the process ID of the Node.js process.
console.log(process.pid);

// title property is used to get or set the title of the Node.js process.
console.log(process.title);

// platform property is used to get the platform on which the Node.js process is running.
console.log(process.platform);

// version property is used to get the version of Node.js.
console.log(process.version);


// memoryUsage() method is used to get memory usage information about the Node.js process.
console.log(process.memoryUsage());

// uptime() method is used to get the number of seconds the Node.js process has been running.
console.log(process.uptime()); 

//  process.on() method is used to register event listeners for the Node.js process. It is similar to the on() method of the EventEmitter class.
process.on('exit', (code) => {
    console.log(`Process exited with code ${code}`);
});

