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

Pizza.prototype.calculateBasePizzaPrice = function() {
  this.pizzaPrice = 0.00;
  switch(this.size) {
    case("extra"):
      this.pizzaPrice += 18.00;
      break;
    case("large"):
      this.pizzaPrice += 16.00;
      break;
    case("medium"):
      this.pizzaPrice += 13.00;
      break;
    case("small"):
      this.pizzaPrice += 10.00;
      break;
  };
}


//   this.toppings.forEach(function(element) {
//     this.pizzaPrice += 0.50;
//   })
//   return this.pizzaPrice.toFixed(2); // completes pizzaPrice calculation
// }

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
    newPizza.calculateBasePizzaPrice();
    console.log(newPizza.pizzaPrice);
  })



  $("button#reset-order").click(function() {
    location.reload();
  })
});