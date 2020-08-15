// Add function.
const add = (a, b) => a + b;

// Subtract function.
const subtract = (a, b) => a - b;

// Multiply function.
const multiply = (a, b) => a * b;

// Divide function.
const divide = (a, b) => a / b;

// Operate Function.
function operate(x, a, b) {
    if (x == '+') {
        add(a, b);
    } else if (x == '-') {
        subtract(a, b);
    } else if (x == '*') {
        multiply(a, b);
    } else if (x == '/') {
        divide(a, b);
    }
}

// Populate de display.
function display(a) {
    let display = document.getElementById("display")
    if (parseInt(a) || a == "0") {
        display.textContent += a;  
    } else if (a == "add") {
        display.textContent += "+";
    } else if (a == "subs") {
        display.textContent += "-";
    } else if (a == "multi") {
        display.textContent += "*";
    } else if (a == "divide") {
        display.textContent += "/";
    } else if (a == "dot") {
        display.textContent += ".";
    } else if (a == "clear") {
        display.textContent = "";
    } else if (a == "equal") {
        let displayValue = display.textContent;
        let num = {}
        let operator = displayValue.replace(/\d+(\.\d+)?/g, (m) => {
            num = num + " " + m;
            return "";
        });
        num = num.split(" ");
        let i = 2;
        while(num[i]) {
            console.log(num[i]);
            i++;
        }
    }
}

document.getElementById("buttons").addEventListener("click", (e) => {
    let tId = e.target.id
    display(tId);
});