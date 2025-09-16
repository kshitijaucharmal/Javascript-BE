let userArray = [];

// Step 1 & 2: Accept array size and create input boxes
function createArray() {
  const size = parseInt(document.getElementById("arraySize").value);
  const container = document.getElementById("arrayInputs");
  container.innerHTML = "";

  if (isNaN(size) || size <= 0) {
    alert("Please enter a valid array size.");
    return;
  }

  for (let i = 0; i < size; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Element ${i + 1}`;
    input.id = `element-${i}`;
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }

  document.getElementById("saveArrayBtn").style.display = "inline-block";
}

// Step 3: Save array
function saveArray() {
  const size = parseInt(document.getElementById("arraySize").value);
  userArray = [];

  for (let i = 0; i < size; i++) {
    let val = document.getElementById(`element-${i}`).value.trim();

    // Try parsing numbers or arrays
    try {
      val = JSON.parse(val);
    } catch (e) {
      // keep as string if not JSON parsable
    }

    userArray.push(val);
  }

  document.getElementById("finalArray").innerText = JSON.stringify(userArray);
  document.getElementById("isArrayCheck").innerText = "-";
}

// Step 4 & 5: Append object and check
function appendObject() {
  let val = document.getElementById("appendValue").value.trim();

  if (val === "") {
    alert("Enter a value to append!");
    return;
  }

  try {
    val = JSON.parse(val);
  } catch (e) {
    // keep as string
  }

  userArray.push(val);

  document.getElementById("finalArray").innerText = JSON.stringify(userArray);
  document.getElementById("isArrayCheck").innerText = Array.isArray(val) ? "Yes, it's an Array ✅" : "No, not an Array ❌";
}
