import { removeHidden } from "./lib/removeHidden.js";
import { submitHandler } from "./lib/submitHandler.js";
import { reset } from "./lib/reset.js";
import { updatePreview } from "./lib/updatePreview.js";

/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

import { isString, splitOnWhitespace } from "./lib/helpers.js";

const test = isString("hæ");
console.log("test er strengur?", test);

const stringWithWhitespace = `halló
\theimur
hæ`;
const split = splitOnWhitespace(stringWithWhitespace);
console.log(split);

const textareaElement = document.querySelector("textarea");
const formElement = document.querySelector("form");


if (formElement) {
  formElement.addEventListener("submit", submitHandler);
}

const outputElement = document.querySelector(".output");

if (outputElement) {
  removeHidden(outputElement);
}

if (textareaElement) {
  textareaElement.addEventListener("input", submitHandler);
}

if (textareaElement) {
  textareaElement.addEventListener("reset", reset);
}
if (formElement) {
  formElement.addEventListener("reset", reset);
}



if (textareaElement) {
    textareaElement.addEventListener("input", updatePreview);
}

