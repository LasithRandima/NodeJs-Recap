//  To use ES6 features, you need to update your package.json file to include the following:
// "type": "module"
// To use ES2015 import syntax, you need to use Babel to transpile the code. 

// To use ES6 features, you should have to specify file extension in the import statement. otherwise it gives errors
// importing modules not with default export
// import { getPosts } from "./postController.js";

// importing modules with default export
// import getPosts from "./postController.js";

// importing multiple modules in same file with default export
import getPosts, { getPostsLength } from "./postController.js";


console.log(getPosts());
console.log(`posts length : ${getPostsLength()}`);