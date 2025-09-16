function circle_area() {
  var radius = document.getElementById("radiusOfCircle").value;
  if (radius < 0)
    // Alert
    return null;

  let area = Math.PI * radius * radius;
  console.log(area);
  document.getElementById("AreaCircle").innerHTML = area;
}

function rect_area() {
  var length = document.getElementById("lengthOfRect").value;
  var breadth = document.getElementById("breadthOfRect").value;

  if (length < 0 || breadth < 0)
    // Alert
    return null;

  let area = (length * breadth);
  // Debug
  console.log(area);

  document.getElementById("AreaRect").innerHTML = area;
}

function triangle_area() {
  var a = +document.getElementById("sideA").value;
  var b = +document.getElementById("sideB").value;
  var c = +document.getElementById("sideC").value;

  // Semi Perimeter
  console.log(a + " " + b + " " + c);
  var s = (a + b + c) / 2;
  var val = s * (s - a) * (s - b) * (s - c);
  console.log(val);

  if (val < 0) {
    alert("Not a triangle !!");
    return;
  }
  var area = Math.sqrt(val);
  console.log(area);

  document.getElementById("AreaTriangle").innerHTML = area;
}

function reset() {
  var id = "";
  switch (event.target.id) {
  case "ResetCircle":
    id = "AreaCircle"
    break;
  case "ResetRect":
    id = "AreaRect"
    break;
  case "ResetTriangle":
    id = "AreaTriangle"
    break;
  default:
    alert("Nope");
  }

  document.getElementById(id).innerHTML = "-";
}
