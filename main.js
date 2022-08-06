let  multiple=function(x,y)
{
    console.log(x*y);
}
let multiplebytwo=multiple.bind(this,2)
multiplebytwo(6);