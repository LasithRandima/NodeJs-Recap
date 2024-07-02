// os module is used to get information about the system.
// It is a built-in module in Node.js.

import os from 'os';

// user info
console.log(os.userInfo()); // returns an object containing information about the current user

// Platform
console.log(os.platform()); // win32

// CPU Architecture
console.log(os.arch()); // x64

// CPU Core Info
console.log(os.cpus()); // returns an array of objects containing information about each CPU/core

// Free memory
console.log(os.freemem()); // 1710112256

// Total memory
console.log(os.totalmem()); // 8474154496