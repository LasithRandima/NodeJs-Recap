
// crypto module is available in node.js to provide cryptographic functionality
import crypto from 'crypto';

// Create a hash object
const hash = crypto.createHash('sha256');
hash.update('password123');
console.log(hash.digest('hex')); // ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f


// randomBytes() method is used to generate cryptographically strong pseudo-random data.
// It takes a number as an argument which represents the length of the buffer.
const secret = crypto.randomBytes(32).toString('hex');
console.log(secret); 

crypto.randomBytes(16, (err,buffer) => {
    if(err){
        console.log(err);
    }
    console.log(buffer.toString('hex'));
})


// encrypt and decrypt
//  createCipheriv and createDecipheriv methods are used to create Cipher and Decipher objects respectively.
//  These methods take the algorithm and key as arguments.

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

// Create a cipher object to encrypt the data
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secrect msg', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(`encrypted : ${encrypted}`); // encrypted : b91ec0247679fe304bb554eba77c2712b6c15748d931ed3a710433a692d7fcb9

// Create a decipher object to decrypt the data
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8'); // decrypted : Hello, this is a secrect msg
console.log(`decrypted : ${decrypted}`);




