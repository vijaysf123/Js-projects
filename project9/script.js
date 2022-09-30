const calc = document.querySelector(".calculator");
const outputBox = document.querySelector(".output-box");
calc.addEventListener("click", (e) => {
    if (e.target.classList.contains("num") || e.target.classList.contains("fnc")) {
        // check either last character is a fnc(+ - / *)
        if (!isContainFnc(e.target.textContent)) {

            // check is there inifinity text on the box      
            if (outputBox.textContent == "Infinity" || outputBox.textContent == "NaN") {
                outputBox.textContent = "";
            }
            outputBox.textContent += e.target.textContent;

        }
    }

    // clear box if user click on clear btn
    if (e.target.classList.contains("clear")) {
        outputBox.textContent = "";
    }

    // evaluate string if
    // last index is a number and clicked on equals btn
    if (e.target.classList.contains("ans")) {
        // if last index willl be a number isnan will return false
        if (!isNaN(outputBox.textContent[outputBox.textContent.length - 1])) {
            outputBox.textContent = eval(outputBox.textContent.trim());
        }
    }
});

// checks is the last character and current charater is calculation symbol
function isContainFnc(crr) {
    let fnc = outputBox.textContent[outputBox.textContent.length - 1];
    if (fnc == "+" || fnc == "-" || fnc == "/" || fnc == "*") {
        if (crr == "+" || crr == "-" || crr == "/" || crr == "*") {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}