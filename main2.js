class student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setplacementage(minage){
        console.log(this);
        return  (minmarks)=>
        {
        
            if(this.marks>minmarks&&this.age>minage){
                console.log(this.name+' is egligible');
            }
            else{
                console.log(this.name+' is not egligible');
            }
        }
        //egligible(this);
    }

}
const yash=new student('yash',25,60);
const ameer=new student('ameer',22,20);
const meera=new student('meera',18,60);
const kavya=new student('kavya',20,30);
const sanu=new student('sanu',17,40);
yash.setplacementage(18)(40);
ameer.setplacementage(18)(40);
meera.setplacementage(18)(40);
kavya.setplacementage(18)(40);
sanu.setplacementage(18)(40);
