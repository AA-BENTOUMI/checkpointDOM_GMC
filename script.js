let btnPlus = document.querySelectorAll(".btn-Plus");
let qte = document.querySelectorAll(".Quantity");
let btnMoin = document.querySelectorAll(".btn-Moin");
let price = document.querySelectorAll(".Price");
let total = document.getElementById("totalprice");
let removebutton = document.getElementsByClassName("close");
let likebtn = document.querySelectorAll(".clearfix i");


// click btnPlus=> increment
for (let i = 0; i < btnPlus.length; i++)
  btnPlus[i].addEventListener("click", function () {
    //   qte.innerHTML = ~~qte.innerHTML + 1;
    qte[i].innerHTML++;
totalPrice();
  });

  // click btnMoin=> increment and mini Quantity
for (let i = 0; i < btnMoin.length; i++)
  btnMoin[i].addEventListener("click", function () {
    //   mini Quantity
if( qte[i].innerHTML>0){
    qte[i].innerHTML--;
 totalPrice(); 
    } totalPrice(); 
  });

// remove element 
for (let i = 0; i < removebutton.length; i++)
  removebutton[i].addEventListener("click", function () {
//  element to remove
 this.parentNode.parentNode.removeChild(this.parentNode);
  });


  // like color click
  for (let i = 0; i < likebtn.length; i++)
    likebtn[i].addEventListener("click", function () {
      //   change color
      if (likebtn[i].style.color == "red") {
        likebtn[i].style.color = "black";
      } else {
        likebtn[i].style.color = "red";
      }
    });

    // total price
      function totalPrice() {
        sum=0
       for (var i = 0; i < price.length; i++) {
         sum += price[i].innerHTML * qte[i].innerHTML;
         document.getElementById("totalprice").innerHTML = sum.toFixed(2) + "€" ;
         console.log(sum)
       }
      }