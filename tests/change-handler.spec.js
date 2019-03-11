// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    it("insert a coin and get the value - insertCoin function", function() {
      //arrange
      let changeHandler = new ChangeHandler(0,0);
      //assert
      changeHandler.insertCoin('penny');
      //act
      expect(changeHandler.insertCoin('penny')).toBe(1);
      expect(changeHandler.insertCoin('nickle')).toBe(5);
      expect(changeHandler.insertCoin('dime')).toBe(10);
      expect(changeHandler.insertCoin('quarter')).toBe(25);
    });

    it("did they pay enough - isPaymentSufficient function", function() {
        //Arrage
        let changeHandler = new ChangeHandler(30,20);
        //Assert
        changeHandler.isPaymentSufficient();
        //Act
        expect(changeHandler.isPaymentSufficient()).toBe(false);
    });

    it("how much change to they need - giveChange function", function() {
      //Arrange
      let changeHandler = new ChangeHandler(100,151);
      //Assert
      changeHandler.giveChange();
      //Act
      expect(changeHandler.giveChange()).toEqual({
        quarters: 2,
        dimes: 0,
        nickels: 0,
        pennies: 1
      });

    });

});
