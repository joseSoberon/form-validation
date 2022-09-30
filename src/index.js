import { Input } from './inputElement';

let email = Input("email", "email-error");
email.addEvent("focusout");

let country = Input("country", "country-error")
country.checkSelection();

let zipCode = Input("zip-code", "zip-error");
zipCode.addEvent("focusout");
