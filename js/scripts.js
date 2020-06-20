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
    case("Extra-Large"):
      this.pizzaPrice += 18.00;
      break;
    case("Large"):
      this.pizzaPrice += 16.00;
      break;
    case("Medium"):
      this.pizzaPrice += 13.00;
      break;
    case("Small"):
      this.pizzaPrice += 10.00;
      break;
  }
}

Pizza.prototype.fullOrder = function() {
  return this.size + " pizza with " + this.toppings.join(", ")
}

// User Interface Logic
function addToppings(newPizza) {
  $("input:checkbox[name=pizza-topping]:checked").each(function() {
    newPizza.toppings.push($(this).val());
  });
}

function toppingPrice(newPizza) {
  newPizza.toppings.forEach(function() {
    newPizza.pizzaPrice += 0.50;
  })
};

$(document).ready(function() {
  $("button#place-order").click(function() {
    $("#order-space").fadeIn();
    });

  $("form#new-pizza-order").submit(function(event) {
    event.preventDefault();
    let newPizza = new Pizza;
    newPizza.size = $("input:radio[name=size]:checked").val();
    newPizza.calculateBasePizzaPrice();
    addToppings(newPizza);
    toppingPrice(newPizza);
    newPizza.fullOrder();
    $("#price-display").fadeIn();
    $("span#order-total").text("$" + newPizza.pizzaPrice.toFixed(2));
    $("span#full-order").text(newPizza.fullOrder());
  })

  $("button#reset-order").click(function() {
    location.reload();
  })
});