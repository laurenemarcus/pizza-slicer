describe("Pizza", function() {
  describe("slice", function() {
    it("will return the number of slices when the diameter is divisible by 4", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 12;
      expect(testPizza.slice()).to.equal(6);
    });
    it("will return the number of slices when the diameter has a remainder of 1 when divided by 4", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 13;
      expect(testPizza.slice()).to.equal(6);
    });
    it("will return the number of slices when the diameter has a remainder of 2 when divided by 4", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 14;
      expect(testPizza.slice()).to.equal(6);
    });
    it("will return the number of slices when the diameter has a remainder of 3 when divided by 4", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 15;
      expect(testPizza.slice()).to.equal(6);
    });
    it("will return one slice if the pizza is smaller than four inches", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 3;
      expect(testPizza.slice()).to.equal(1);
    });
    it("will return two more slices if the topping is pepperoni", function() {
      var testPizza = Object.create(Pizza);
      testPizza.topping = "pepperoni";
      expect(testPizza.slice()).to.equal(2);
    });
  });
});
