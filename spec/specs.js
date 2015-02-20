describe("Pizza", function() {
  describe("slice", function() {
    it("will return four slices if the diameter is greater than or equal to 4 and less than 8 inches", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 7;
      expect(testPizza.slice()).to.equal(4);
    });
    it("will return 6 slices if the diameter is between 8 and 12 inches", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 10;
      expect(testPizza.slice()).to.equal(6);
    });
    it("will return 8 slices if the diameter is between 12 and 16 inches", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 13;
      expect(testPizza.slice()).to.equal(8);
    });
  });
});
