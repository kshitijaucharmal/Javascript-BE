// reverse
function reverse() {
  let s = document.getElementById("string").value;

  // Reverse
  let k = s.split('').reverse().join('');

  document.getElementById("original_rev").innerHTML = s;
  document.getElementById("reversed_rev").innerHTML = k;
}
// replace
function replace() {
  let s = document.getElementById("string").value;

  let a = document.getElementById("to_replace").value;
  let b = document.getElementById("with_replace").value;

  let ans = s.replace(a, b);

  document.getElementById("original_rep").innerHTML = s;
  document.getElementById("replaced_rep").innerHTML = ans;
}
// palindrome (or not)
function checkPalindrome() {
  let s = document.getElementById("string").value;

  // Reverse
  let rev = s.split('').reverse().join('');
  let ans = (rev === s) ? "True" : "False";

  document.getElementById("original_pal").innerHTML = s;
  document.getElementById("palindrome").innerHTML = ans;
}

function allFunctions() {
  let s = document.getElementById("string").value;
  console.log("Original String", s);

  console.log("-----------Not in place-------------")
  console.log("Length: ", s.length);
  console.log("Upper case: ", s.toUpperCase());
  console.log("Lower case: ", s.toLowerCase());

  console.log("Index of (T): ", s.indexOf('T'));
  console.log("Concat with (for cats): ", s.concat(" for cats"));
  console.log("Pad Start: ", s.padStart(s.length + 10, '-'));
  console.log("Pad End: ", s.padEnd(s.length + 10, '-'));
  console.log("Char At: ", s.charAt(5));
  console.log("Char Code At: ", s.charCodeAt(5));
  console.log("Split: ", s.split(' '));
  console.log("Slice: ", s.slice(0, 4));

  console.log("-----------(In Place Methods)-------------")
  let orig = "  Pune Institute of Computer Technology  ";
  let ns = orig;
  console.log("Trim: ", ns.trim());
  ns = orig;
  console.log("Trim Start: ", ns.trimStart());
  ns = orig;
  console.log("Trim End: ", ns.trimEnd());

  ns = s;
  console.log("Replace (u) with (a): ", ns.replace('u', 'a'));
  ns = s;
  console.log("Replace All (u) with (a): ", ns.replaceAll('u', 'a'));
  ns = s;
  let arr = ns.split("");
  let removed = arr.splice(0, 4, "Javascript").join('');
  console.log("Splice: (Removed, Original)", removed, ",", arr.join(''));
}
