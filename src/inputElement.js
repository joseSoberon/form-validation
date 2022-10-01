/*
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

    function checkPassword(password) {
        element.addEventListener("focusout", () => {
            console.log(password);
            console.log(element.value);
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


    return { element, error, addEvent, checkSelection, checkPassword };
};
*/

class Element {
    constructor(id, idError) {
        this.container = document.getElementById(id);
        this.error = document.getElementById(idError);
    }

    setValidityClass(validityClass, lastClass) {
        if (!this.container.classList.contains(validityClass)) {
            if (this.container.classList.contains(lastClass)) {
                this.container.classList.remove(lastClass);
            }
            this.container.classList.add(validityClass);
        }
    }
}

class Input extends Element {
    constructor(id, idError) {
        super(id, idError);
    }

    addEvent(action) {
        this.container.addEventListener(action, () => {
            if (this.container.validity.valid) {
                this.error.textContent = "";
                this.error.className = "error";
                this.setValidityClass("valid", "invalid");
            }
            else {
                this.checkMissing();
                this.checkMismatch();
                this.setValidityClass("invalid", "valid");
            }
        })
    }

    checkMissing() {
        if (this.container.validity.valueMissing) {
            this.error.textContent = "Please complete this field";
        }
    }

    checkMismatch() {
        if (this.container.validity.typeMismatch || this.container.validity.patternMismatch) {
            console.log("Hello")
            this.error.textContent = "Entered value need to be a valid format";
        }
    }

    checkValid() {
        if (this.container.validity.valid) {
            return true;
        }
        return false;
    }
}

class Select extends Element {
    constructor(id, idError) {
        super(id, idError);
    }

    addEvent(action) {
        this.container.addEventListener(action, () => {
            if(this.container.value != "default") {
                this.error.textContent = "";
                this.error.className = "error";
                this.setValidityClass("valid", "invalid");
            }
            else {
                this.error.textContent = "Please Select a Country";
            }
        })
    }

    checkValid() {
        if (this.container.value != "default") {
            return true;
        }
        return false;
    }
}

class Password extends Input {
    constructor(id, idError, idConfirm, idConfirmError) {
        super(id, idError);
        this.confirmContainer = document.getElementById(idConfirm);
        this.confirmError = document.getElementById(idConfirmError)
    }

    confirmPassword() {
        this.confirmContainer.addEventListener("input", () => {
            if (this.container.value == this.confirmContainer.value) {
                this.confirmError.textContent = "";
                this.confirmError.className = "error";
            }
            else {
                this.confirmError.textContent = "Your password doesn't match";
            }
        })
    }

    checkValid() {
        if (this.container.validity.valid) {
            return true;
        }
        return false;
    }

    confirmValid() {
        if (this.container.value == this.confirmContainer.value) {
            return true;
        }
        return false;
    }
}


export { Input, Select, Password };
