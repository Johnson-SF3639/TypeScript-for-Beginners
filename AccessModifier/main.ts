export{}

class Employee{
    public employeeName : string;

    constructor(name:string){
        this.employeeName=name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}
let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName : string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager delegating task`);
    }
}
let m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

