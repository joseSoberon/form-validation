const Input = (input, inputError) => {
    let element = document.getElementById(input);
    let error = document.getElementById(inputError);
    let errors = errors;

    function addEvent(action) {
        element.addEventListener(action, () => {
            if (element.validity.valid) {
                error.textContent = "";
                error.className = "error";
                setValidityClass("valid", "invalid");
            }
            else {
                checkMissing();
                checkMismatch();
                setValidityClass("invalid", "valid");
            }
        })
    }

    function checkMissing() {
        if (element.validity.valueMissing) {
            error.textContent = "Please complete this field";
        }
    }

    function checkMismatch() {
        if (element.validity.typeMismatch || element.validity.patternMismatch) {
            error.textContent = "Entered value needs to be a valid formart";
        }
    }

    function checkSelection() {
        element.addEventListener("focusout", () => {
            if (element.value != "default") {
                error.textContent = "";
                error.className = "error";
            }
            else {
                error.textContent = "Please select a country";
            }
        })
    }

    function setValidityClass(validityClass, lastClass) {
        if (!element.classList.contains(validityClass)) {
            if (element.classList.contains(lastClass)) {
                element.classList.remove(lastClass);
            }
            element.classList.add(validityClass);
        }
    }


    return { element, error, addEvent, checkSelection };
};

export { Input };
