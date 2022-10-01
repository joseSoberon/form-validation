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
