// function myFunction() {
//   var x = document.getElementById("myText").value;
//   document.getElementById("demo").innerHTML = x;
// }
let kitchen = [];
let menu = {
  soup: 20,
  salad: 20,
  sandwich: 10,
  burger: 10,
  chicken: 10,dir
  fish: 10,
};


function addOrder(){
    let order = document.getElementById("userInput").value;
    let customerOrder = order.trim().split(",");
    for(i = 0; i < customerOrder.length; i++){
        let ticket = customerOrder[i].trim().split(":");
        kitchen.push(ticket);
        let receipt = kitchen[kitchen.length - 1];
        console.log(receipt);
        for(items in menu){
            if(menu.hasOwnProperty(items)){
                if(menu[items] > 0){
                    alert("added to cart")
                    menu[items]--;
                } else {
                    alert("Sorry, we're out of stock!")
                }
            } else {
                alert("we cant make that");
            }
        }
    }
    document.getElementById("userInput").value='';
}



function sendToCook(){
    alert(kitchen);
    while(kitchen.length > 0){
        kitchen.length = 0;
    }
}


function showMenu(){
    alert(JSON.stringify(menu));
}