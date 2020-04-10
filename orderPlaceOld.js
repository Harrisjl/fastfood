// var count = 0;

// document.getElementById("myBtn").addEventListener("click", function() {
 
// });

// function myFunction() {
//     var x = document.getElementById("myText").value;
//     document.getElementById("demo").innerHTML = x;
//   }

// function myFunction() {
//     var x = document.getElementById("myP").value;
//     document.getElementById("demo").innerHTML = x;
// }
  

//document.querySelector("html");

// function newCount() {
//   return ++count;
// }
// console.log( newCount() );
// document.getElementById("demo").innerHTML = result;
 

// document.getElementById("myBtn").addEventListener("click", myFunction);

// function myFunction() {
//     document.getElementById("demo").innerHTML;
// }
// document.getElementById("demo").addEventListener("click", myFunction);
// const menu = [
//   {name: 'Burger', qty: 10},
//   {name: 'Fries', qty: 10},
//   {name: 'Shakes', qty: 10}
// ];
// let displayMenu = document.getElementById('menu');
// for(item of menu) {
//   displayMenu.innerHTML += `${item.name}, `;
// };

// function myFunction() {
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
// }

// $(document).ready(function () {
//   let selectedMenu = {
//     item: "(None)",
//     quantity: 0
//   };
  let menu = [
    {item: "HamBurger", qty: 7},
    {item: "CheeseBurger", qty: 6},
    {item: "Hotdog", qty: 10},
    {item: "Chicken Sandwich", qty: 13},
    {item: "French Fries", qty: 28},
    {item: "Coke", qty: 38},
    {item: "Sprite", qty: 23},
    {item: "Rootbeer", qty: 43},
    {item: "Shakes", qty: 14},
  ];
  let displayMenu = document.getElementById('menu');
for(item of menu) {
  displayMenu.innerHTML += `${item.name}, `;
};
  function selectedMenu(item, quantity) {
    selectedMenu.quantity = quantity;
    selectedMenu.item = item;
    $("#total").html(total());
    return item + "(" + quantity + ")";
  }
  let submitBtn = document.getElementById('submitBtn');
let showOrder = document.getElementById('showOrder');
let customerOrder = document.getElementById('order');
showOrder.innerHTML = customerOrder.value;
    let order = parseOrder(customerOrder.value);
    console.log(order);
    customerOrder.value = '';
  });
  function parseOrder(customerOrder) {

  const parsedObj = [];
  let parsedInput = customerOrder
      .split(',')
      .map(x => x.trim())
      .map(y => y.split(':'))
      .map(z => z.map(q => q.trim()))
  for(item of parsedInput) {
      let obj = {
          name: item[0],
          qty: item[1]
      };
      parsedObj.push(obj);
  }
  return parsedObj;
};


//   document.getElementById("btItem1").value =
//     menu.firstItem + ": " + menu.firstItemQuantity;

//   document.getElementById("btItem2").value =
//     menu.secondItem + ": " + menu.secondItemQuantity;

//   document.getElementById("btItem3").value =
//     menu.thirdItem + ": " + menu.thirdItemQuantity;
  
//     document.getElementById("selectedMenu").innerHTML =
//     selectedMenu.item + " (" + selectedMenu.quantity + ")";

// });
// $("#btMenu").click(function() {
//   $("#liItemMenu").toggle("slow");
// });
// $("#btMain").click(function() {
//   $("#liItem").toggle("slow", function() {
    
// });
// $("#btItem1").click(function() {
//   $("#liItem").children("li").children("input");
//   $(this);
//   $("#selectedItem").html(selectedMainFnc(menu.firstItem, menu.firstItemQuantity));
// });

// $("#btItem2").click(function() {
//   $("#liItem").children("li").children("input");
//   $(this);
//   $("#selectedItem").html(selectedMenuFnc(menu.secondItem, menu.secondItemQuantity));
// });

// $("#btItem3").click(function() {
//   $("#liItem").children("li").children("input");
//   $(this);
//   $("#selectedItem").html(selectedMenuFnc(menu.thirdItem, menu.thirdItemQuantity));
// });
  
  // fullName : function() {
  //   return this.firstName + " " + this.lastName;
  // }


// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";