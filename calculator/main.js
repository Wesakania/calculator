const form = document.querySelector("#calculator");
form.addEventListener("submit", calculate);


function calculate(e){
 e.preventDefault();
 const num1 = parseInt(document.querySelector('#num1').value);
 const num2 = parseInt(document.querySelector('#num2').value);
 const operator = document.querySelector('#operator').value;

 let result;

 switch(operator){
    case '+':
        result = num1 + num2;
        break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
     result = num1 * num2;
     break;
    
    case '/':
     result = num1 / num2;
     break; 
    
    case '%':
     result = num1 % num2;
     break;
 }
 document.querySelector("#result").textContent = result;
}