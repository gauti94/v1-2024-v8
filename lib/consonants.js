import { isString } from "./helpers.js";

const CONSONANTS = "BCDFGHJKLMNPQRSTVWXZÞbcdfghjklmnpqrstvwxzþ".split("");


export function consonants(str) {
    let consonantCount = 0;
    if (isString(str)) {
      for (const char of str) {
        if (CONSONANTS.includes(char)) {
          consonantCount++;
        }
      }
      return consonantCount;
    } else {
      return 0;
    }
  }
  console.assert(
    consonants("halló") === 3,
    "consonants: skilar fjölda samhljóða í setningu"
  );
  console.assert(
    consonants("lengri setning") === 9,
    "consonants: skilar fjölda samhljóða í setningu"
  );
  console.assert(
    consonants("") === 0,
    "consonants: ef tómur strengur þá skila 0"
  );
  console.assert(
    consonants("aaa") === 0,
    "consonants: ef engir samhljóðar þá skila 0"
  );