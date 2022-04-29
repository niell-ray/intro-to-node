//incorporating "fs" module to access the user's file system
//const fs = require("fs");

//fs.copyFileSync("file1.txt", "copy-of-file1.txt");

var superheroes = require("superheroes");
var supervillians = require("supervillians");

var mySuperVillainName = supervillians.random();
var mySuperHeroName = superheroes.random();

console.log(mySuperHeroName);
console.log(mySuperVillainName);
