
const con=document.getElementById("box3");
const val1=document.getElementById("box1");
const inputvalue1=val1.value;

const val2=document.getElementById("box2");
const inputvalue2=val2.value;

const inf=document.getElementById("btn");
btn.addEventListner("click",function(){
    const inf=inputvalue1+inputvalue2;
    console.log(inf);
});

