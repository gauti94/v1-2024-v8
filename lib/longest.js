import { isString } from "./helpers.js";

export function longest(str) {
    if (isString(str)) {
      const split = str.split(" ");
      let longest = "";
      for (const word of split) {
        if (word.length > longest.length) {
          longest = word;
        }
      }
      return longest;
    }
    return null;
  }
  console.assert(
    longest("Halló þetta er laaaaaangt") === "laaaaaangt",
    "longest: skilar lengsta orðinu í strengnum"
  );
  console.assert(
    longest("") === "",
    "longest: ef strengur er tómur þá skila tómum streng"
  );
  console.assert(longest(false) === null, "longest: ef ekki strengur skila null");
  