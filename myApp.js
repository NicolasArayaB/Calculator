let result = 0;
let display = document.getElementById("display");

// Populate de display.
function displayScreen(a) {
    let displayArray = display.textContent.split(/([^\d.]+)/);
    if (parseFloat(a) || a == "0") {
        display.textContent += a;
    } else if (a == "add") {
        display.textContent += "+";
        
        if (displayArray.length > 2) {
            operate(displayArray);
            display.textContent += "+";
        }
    } else if (a == "subs") {
        display.textContent += "-";
        if (displayArray.length > 2) {
            operate(displayArray);
            display.textContent += "-";
        }
    } else if (a == "multi") {
        display.textContent += "*";
        if (displayArray.length > 2) {
            operate(displayArray);
            display.textContent += "*";
    
        }
    } else if (a == "divide") {
        display.textContent += "/";
        if (displayArray.length > 2) {
            operate(displayArray);
            display.textContent += "/";
        }
    } else if (a == "dot") {
        display.textContent += ".";
    } else if (a == "clear") {
        display.textContent = "";
    } else if (a == "equal") {
        operate(displayArray);
    } else if (a == "del") {
        let str = display.textContent
        display.textContent = str.substring(0, str.length-1)
    }
}

// Operate Function.
function operate(a) {
    let i = 0;
    for (i = 0; a[i] != null; i++) {
        if (!parseFloat(a[i])) {  
            if (a[i] == '+') {
                add(parseFloat(a[i-1]), parseFloat(a[i+1]));
            } else if (a[i] == '-') {
                subtract(parseFloat(a[i-1]), parseFloat(a[i+1]));
            } else if (a[i] == '*') {
                multiply(parseFloat(a[i-1]), parseFloat(a[i+1]));
            } else if (a[i] == '/') {
                divide(parseFloat(a[i-1]), parseFloat(a[i+1]));
            }
        }
    }
    updatedDisplay(result)
}

// Add function.
const add = (a, b) =>  result = parseFloat(a + b);
// Subtract function.
const subtract = (a, b) => result = parseFloat(a - b);

// Multiply function.
const multiply = (a, b) => result = parseFloat(a * b);

// Divide function.
const divide = (a, b) => 
    result = parseFloat(a / b);
    
function updatedDisplay(a) {
    display.textContent = "";
    if (isNaN(a)) {
        display.textContent = "ERROR";
    } else {
        display.textContent = parseFloat(a);
    }
}

document.getElementById("buttons").addEventListener("click", (e) => {
    let tId = e.target.id
    displayScreen(tId);
});