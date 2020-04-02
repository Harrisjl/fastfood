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

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}

$(document).ready(function () {
  let selectedMenu = {
    item: "(None)",
    quantity: 0
  };
  let menu = {
    firstItem: "Burger",
    firstItemQuantity: 7,
    secondItem: "Chicken",
    secondItemQuantity: 6,
    thirdItem: "Fries",
    thirdItemQuantity: 3
  };
  function selectedMenu(item, quantity) {
    selectedMenu.quantity = quantity;
    selectedMenu.item = item;
    $("#total").html(total());
    return item + "(" + quantity + ")";
  }

  document.getElementById("btItem1").value =
    menu.firstItem + ": " + menu.firstItemQuantity;

  document.getElementById("btItem2").value =
    menu.secondItem + ": " + menu.secondItemQuantity;

  document.getElementById("btItem3").value =
    menu.thirdItem + ": " + menu.thirdItemQuantity;
  
    document.getElementById("selectedMenu").innerHTML =
    selectedMenu.item + " (" + selectedMenu.quantity + ")";

});
// $("#btMenu").click(function() {
//   $("#liItemMenu").toggle("slow");
// });
$("#btMain").click(function() {
  $("#liItem").toggle("slow", function() {
    
});
$("#btItem1").click(function() {
  $("#liItem").children("li").children("input");
  $(this);
  $("#selectedItem").html(selectedMainFnc(menu.firstItem, menu.firstItemQuantity));
});

$("#btItem2").click(function() {
  $("#liItem").children("li").children("input");
  $(this);
  $("#selectedItem").html(selectedMenuFnc(menu.secondItem, menu.secondItemQuantity));
});

$("#btItem3").click(function() {
  $("#liItem").children("li").children("input");
  $(this);
  $("#selectedItem").html(selectedMenuFnc(menu.thirdItem, menu.thirdItemQuantity));
});
  
  // fullName : function() {
  //   return this.firstName + " " + this.lastName;
  // }


// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";