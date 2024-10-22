import { isString } from "./helpers.js";

export function shortest(str) {
    if (isString(str)) {
      const split = str.split(" ");
      let shortest = split[0];
      for (const word of split) {
        if (word.length < shortest.length) {
          shortest = word;
        }
      }
      return shortest;
    }
    return null;
  }
  console.assert(
    shortest("Halló þetta er laaaaaangt") === "er",
    "shortest: skilar stysta orðinu í strengnum"
  );
  console.assert(
    shortest("") === "",
    "reverse: ef strengur er tómur þá skila tómum streng"
  );
  console.assert(
    shortest(false) === null,
    "longest: ef ekki strengur skila null"
  );