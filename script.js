let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
    console.log(`Current Display Value: ${displayValue}`);
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
    console.log('Display Cleared');
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').value = result;
        console.log(`Result: ${result}`);
    } catch (error) {
        document.getElementById('display').value = 'Error';
        console.error('Error during calculation:', error);
    }
}
