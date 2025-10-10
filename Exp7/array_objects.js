let userArray = [];

// Step 1 & 2: Accept array size and create input boxes (No change needed here)
function createArray() {
  const size = parseInt(document.getElementById("arraySize").value);
  const container = document.getElementById("arrayInputs");
  container.innerHTML = "";

  if (isNaN(size) || size <= 0) {
    alert("Please enter a valid array size (a positive number).");
    return;
  }

  // Create input fields based on the reserved size
  for (let i = 0; i < size; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Element ${i + 1} (Use double quotes for strings/objects)`;
    input.id = `element-${i}`;
    container.appendChild(input);
    container.appendChild(document.createElement("br"));
  }

  document.getElementById("saveArrayBtn").style.display = "inline-block";
  document.getElementById("saveArrayBtn").disabled = false;
}

// Step 3: Save array (Updated logic for handling input)
function saveArray() {
  const size = parseInt(document.getElementById("arraySize").value);
  userArray = []; // Reset the array

  for (let i = 0; i < size; i++) {
    let val = document.getElementById(`element-${i}`).value.trim();

    // Check if the input is empty
    if (val === "") {
      userArray.push(val); // Push an empty string
      continue;
    }

    // Try parsing the value as JSON (Number, Boolean, Object, or Array)
    try {
      // NOTE: JSON.parse requires **double quotes** for string values
      // If the user enters [1, 2], it will parse as an array
      // If the user enters {"key": "value"}, it will parse as an object
      // If the user enters 123, it will parse as a number
      // If the user enters "hello", it will parse as the string 'hello' (without the quotes)
      let parsedVal = JSON.parse(val);
      userArray.push(parsedVal);
    } catch (e) {
      // If parsing fails (e.g., user entered a plain unquoted word like 'hello'
      // or invalid JSON like ['a', 'b']), keep the original trimmed value as a string.
      userArray.push(val);
    }
  }

  document.getElementById("finalArray").innerText = JSON.stringify(
    userArray,
    null,
  );
  document.getElementById("isArrayCheck").innerText = "-";
}

// Step 4 & 5 (Modified): Check if an element at a specific index is an array (No change needed here)
function checkIfArray() {
  let index = Number(document.getElementById("checkIndex").value);

  if (isNaN(index) || index < 0 || index >= userArray.length) {
    document.getElementById("isArrayCheck").innerText = "Invalid Index ⚠️";
    return;
  }

  // This is the correct check if the element at the index is a true JavaScript array object
  document.getElementById("isArrayCheck").innerText = Array.isArray(
    userArray[index],
  )
    ? "Yes, it's an Array ✅"
    : "No, not an Array ❌";
}
