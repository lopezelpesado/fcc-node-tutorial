const {john, peter} = require("./4-first-module.js");
const sayHi = require("./5-second-module.js")
const data = require("./6-alt-flavour-exports.js")
console.log(data);

require("./7-mind-grenade.js")

sayHi("susan");
sayHi(john);
sayHi(peter);