var student={age:20}
var addToThis=function(){
    return this.age;
}
var bound=addToThis.bind(student);
console.log(bound());