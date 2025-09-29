let default_color = "#FBB13C";
let focus_color = "#4c9f70";
let hover_color = "#8EA4D2";

// Set to default
document.body.style.backgroundColor = default_color;

let header_text = document.getElementById("p_hover");

header_text.addEventListener("mouseover", function (event) {
  const curColour = document.body.style.backgroundColor;
  document.body.style.backgroundColor = hover_color;
});

header_text.addEventListener("mouseleave", function (event) {
  const curColour = document.body.style.backgroundColor;
  document.body.style.backgroundColor = default_color;
});

let batch_select = document.getElementById("batch");

batch_select.addEventListener("focus", function (event) {
  const curColour = document.body.style.backgroundColor;
  document.body.style.backgroundColor = focus_color;
});

batch_select.addEventListener("blur", function (event) {
  const curColour = document.body.style.backgroundColor;
  document.body.style.backgroundColor = default_color;
});
