
 

function Add(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById('result');
    result.innerText = parseInt(num1) + parseInt(num2);
}

function Substract(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById('result');
    result.innerText = parseInt(num1) - parseInt(num2);
}

function Multiply(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById('result');
    result.innerText = parseInt(num1) * parseInt(num2);
}

function Divide(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById('result');
    result.innerText = parseInt(num1) / parseInt(num2);
}



