import { longest } from "./longest.js";
import { shortest } from "./shortest.js";
import { vowels } from "./vowels.js";
import { consonants } from "./consonants.js";
import { palindrome } from "./palindrome.js";
import { reverse } from "./reverse.js";

export function submitHandler(event) {
  event.preventDefault();
  const textareaElement = document.querySelector("textarea");

  if (textareaElement) {
    const longestElement = document.querySelector(".longest");
    if (longestElement) {
      longestElement.textContent = longest(textareaElement?.value);
    }
    const shortestElement = document.querySelector(".shortest");
    if (shortestElement) {
      shortestElement.textContent = shortest(textareaElement.value);
    }
    const vowelsCount = document.querySelector(".vowels");
    if (vowelsCount) {
      vowelsCount.textContent = vowels(textareaElement.value).toString();
    }
    const consonantCount = document.querySelector(".consonants");
    if (consonantCount) {
      consonantCount.textContent = consonants(textareaElement.value).toString();
    }
    const isPalindrome = document.querySelector(".palindrome");
    const palindromeResult = palindrome(textareaElement.value);
    if (palindromeResult) {
      if (isPalindrome) {
        isPalindrome.textContent = "";
      }
    } else {
      if (isPalindrome) {
        isPalindrome.textContent = "ekki";
      }
    }
    const reversed = document.querySelector(".reversed");
    const reversedString = reverse(textareaElement.value);
    if (reversed) {
      reversed.textContent = reversedString;
    }
  }
}
