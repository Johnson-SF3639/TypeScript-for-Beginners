export{}
let message = "Hello...";
console.log(message);

let x=10;
const y= 12;

let isBeginner : boolean = true;
let total : number = 1;
let name : string = "John";

let words : string = `My name is ${name}.`;

let n : null = null;
let u : undefined = undefined;

let list : number[] = [1,2,3,4];
let listArray : Array<number> = [1,2,3,4];

let person : [string, number] = ['John', 21];

enum Color {Red=4, Green, Blue};
let c: Color = Color.Blue; 

let myVariable : any = 10;

let UnknownVariable : unknown = 20;
// (UnknownVariable as string).toUpperCase();

function hasName(obj:any): obj is {name : string} {
    return !! obj && typeof obj === "object" && "name" in obj;
}

if(hasName(myVariable)){
    console.log(myVariable.name);
}

let a;
a = 10;
a = true;

let b =20;
// b=true;     Error 

let multitype : number | boolean;
multitype = 20;
multitype = true;

let anyType : any;
anyType = 20;
anyType = true;

console.log(c);

