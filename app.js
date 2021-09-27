const {frutas, dinero} = require('./frutas')
const  cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hola Missael",
    e : "oO",
    T : "U "
}));


frutas.forEach(item => {
    console.count(item)

})
console.log(dinero);

