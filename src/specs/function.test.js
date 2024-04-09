const validateCreditCardNumber = require("../utils/validation copy");
describe('validate function', () => {
    it('should return valid card and return undefined', () => {
        let x = "222222567887678"
        expect(validateCreditCardNumber(x)).toBe(undefined)
    });
    it('should return Invalid credit card number', () => {
        let x = "22227678"
        expect(validateCreditCardNumber(x)).toBe('Invalid credit card number')
    });

});
