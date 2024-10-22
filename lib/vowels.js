import { isString } from "./helpers.js";

const VOWELS = "AEIOUYÁÉÝÚÍÓÖÆaeiouyáéýúíóöæ".split("");


export function vowels(str) {
    let vowelCount = 0;
    if (isString(str)) {
      for (const char of str) {
        if (VOWELS.includes(char)) {
          vowelCount++;
        }
      }
      return vowelCount;
    } else {
      return 0;
    }
  }
  console.assert(
    vowels("halló") === 2,
    "vowels: skilar fjölda sérhljóða í setningu"
  );
  console.assert(
    vowels("lengri setning") === 4,
    "vowels: skilar fjölda sérhljóða í setningu"
  );
  console.assert(vowels("") === 0, "vowels: ef tómur strengur þá skila 0");
  console.assert(vowels("hhh") === 0, "vowels: ef engir sérhljóðar þá skila 0");
  