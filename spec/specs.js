describe("Pizza", function() {
  describe("slice", function() {
    it("will return four slices if the diameter is greater than 4 and less than 8 inches", function() {
      var testPizza = Object.create(Pizza);
      testPizza.size = 7;
      expect(testPizza.slice()).to.equal(4);
    });
  });
});
