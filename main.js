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
    egligible(minmark){
       
        return function abc(minage){
            if(this.age<minage&&this.mark>minmark)
            console.log(` ${this.name} is egligible`);
            
        }
           
                
           

    } 
       // }
       
       
   
};
let john=new student("john",'20','234555','34');
let ram= new student("ram",'20','234555','41');
let manu= new student("manu",'20','234555','46');
let jhony= new student("jhony",'20','234555','49');
let sindu= new student("sindu",'20','234555','21');
john.egligible(30)(25);
ram.egligible();
manu.egligible();
jhony.egligible();
sindu.egligible();
console.log(student.getcount()); 