function getNumbers() {
    let num1 = parseFloat(document.getElementById("first-number").value);
    let num2 = parseFloat(document.getElementById("second-number").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerHTML = "Error: Please enter valid numbers.";
        document.getElementById("output").style.backgroundColor = "transparent";
        return null;
    }
    return [num1, num2];
}

function updateResult(result) {
    let outputElement = document.getElementById("output");
    outputElement.innerHTML = "Result: " + result;

    // If result is negative, change background to red
    if (result < 0) {
        outputElement.style.backgroundColor = "#ffcccb"; // Light red
        outputElement.style.color = "black";
    } else {
        outputElement.style.backgroundColor = "transparent";
        outputElement.style.color = "black";
    }
}

function addition() {
    let numbers = getNumbers();
    if (numbers) {
        updateResult(numbers[0] + numbers[1]);
    }
}

function subtraction() {
    let numbers = getNumbers();
    if (numbers) {
        updateResult(numbers[0] - numbers[1]);
    }
}

function multiplication() {
    let numbers = getNumbers();
    if (numbers) {
        updateResult(numbers[0] * numbers[1]);
    }
}

function division() {
    let numbers = getNumbers();
    if (numbers) {
        if (numbers[1] === 0) {
            document.getElementById("output").innerHTML = "Error: Division by zero!";
            document.getElementById("output").style.backgroundColor = "transparent";
        } else {
            updateResult(numbers[0] / numbers[1]);
        }
    }
}

// Power Function using For Loop (No Math.pow() or **)
function power() {
    let numbers = getNumbers();
    if (numbers) {
        let base = numbers[0];
        let exponent = numbers[1];

        if (exponent < 0) {
            document.getElementById("output").innerHTML = "Error: Negative exponents not supported!";
            document.getElementById("output").style.backgroundColor = "transparent";
            return;
        }

        let result = 1;
        for (let i = 0; i < exponent; i++) {
            result *= base;
        }

        updateResult(result);
    }
}

// Clear Fields Function
function clearFields() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "Result: ";
    document.getElementById("output").style.backgroundColor = "transparent";
}
