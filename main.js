let  multiple=function(x)
{
    return function(y){
        console.log(x*y);
   }
   
}
let multiplebytwo=multiple(2)
multiplebytwo(6);
