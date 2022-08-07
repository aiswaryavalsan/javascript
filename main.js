class student{
    static count=0;
    constructor(name,age,phone,marks){
    this.name=name,
    this.age=age,
    this.phone=phone,
    this.marks=marks
    student.count++;
} 
 static getcount(){
        return (student.count++);
    }
    egligible(){
        if(this.marks>40)
        console.log(` ${this.name} is egligible`);
        else
        console.log(` ${this.name} is not egligible`);
    }}
 let john=new student("john",'20','234555','34');
let ram= new student("ram",'20','234555','41');
let manu= new student("manu",'20','234555','46');
let jhony= new student("jhony",'20','234555','49');
let sindu= new student("sindu",'20','234555','21');
john.egligible();
ram.egligible();
manu.egligible();
jhony.egligible();
sindu.egligible();
console.log(student.getcount());