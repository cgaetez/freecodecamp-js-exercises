let counterEl = document.getElementById("counter-el");

let count = 0;
let storeData = document.getElementById('store-data');

function increment(){
    count = count + 1;
    counterEl.textContent = count;
}

function save(){
    storeData.textContent += count + ' - ';
    count = 0;
}



