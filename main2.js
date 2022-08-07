function attacheventlistener(){
let count=0;
document.getElementById("button1").addEventListener("click",function(){
console.log("button clicked",++count);
})
}
attacheventlistener();
