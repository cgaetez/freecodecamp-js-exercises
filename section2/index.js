function calculator(operation){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = document.getElementById('result');

    switch(operation){
        case 'add':
            result.innerText = num1 + num2 ;
        break;
        case 'substract':
            result.innerText = num1 - num2;
        break;
        case 'multiply':
            result.innerText = num1 * num2;
        break;
        case 'divide':
            result.innerText = num1 / num2;
        break;
    }
}


