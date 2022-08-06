let  multiple=function(x,y)
{
    console.log(x*y);
}
let multiplebytwo=multiple.bind(this,2)
multiplebytwo(6);
let multiplebythree=multiple.bind(this,3)
multiplebytwo(8);