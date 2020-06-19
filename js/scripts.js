// Business Logic
function Order() {
  this.orders = [];
  this.orderId = 0;
}

// Pizza Constructor and Prototypes
function Pizza() {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.toppingsAdded = function(element) {
  this.toppings.push(element);
}

Pizza.prototype.calculateOrderTotal = function() {
  let orderPrice = 0.00;
  //set size variable in UI
  switch(this.size) {
    case("small"):
      return orderPrice += 10.00;
      break;
    case("medium"):
      return orderPrice += 13.00;
      break ;
    case("large"):
      return orderPrice += 16.00;
      break;
  }
}

// User Interface Logic