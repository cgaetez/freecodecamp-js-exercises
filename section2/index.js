let counterEl = document.getElementById("counter-el");
let storeData = document.getElementById('store-data');
let count = 0;

function increment(){
    counterEl.textContent = ++count;
}

function save(){
    storeData.textContent += `${count}   -  `;
    count = 0;
    counterEl.textContent = count;
}



