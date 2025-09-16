let arr = [];

// Update array display and table
function updateDisplay(message="") {
  document.getElementById("arrayDisplay").textContent = JSON.stringify(arr);
  document.getElementById("message").textContent = message;

  const table = document.getElementById("arrayTable");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  if (arr.length > 0) {
    table.style.display = "table";
    arr.forEach((val, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${index}</td><td>${val}</td>`;
      tbody.appendChild(row);
    });
  } else {
    table.style.display = "none";
  }
}

// Create array from input
function createArray() {
  const input = document.getElementById("arrayInput").value.trim();
  if (!input) {
    updateDisplay("⚠️ Please enter some elements first.");
    return;
  }
  arr = input.split(",").map(el => el.trim()).filter(el => el !== "");
  updateDisplay("✅ Array created successfully.");
}

// Remove element
function removeElement() {
  if (arr.length === 0) {
    updateDisplay("⚠️ Array is empty. Nothing to remove.");
    return;
  }
  const value = document.getElementById("removeInput").value.trim();
  if (!value) {
    updateDisplay("⚠️ Enter a value to remove.");
    return;
  }
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
    updateDisplay(`🗑️ Removed '${value}' from the array.`);
  } else {
    updateDisplay(`❌ '${value}' not found in the array.`);
  }
}

// Check element
function checkElement() {
  if (arr.length === 0) {
    updateDisplay("⚠️ Array is empty. Nothing to check.");
    return;
  }
  const value = document.getElementById("checkInput").value.trim();
  if (!value) {
    updateDisplay("⚠️ Enter a value to check.");
    return;
  }
  if (arr.includes(value)) {
    updateDisplay(`✅ '${value}' is present in the array.`);
  } else {
    updateDisplay(`❌ '${value}' is NOT in the array.`);
  }
}

// Empty array
function emptyArray() {
  if (arr.length === 0) {
    updateDisplay("⚠️ Array is already empty.");
    return;
  }
  arr = [];
  updateDisplay("🧹 Array emptied.");
}
