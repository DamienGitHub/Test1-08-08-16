//take user input and display on page

var event1 = document.getElementById("button1");
event1.addEventListener('click', myFirst, false);

function myFirst()
{
  
   var userInput1 = document.getElementById("input1").value;
   // var userInput2 = document.getElementById("input2").value;
  
   var num1 = parseInt(userInput1);
//   var num2 = parseInt(userInput2);
//   var message1 = "The numbers are equal";
//   var message2 = "The numbers are not equal";
  //var sum = parseInt(userInput1) + parseInt(userInput2);
  
  //document.getElementById("demo").innerHTML = userInput1;
  //document.getElementById("demo").innerHTML = sum;
  

     document.getElementById("demo").innerHTML = num1;
    
     document.getElementById("demo").innerHTML = num1;

  
}

