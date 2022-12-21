var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomimg1 = "dice" + randomNumber1 + ".jfif";
 document.querySelectorAll("img")[0].setAttribute("src", randomimg1);

 var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimg2 = "dice" + randomNumber2 + ".jfif";
 document.querySelectorAll("img")[1].setAttribute("src", randomimg2);

 
 if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = " Player 1 win";
   
 }
 else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = " Player 2 win";
 }
 else {
    document.querySelector("h1").innerHTML = " Draw!";
 }