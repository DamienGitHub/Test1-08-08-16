//take user input and display on page

var event1 = document.getElementById("button1");
event1.addEventListener('click', myFirst, false);

function myFirst()
{
  
   var userInput1 = document.getElementById("input1").value;
   var userInput2 = document.getElementById("input2").value;
  
   var num1 = parseInt(userInput1);
   var num2 = parseInt(userInput2);
   var message = "The numbers are equal";
  //var sum = parseInt(userInput1) + parseInt(userInput2);
  
  //document.getElementById("demo").innerHTML = userInput1;
  //document.getElementById("demo").innerHTML = sum;
  
  if(num1 > num2)
  {
     document.getElementById("demo").innerHTML = num1;
  }
  else if (num1 < num2)
  {
     document.getElementById("demo").innerHTML = num2;
  }
  
  else
  {
     document.getElementById("demo").innerHTML = message;
  }
  
}

