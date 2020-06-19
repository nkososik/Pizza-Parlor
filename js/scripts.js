// Business Logic
// Pizza Constructor and Prototypes
function Pizza(size) {
  this.toppings = [];
  this.size = size;
  this.pizzaPrice = 0;
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
  }
}

Pizza.prototype.calculateToppingPrice = function() {
  this.pizzaPrice = 0.00;
  this.toppings.forEach(function() {
    this.pizzaPrice += 0.50;
  })
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
    newPizza.calculateBasePizzaPrice();
    console.log(newPizza.pizzaPrice.toFixed(2));
    newPizza.toppings.forEach(function() {
      newPizza.pizzaPrice += 0.50;
    })
    console.log(newPizza.pizzaPrice.toFixed(2));
  })



  $("button#reset-order").click(function() {
    location.reload();
  })
});