let val=0;
const mainbox = document.getElementById("display");

const bt1 = document.getElementById("btn1");
bt1.addEventListener("click", function(){
    val=val+1;
    mainbox.innerText=val
});
const bt2 = document.getElementById("btn2");
btn2.addEventListener("click", function(){
    val=val-1;
    mainbox.innerText=val;
});

const bt3=document.getElementById("btn3");
btn3.addEventListener("click",function(){
    val=0;
    mainbox.innerText=val;
});
