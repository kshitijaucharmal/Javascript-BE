function compareStrings() {
  const string1 = document.getElementById("stringInput1").value;
  const string2 = document.getElementById("stringInput2").value;
  const resultsArea = document.getElementById("results-area");

  if (string1.trim() === "" || string2.trim() === "") {
    resultsArea.classList.add("hidden");
    return;
  }
  resultsArea.classList.remove("hidden");
  let equalityOutput;
  if (string1 === string2) {
    equalityOutput = `The strings are strictly equal.`;
  } else {
    equalityOutput = `The strings are NOT strictly equal.`;
  }
  document.getElementById("equalityResult").innerHTML = equalityOutput;

  let lengthOutput;
  const len1 = string1.length;
  const len2 = string2.length;
  if (len1 > len2) {
    lengthOutput = `<code>string1</code> is longer than <code>string2</code> (${len1} > ${len2}).`;
  } else if (len1 < len2) {
    lengthOutput = `<code>string2</code> is longer than <code>string1</code> (${len2} > ${len1}).`;
  } else {
    lengthOutput = `Both strings have the same length (${len1}).`;
  }
  document.getElementById("lengthResult").innerHTML = lengthOutput;

  let localeOutput;
  const comparisonResult = string1.localeCompare(string2);
  if (comparisonResult < 0) {
    localeOutput = `<code>"${string1}"</code> comes before <code>"${string2}"</code> alphabetically.`;
  } else if (comparisonResult > 0) {
    localeOutput = `<code>"${string2}"</code> comes before <code>"${string1}"</code> alphabetically.`;
  } else {
    localeOutput = `The strings are alphabetically equal.`;
  }
  document.getElementById("localeResult").innerHTML = localeOutput;
}
