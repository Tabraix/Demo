   
  let cart =[];
  let box = document.getElementById('table-list');
  const box2 = document.getElementById("clickbutton");
  const inputval= document.getElementById("dt");
  box2.addEventListener("click", function () {
          cart.push(inputval.value)
          listing();


          function listing(){
              box.innerText="";
              inputval.value="";


          let tr1 = document.createElement('tr');
          let td1 = document.createElement('th');
          td1.innerText ="Sr No.";
          td1.id="th1"


          let td2 = document.createElement('th');
          td2.innerText = "Name";
           td1.id="th2"



          let td3 = document.createElement('th');
          td3.innerText="Action";
           td1.id="th3"


          tr1.append(td1, td2, td3);
          box.append(tr1)


          for (let i = 0; i < cart.length; i++) {
          let tr1 = document.createElement('tr');
          let td1 = document.createElement('td');
          td1.innerText = i + 1;

          let td2 = document.createElement('td');
          td2.innerText = cart[i];
          td2.id="hello"

          let tdbtn = document.createElement('button');
          tdbtn.id="deletebtn"
          tdbtn.innerText = "Delete";

          tdbtn.addEventListener("click",function(){
              cart=cart.filter(function(ele,id){
                  if(i==id){
                      return false
                  }
                  else{
                      return true
                  }
              })
              listing();
          })

          let td3 = document.createElement('td');
          td3.append(tdbtn);
          tr1.append(td1, td2, td3);
          box.append(tr1)
        }

          }
        
    })



