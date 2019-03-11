/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {

    constructor(amountDue, cashTendered) {
        this.amountDue = amountDue;
        this.cashTendered = cashTendered;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      if (type === 'quarter'){
        return this.cashTendered + 25;
      } else if (type === 'dime'){
        return this.cashTendered + 10;
      } else if (type === 'nickle'){
        return this.cashTendered + 5;
      } else if (type === 'penny'){
        return this.cashTendered + 1;
      }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      if (this.cashTendered >= this.amountDue) {
       return true;
     } else {
       return false;
     }
   }

   giveChange() {
          // TODO return the correct change in the following format...
          let change = {
            numQuarters: 0,
            numDimes: 0,
            numNickels: 0,
            numPennies: 0
          };

          let amountOwed = this.cashTendered - this.amountDue;

          while (amountOwed > 0) {
              if (amountOwed >= 25) {
                  amountOwed -= 25;
                  change.numQuarters += 1;
              }
              else if (amountOwed >= 10) {
                  amountOwed -= 10;
                  change.numDimes += 1;
              }
              else if (amountOwed >= 5) {
                  amountOwed -= 5;
                  change.numNickels += 1;
              }
              else if (amountOwed >= 1) {
                  amountOwed -= 1;
                  change.numPennies += 1;
              }
          }

          return {
              quarters: change.numQuarters,
              dimes: change.numDimes,
              nickels: change.numNickels,
              pennies: change.numPennies
          }
      }
   }
