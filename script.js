function palindrome(str) {
    const cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Compare characters from both ends towards the center
    for (let i = 0, j = cleanString.length - 1; i < j; i++, j--) {
        if (cleanString[i] !== cleanString[j]) {
            return false; // Characters do not match
        }
    }

    return true; // All characters matched
}

module.exports = palindrome;

