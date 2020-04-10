// intitalize any variables I'm going to use 
let input = document.getElementById('order');
let submit = document.querySelector('#submitBtn');
let showOrder = document.getElementById('showOrder');
let menuList = document.getElementById('menu');

const menu = [
    {name: 'burger', qty: 10},
    {name: 'fries', qty: 30},
    {name: 'shake', qty: 5},
    {name: 'coke', qty: 1000}
]

for(item of menu) {
    menuList.innerHTML += `<li>${item.name}</li>`;
}

submit.addEventListener('click', () => {
    let customerOrder = input.value;
    showOrder.innerHTML = customerOrder;
    input.value = "";
    // customerOrder = "fries: 1, shake: 3" --> order = [ {name: 'fries', qty: 1}, {name: 'shake', qty: 3} ]
})