export const validateCreditCardNumber = (value) => {
    // Remove non-digit characters
    const cleanedValue = value.replace(/\D/g, '');
    // Check if the input has only digits and is of the correct length (typically 13 to 19 digits)
    if (!/^\d{13,19}$/.test(cleanedValue)) {
        return 'Invalid credit card number';
    }
    // Perform checksum validation (e.g., Luhn algorithm)
    // You can implement your own checksum validation logic here or use a library
    // Return undefined if the input is valid
    return undefined;
};
export const validateExpirationDate = (value) => {
    // Check if the input matches the MM/YYYY format
    if (!/^(0[1-9]|1[0-2])\/[0-9]{4}$/.test(value)) {
        return 'Invalid expiration date format (MM/YYYY)';
    }

    // Split the input into month and year parts
    const [month, year] = value.split('/');

    // Convert the month and year parts to numbers
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);

    // Get the current date
    const currentDate = new Date();

    // Check if the expiration date is in the past
    if (numericYear < currentDate.getFullYear() ||
        (numericYear === currentDate.getFullYear() && numericMonth < (currentDate.getMonth() + 1))) {
        return 'Expiration date cannot be in the past';
    }

    // Return undefined if the input is valid
    return undefined;
};