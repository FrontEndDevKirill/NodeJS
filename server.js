var user = require('./user');

function run(){
var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);
}

if (module.perent){
	exports.run = run;
}else{
	run();
}