// This file contain ES6 specific code

const posts = [
    {
        id: 1,
        title: 'Post 1',
        body: 'This is post 1'
    },
    {
        id: 2,
        title: 'Post 2',
        body: 'This is post 2'
    }
];

const getPosts = () => posts;

// exporting another function apart from default 
export const getPostsLength = () => posts.length;

// this is not default export. Should use curly braces while importing
// export const getPosts = () => posts;

// Another way to export. Should use curly braces while importing
// export { getPosts };

// Default export. Should use any name while importing without curly braces
// With the default export, you can not only export one thing. For example, you can export an object, array, or another function etc.
// In here we are exporting a function called getPostsLength apart from the default export
export default getPosts;