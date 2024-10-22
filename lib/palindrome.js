import { isString } from "./helpers.js";

export function palindrome(str) {
    if (str === "") {
      return false;
    }
    if (isString(str)) {
      const normalized = str.toLowerCase();
      const split = normalized.split("");
      const reversed = split.reverse().join("");
      return normalized === reversed;
    } else {
      return false;
    }
  }
  console.assert(
    palindrome("civic") === true,
    "palindrome: er setningin palindrome?"
  );
  console.assert(
    palindrome("") === false,
    "palindrome: tómur strengur er ekki samhverfur"
  );
  console.assert(palindrome(5) === false, "palindrome: 5 er ekki strengur");
  