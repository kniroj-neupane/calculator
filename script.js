const numberkeys = document.querySelectorAll('.numbers');
const operatorkeys = document.querySelectorAll('.operators');

let operatorCount = 0, operandCount = 0;
let operator = "";

const screen = document.getElementById('screen');
//event listener for numbers and point
numberkeys.forEach((key) => {
    key.addEventListener('click', () => {
        if(key.id==='.' && screen.textContent===''){
            screen.textContent = '0';
        }
        screen.textContent = screen.textContent + key.textContent;
        if (operatorCount == 1) {
            operandCount=2;
        }
    })
});
//event listener for operators
operatorkeys.forEach((key) => {
    key.addEventListener('click', () => {
        if (key.id === 'clearAll') {
            screen.textContent = "";
        }
        else if (key.id === 'del') {
            let str = screen.textContent;
            str = str.slice(0, str.length - 1);
            screen.textContent = str;
        }
        else if (key.id === 'equals') {
            if (operandCount == 2) {
                result = operate(screen.textContent, operator);
                screen.textContent = result;
                operatorCount = 0;
                operandCount = 0;
            }
        }
        else {
            if (operatorCount == 0) {
                operatorCount++;
                operandCount++;
                operator = key.textContent;
                screen.textContent = screen.textContent + key.textContent;
            }
            else if (operatorCount == 1 && operandCount==2) {
                result = operate(screen.textContent, operator);
                operator = key.textContent;
                screen.textContent = result + key.textContent;
                operandCount = 1;
            }
        }
    })
});
//keyboard support
document.addEventListener('keydown',(keypressed)=>{
    if(keypressed.key>=0 && keypressed.key<=9){
        screen.textContent = screen.textContent + keypressed.key;
        if (operatorCount == 1) {
            operandCount=2;
        }
    }
    if(keypressed.key === '.'){
        if(screen.textContent===''){
            screen.textContent='0';
        }
        screen.textContent = screen.textContent + keypressed.key;
    }
     if(keypressed.key==='+' || keypressed.key==='-' || keypressed.key==='/' || 
        keypressed.key ==='*' || keypressed.key==='%'){
            if (operatorCount == 0) {
                operatorCount++;
                operandCount++;
                operator = keypressed.key;
                screen.textContent = screen.textContent + keypressed.key;
            }
            else if (operatorCount == 1 && operandCount==2) {
                result = operate(screen.textContent, operator);
                operator = keypressed.key;
                screen.textContent = result + keypressed.key;
                operandCount = 1;
            }
        }
        if(keypressed.key==='Enter' || keypressed.key==='='){
            if (operandCount == 2) {
                result = operate(screen.textContent, operator);
                screen.textContent = result;
                operatorCount = 0;
                operandCount = 0;
            }
        }

        
})

function operate(string, op) {
    const operands = string.split(op);
    let result;
    if (op == '+') {
        result= Number(operands[0]) + Number(operands[1]);
    }
    if (op == '-') {
        result = operands[0] - operands[1];
    }
    if (op == '*') {
        result =  operands[0] * operands[1];
    }
    if (op == '/') {
        result = operands[0] / operands[1];
    }
    if (op == '%') {
        result =  operands[0] % operands[1];
    }
    result = (Math.round(result * 100) / 100);
    return result;
}
