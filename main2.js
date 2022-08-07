const x=function(y){
    y();
    console.log("x");
}
x(function y(){
    console.log("y");
})
