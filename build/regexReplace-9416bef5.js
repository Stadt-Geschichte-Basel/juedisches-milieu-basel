/**
 * regexReplace
 * @param inputStr string to be modified
 * @param regex regex as string e.g.: http://(geovistory.org)/(.*)
 * @param replace replace string e.g.: http://dev.geovistory.org/$2
 * @returns modified string
 */
function regexReplace(inputStr, regex, replace) {
  if (regex && replace) {
    const r = new RegExp(regex);
    inputStr = inputStr.replace(r, replace);
  }
  return inputStr;
}

export { regexReplace as r };

//# sourceMappingURL=regexReplace-9416bef5.js.map