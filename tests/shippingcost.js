const chai = require('chai');
const { assert } = require('nightwatch');
const expect = chai.expect;

describe('Shipping Cost Calculation', function () {
    // Test case for the minimum allowed weight (0 kg)
    it('should return 0 for minimum weight (0 kg)', function () {
        expect(calculateShippingCost(0)).to.equal(0);
    });

    // Test case for the maximum allowed weight (100 kg)
 it('should return $75 for maximum weight (100 kg)', function () {
        expect(calculateShippingCost(100)).to.equal(75);
    });



    // Test case for weights between 0 and 10 kg (free shipping)

    it('should return 0 for weights between 0 and 10 kg (free shipping)', function () {
        for (let index = 0; index < 10; index++) {
            expect(calculateShippingCost(index)).to.equal(0);
        }
    });



    // Test case for weights between 10 and 50 kg (10% of weight added)

    it('should add 10% of the weight for weights between 10 and 50 kg', function () {
        for (let index = 10; index < 50; index++) {
            expect(calculateShippingCost(index)).to.equal(index * 1.1);
        }
    });



    // Test case for weights of 50 kg or more ($75 flat rate)

    it('should return $75 for weights of 50 kg or more (flat rate)', function () {
        for (let index = 50; index < 100; index++) {
            expect(calculateShippingCost(index)).to.be.equal(75);
        }
    });

    it('should return correct value for weight just below 50 kg', function () {
        expect(calculateShippingCost(47.9)).to.be.closeTo(47.9 * 1.1, 0.01);
    });

    it('should thow error when the input is 101', () => {
        try {
            calculateShippingCost(101);
        } catch (error) {
            expect(error.message).to.equal('weight should be between 0 to 100');
        }
    });

    it('should thow error when the input is -1', () => {
        try {
            calculateShippingCost(-1);
        } catch (error) {
            expect(error.message).to.equal('weight should be between 0 to 100');
        }
    });
});


function calculateShippingCost(weight) {
    if (weight < 0 || weight > 100) {
        throw new Error('weight should be between 0 to 100')
    }
    else if (weight < 10) {
        return 0;
    }
    else if (weight < 50) {
        return weight * 1.1;
    }
    else {
        return 75;
    }
}







// It seems like you
// 're trying to write a test case for a function called calculateShippingCost to check if it throws an error when the input weight is greater than 100. 
// However, the test case is not working as expected.

// The issue is with the use of expect and to.throw in your code. 
// In JavaScript, expect and to.throw are typically used with functions that return a value. However,
//  when you want to test if a function throws an error, you should use a different approach.