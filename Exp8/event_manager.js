let default_color = "#FFD952";
let hover_color = "#DE6604";

// Set to default
document.body.style.backgroundColor = default_color;

let name_label = document.getElementById("p_hover");
console.log(name_label);

name_label.addEventListener("mouseover", function(event) {
  const curColour = document.body.style.backgroundColor;
  document.body.style.backgroundColor = hover_color;
});

name_label.addEventListener("mouseleave", function(event) {
  const curColour = document.body.style.backgroundColor;
  document.body.style.backgroundColor = default_color;
});
