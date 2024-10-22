export function reset() {
  const textareaElement = document.querySelector("textarea");
  if (textareaElement) {
    textareaElement.value = "";
  }

  const longestElement = document.querySelector(".longest");
  if (longestElement) {
    longestElement.textContent = "";
  }

  const shortestElement = document.querySelector(".shortest");
  if (shortestElement) {
    shortestElement.textContent = "";
  }

  const vowelsCount = document.querySelector(".vowels");
  if (vowelsCount) {
    vowelsCount.textContent = "";
  }

  const consonantCount = document.querySelector(".consonants");
  if (consonantCount) {
    consonantCount.textContent = "";
  }

  const isPalindrome = document.querySelector(".palindrome");
  if (isPalindrome) {
    isPalindrome.textContent = "";
  }

  const reversed = document.querySelector(".reversed");
  if (reversed) {
    reversed.textContent = "";
  }
  const inputPreview = document.querySelector(".wide .input");
  if (inputPreview) {
    inputPreview.textContent = "";
  }
}
