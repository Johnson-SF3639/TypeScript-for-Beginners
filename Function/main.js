"use strict";
exports.__esModule = true;
var message = "Hello...";
console.log(message);
var x = 10;
var y = 12;
var isBeginner = true;
var total = 1;
var name = "John";
var words = "My name is ".concat(name, ".");
var n = null;
var u = undefined;
var list = [1, 2, 3, 4];
var listArray = [1, 2, 3, 4];
var person = ['John', 21];
var Color;
(function (Color) {
    Color[Color["Red"] = 4] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
var myVariable = 10;
var UnknownVariable = 20;
// (UnknownVariable as string).toUpperCase();
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var a;
a = 10;
a = true;
var b = 20;
// b=true;     Error 
var multitype;
multitype = 20;
multitype = true;
var anyType;
anyType = 20;
anyType = true;
console.log(c);
function Add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(Add(5, 15));
console.log(Add(5));
