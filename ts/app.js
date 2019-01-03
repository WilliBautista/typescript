// Basic functions
var person = "William";
var return_name = function () { return person; };
var greet = function () { return "Hello " + person; };
console.log('---------------- Basic functions');
console.log(return_name());
console.log(greet());
// Required parameters of the functions
var full_name = function (name, lastname) { return name + " " + lastname; };
console.log('---------------- Required parameters of the functions');
console.log(full_name("William", "Bautista"));
// Optional parameters of the functions
var full_data = function (name, lastname, age) {
    var salute = "Hello " + name + " " + lastname + " ";
    if (age)
        salute += "you're " + age + " years old";
    return salute;
};
console.log('---------------- Optional parameters of the functions');
console.log(full_data("William", "Bautista", 21));
console.log(full_data("William", "Bautista"));
// Default parameters of the functions
var anime = function (name, anime, type) {
    if (anime === void 0) { anime = true; }
    var message = name + " is an anime character";
    if (!anime)
        message = name + " is not an anime character, but is " + type;
    return message;
};
console.log('---------------- Default parameters of the functions');
console.log(anime("Goku"));
console.log(anime("William", false, "a developer"));
// Rest parameters of the functions
var characters = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return "Marvel's characters: " + names.join(', ');
};
console.log('---------------- Rest parameters of the functions');
console.log(characters("Iron Man", "Hulk", "Captain America", "Thor"));
// Function type
var sum = function (a, b) { return a + b; };
var salute = function (name) { return "Hello " + name + ", how're you?"; };
var saveWorld = function () { return console.log('The world was saved!!'); };
var sum1 = sum, salute1 = salute, saveWorld1 = saveWorld;
console.log('---------------- Function type');
console.log(sum1(10, 60));
console.log(salute1("William"));
saveWorld1();
