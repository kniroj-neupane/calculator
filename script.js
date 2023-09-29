const numberkeys = document.querySelectorAll('.numbers');
const operatorkeys = document.querySelectorAll('.operators');

let operatorCount = 0;
let operator = "";

const screen = document.getElementById('screen');
numberkeys.forEach((key) => {
    key.addEventListener('click',()=>{
        screen.textContent = screen.textContent + key.textContent;
    })
});
operatorkeys.forEach((key) => {
    key.addEventListener('click',()=>{
        if(key.id === 'clearAll'){
            screen.textContent = "";
        }
        else if(key.id==='del'){
            let str = screen.textContent;
            str = str.slice(0, str.length - 1);
            console.log(str);
            screen.textContent = str;
        }
        else if(key.id==='equals'){
            //do the thing for equals
            result = operate(screen.textContent,operator);
            result = (Math.round(result * 100) / 100);
            screen.textContent = result;
            operatorCount=0;
        }
        else{
            if(operatorCount == 0){
                operatorCount++;
                operator = key.textContent;
                screen.textContent = screen.textContent + key.textContent;
            }
            else if(operatorCount ==1){
                //do the thing for equals
                result = operate(screen.textContent,operator);
                result = (Math.round(result * 100) / 100);
                operator= key.textContent;
                screen.textContent = result+key.textContent;
            }
        }
    })
});

function operate(string,op){
    const operands = string.split(op);
    console.log(operands+op);
    if(op=='+'){
        return Number(operands[0]) + Number(operands[1]);
    }
    if(op=='-'){
        return operands[0] - operands[1];
    }
    if(op=='*'){
        return operands[0] * operands[1];
    }
    if(op=='/'){
        return operands[0] / operands[1];
    }
    if(op=='%'){
        return operands[0] % operands[1];
    }
}
