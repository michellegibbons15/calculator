// operator.js
let firstNumber 
let secondNumber 
let operation
let resultElem = document.getElementById('result') 

// Handle click number
function clickNumber(num){
    let newNum = new String(num)
    if (!firstNumber){
        firstNumber = newNum
        resultElem.innerText = firstNumber;
    } else if(!operation){
        firstNumber += newNum
        resultElem.innerText = firstNumber;
    }else if (!secondNumber) {
        secondNumber = newNum
        resultElem.innerText = secondNumber;
    }else {
        secondNumber += newNum
        resultElem.innerText = secondNumber;
    }
}

// Handle clicking an operator (+, -, *, /)
function clickOperator(event) {
    operation = event
}

// Handle the equals button (=) to perform the final calculation
function clickEqual(){
    let num1 = parseInt(firstNumber)
    let num2 = parseInt(secondNumber)
    let calc = 0
    switch (operation) {
        case '+':
          calc = (num1 + num2);
          break;
        case '-':
          calc = (num1 - num2);
          break;
        case '*':
          calc = (num1 * num2);
          break;
        case '/':
          if (num2 !== 0) {
            calc = (num1 / num2);
          } else {
            calc = 'Error';
          }
          break;
        default:
          break;
      }
    clickClear();
    firstNumber = new String(calc)
    resultElem.innerText = calc
}

// Handle clear result
function clickClear(){
    firstNumber = undefined
    secondNumber = undefined
    operation = undefined

    resultElem.innerText = " "
}

