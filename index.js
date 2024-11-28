//console.log("Hello World");
//node index.js
//npm start

//console.log("Hello Boolean");
//npm run dev

//taglio via i primi 2 indici che sono il path
let parolaPassata = process.argv.slice(2);
console.log(`Hello ${parolaPassata.length > 0 ? parolaPassata.join(" ") : "default"}`);

const parolaPassata2 = process.argv[2];
//console.log(`Hello ${parolaPassata2 ?? "default"}`);
// node index.js "parola passata"