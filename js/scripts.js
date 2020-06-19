// Business Logic
// function Order() {
//   this.orders = [];
//   this.orderId = 0;
// }

// Pizza Constructor and Prototypes
function Pizza(size) {
  this.toppings = [];
  this.size = size;
}
//push each topping selected from checkbox into array
Pizza.prototype.toppingsAdded = function(element) {
  this.toppings.push(element);
}

Pizza.prototype.calculatePizzaTotal = function() {
  let pizzaPrice = 0.00;
  //set size variable in UI to radiobox values, should transfer
  switch(this.size) {
    case("extra"):
      return pizzaPrice += 18.00;
      break;
    case("large"):
      return pizzaPrice += 16.00;
      break;
    case("medium"):
      return pizzaPrice += 13.00;
      break ;
    case("small"):
      return pizzaPrice += 10.00;
      break;
  }
//set price from size then add 0.50 for each topping added
  this.toppings.forEach(function(element) {
    pizzaPrice += 0.50;
  })
  return pizzaPrice; // completes pizzaPrice calculation
}

// User Interface Logic
$(document).ready(function() {
  $("button#place-order").click(function() {
    $("#order-space").fadeIn();
    });
  $("form#new-pizza-order").submit(function(event) {
    event.preventDefault();
    let newPizza = new Pizza;

    newPizza.size = $("input:radio[name=size]:checked").val();
    $("input:checkbox[name=pizza-topping]:checked").each(function() {
      newPizza.toppings.push($(this).val());
    });
    console.log(newPizza.toppings);
    console.log(newPizza.size);
  })



  $("button#reset-order").click(function() {
    location.reload();
  })
});