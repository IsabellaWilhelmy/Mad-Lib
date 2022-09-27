alert("There are A LOT of questions coming up, good luck soldier!")
alert("Also I recommend useing more funny answers than serious ones")

var start = prompt("write one adjective (Don't capitalise or use spaces)");
var adj_one = document.getElementById("adj_one");
adj_one.innerHTML = "" + start +"";

var description1 = prompt("Write ANOTHER adjective (Don't capitalise or use spaces)")
var adj_two = document.getElementById("adj_two");
adj_two.innerHTML ="" + description1 +"";

var person = prompt("Pick a random name (no spaces)");
var char_name = document.getElementById("char_name");
char_name.innerHTML = " " + person +"";

var char2 = prompt("Enter one more name (no spaces)");
var othr_char = document.getElementById("othr_char");
othr_char.innerHTML = "" + char2 +"'s";

var sister = prompt("Write ANOTHER adjective! (no campitals or spaces)");
var adj_three = document.getElementById("adj_three");
adj_three.innerHTML = "" + sister +"";

var steal = prompt("Enter a random noun (no capitals or spaces)");
var obje = document.getElementById("obje");
obje.innerHTML = "" + steal +"";

var description2 = prompt("Enter another adjective (no capitals or spaces)");
var adj_four = document.getElementById("adj_four");
adj_four.innerHTML = "" + description2 +"";

var cole1 = prompt("Enter a plural noun (no capitals or spaces)");
var collect1 = document.getElementById("collect1");
collect1.innerHTML = "" + cole1 +"";

var description3 = prompt("Write one more adjective (no capitals or spaces)");
var adj_five = document.getElementById("adj_five");
adj_five.innerHTML = "" + description3 +"";

var cole2 = prompt("Enter another plural noun (no capitals or spaces)");
var collect2 = document.getElementById("collect2");
collect2.innerHTML = "" + cole2 +"";

var worlds = prompt("Enter a random number between 1-50 (no spaces)");
if (worlds > 50 || worlds < 1) {
  alert("Sorry you went over 50 or below 1, so you will get a random number between 1-50");
  worlds = return Math.floor(Math.random() * (50 - 1 + 1) + 1);
}
var number = document.getElementById("number");
number.innerHTML = "" + worlds +"";

var villan = document.getElementById("villan");
villan.innerHTML = "" + char2 +"'s";

var num1 = prompt("Enter any random number");
var number2 = document.getElementById("number2");
number2.innerHTML = "" + num1 +"";

var cole3 = prompt("Enter a random plural noun");
var collect3 = document.getElementById("collect3");
collect3.innerHTML = "" + cole3 +"";

var num2 = prompt("Enter one more random number");
var number3 = document.getElementById("number3");
number3.innerHTML = "" + num2 +"";

var cole4 = prompt("Enter one more plural noun");
var collect4 = document.getElementById("collect4");
collect4.innerHTML = "" + cole4 +"";
