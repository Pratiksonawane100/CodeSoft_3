function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var displayValue = document.getElementById('display').value;
    var result = eval(displayValue); // This is a basic approach, not recommended for production due to security concerns

    document.getElementById('display').value = result;
}
