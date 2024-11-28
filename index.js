console.log("Hello World");
//node index.js
//npm start

console.log("Hello Boolean");
//npm run dev

//taglio via i primi 2 indici che sono il path
const boh = process.argv.slice(2);
console.log(`Hello ${boh}`);
// node index.js "parola passata"