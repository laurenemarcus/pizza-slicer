var Pizza = {
  pie: 0,
  slice: function() {
    if (this.size % 4 === 0) {
      this.pie += this.size / 2;
    } else if (this.size % 4 === 1) {
      this.pie += (this.size - 1)/ 2;
    } else if (this.size % 4 === 2) {
      this.pie += (this.size - 2)/ 2;
    } else if (this.size % 4 === 3) {
      this.pie += (this.size - 3)/ 2;
    }

    if (this.topping === "pepperoni") {
      this.pie += 2;
    }

    if (this.size < 4) {
      this.pie = 1;
    }

    return this.pie;
  }
};

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();

    var size =  parseInt($("input#size").val());
    var topping = $("input[name=topping]:checked").val();

    var newPizza = Object.create(Pizza);

    newPizza.size = size;
    newPizza.topping = topping;

    $("#s").show();
    $(".slices").show();
    $(".slice-display").text(newPizza.slice());
    if (newPizza.slice() < 2) {
      $("#s").hide();
    }

    $("input#size").val("");
  });
});
