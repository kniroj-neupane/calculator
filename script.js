const numbers = document.querySelector('#numbers');
const operators = document.querySelector('#operators');

const numberkeys = numbers.querySelectorAll('.key');
const operatorkeys = operators.querySelectorAll('.key');

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
    })
});
