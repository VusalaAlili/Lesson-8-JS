let input1= Number(prompt("write num1"));
let input2= Number(prompt("write num2"));
let operator= prompt("write operator");

 function calculateResult() {
    input1 = parseFloat(input1);
    input2 = parseFloat(input2);
    if (operator === "+") {
      result = input1 + input2;
    } else if (operator === "-") {
      result = input1 - input2;
    } else if (operator === "*") {
      result = input1 * input2;
    } else if (operator === "/") {
      result = input1 / input2;
    }
    return alert(result);
 }
 


 let btn = document.querySelector('#ac');

function again() {
  location.reload();
}

btn.addEventListener('click',again);