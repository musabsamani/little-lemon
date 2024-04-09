module.exports = (value) => {
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