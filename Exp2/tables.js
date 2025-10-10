// For CSS
let ll = "lightline";
let dl = "darkline";

function table_with_for() {
  let n = Number(document.getElementById("in_for").value);

  if (n == 0) {
    alert("Invalid input! Please enter a number other than 0.");
    return;
  }

  let full_text = "";
  for (let i = 1; i <= 10; i++) {
    let text = `${n} x ${i} = ${n * i}`;
    let line = i % 2 == 0 ? ll : dl;
    let final_line = `<h3 id="${line}">` + text + "</p><br>";

    full_text += final_line;
  }
  document.getElementById("table_for").innerHTML = `${full_text}`;
}
function table_with_while() {
  let n = Number(document.getElementById("in_while").value);

  if (n == 0) {
    alert("Invalid input! Please enter a number other than 0.");
    return;
  }

  let full_text = "";
  let i = 1;
  while (i <= 10) {
    let text = `${n} x ${i} = ${n * i}`;
    let line = i % 2 == 0 ? ll : dl;
    let final_line = `<h3 id="${line}">` + text + "</p><br>";

    full_text += final_line;
    i++;
  }
  document.getElementById("table_while").innerHTML = `${full_text}`;
}
function table_with_dowhile() {
  let n = Number(document.getElementById("in_dowhile").value);

  if (n == 0) {
    alert("Invalid input! Please enter a number other than 0.");
    return;
  }

  let full_text = "";
  let i = 1;
  do {
    let text = `${n} x ${i} = ${n * i}`;
    let line = i % 2 == 0 ? ll : dl;
    let final_line = `<h3 id="${line}">` + text + "</p><br>";

    full_text += final_line;
    i++;
  } while (i <= 10);
  document.getElementById("table_dowhile").innerHTML = `${full_text}`;
}
