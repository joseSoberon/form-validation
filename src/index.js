import { Input, Select, Password } from './inputElement';

let mail = new Input("email", "email-error");
mail.addEvent("focusout");

let country = new Select("country", "country-error");
country.addEvent("input");

let zipCode = new Input("zip-code", "zip-error");
zipCode.addEvent("focusout");

let password = new Password("password", "password-error", "confirm-password", "confirm-error")
password.addEvent("focusout");
password.confirmPassword();


let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    if (!formValidity()) {
        console.log("Please fil the form correctrly")
        event.preventDefault();
    }
})

function formValidity() {
    if (!mail.checkValid()) {
        return false;
    }
    if (!country.checkValid()) {
        return false;
    }
    if (!zipCode.checkValid()) {
        return false;
    }
    if (!password.checkValid()) {
        return false;
    }
    if (!password.confirmValid()) {
        return false;
    }

    return true;
}
