// Wait for the entire DOM content to be loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
  // FIX: Renamed 'formSection' to 'formContent' to clearly target the <form> element
  const formContent = document.getElementById("studentForm");
  const welcomeSection = document.getElementById("welcome-section");

  // NOTE: '#main-container' is now the parent and remains visible.
  // We ensure the welcome section is hidden immediately when the page loads.
  welcomeSection.style.display = "none";

  // Attach the main event listener to the form submission
  formContent.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the default browser form submission
    validateForm(); // Start the validation process
  });

  /**
   * Resets the form and hides the welcome page, showing the form again (Logout function).
   */
  function resetFormAndShow() {
    formContent.reset(); // Clear all form fields

    // Clear all error messages and styles manually for robust reset
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
    document
      .querySelectorAll("input")
      .forEach((el) => el.classList.remove("error-input"));

    welcomeSection.style.display = "none";
    formContent.style.display = "block"; // Show the form
  }

  /**
   * Helper function to reset and display error messages and apply/remove error class.
   * It also re-displays the current value in the input field.
   * * @param {string} fieldId - The ID of the input element (e.g., 'first_name').
   * @param {string} errorId - The ID of the error div (e.g., 'firstNameError').
   * @param {string} message - The error message to display (or empty string to clear).
   * @param {string} value - The current value of the input field.
   * @returns {boolean} - True if validation passed (message is empty), false otherwise.
   */
  function displayError(fieldId, errorId, message, value) {
    const inputElement = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);

    // 1. Reset
    errorElement.textContent = "";
    inputElement.classList.remove("error-input");

    if (message) {
      // 2. Display Error
      errorElement.textContent = message;
      inputElement.classList.add("error-input");
      // 3. Re-display the entered value (Important for the requirement)
      inputElement.value = value;
      return false;
    }

    // Ensure the correct value is re-displayed even on success (though usually unnecessary)
    inputElement.value = value;
    return true;
  }

  /**
   * Generates and displays the welcome page with all submitted user data.
   * @param {object} data - The successfully submitted form data.
   */
  function generateSuccessPage(data) {
    console.log("--- Generating Success Page ---"); // Added debug log
    // Construct the full address string, conditionally including optional lines
    const fullAddressLines = [data.address1, data.address2, data.address3]
      .filter((line) => line)
      .join(", ");

    const contentHTML = `
            <h2 class="success-header">Welcome, ${data.fullName}!</h2>
            <p class="welcome-text">Your information has been successfully received and recorded.</p>
            <div class="user-info-display">
                <p><strong>Full Name:</strong> ${data.fullName}</p>
                <p><strong>Mobile:</strong> +91 ${data.mobileNumber}</p>
                <p><strong>Email:</strong> ${data.emailId}</p>
                <p><strong>Gender:</strong> ${data.gender}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>State:</strong> ${data.stateSelect}</p>
                <p><strong>Pincode:</strong> ${data.pincode}</p>
                <p><strong>Address Details:</strong> ${fullAddressLines || "N/A"}</p>
            </div>
            <!-- Logout button that redirects back to the form -->
            <button id="logoutButton" class="logout-btn">Logout</button>
        `;

    welcomeSection.innerHTML = contentHTML;

    // FIX APPLIED HERE: Hide only the form content, keep the main container visible
    formContent.style.display = "none";
    welcomeSection.style.display = "block";

    // Attach the click handler to the dynamically created logout button
    document
      .getElementById("logoutButton")
      .addEventListener("click", resetFormAndShow);
    console.log("--- Success Page Displayed ---"); // Added debug log
  }

  /**
   * The main function to validate all form fields according to the experiment requirements.
   */
  function validateForm() {
    console.log("--- Validation Started ---"); // Added debug log
    let isValid = true; // Flag to track overall validation status
    let errors = {}; // Object to hold error flags

    // --- 1. Get all field values ---
    const firstName = document.getElementById("first_name").value.trim();
    const middleName = document.getElementById("middle_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const address1 = document.getElementById("address1_line").value.trim();
    const address2 = document.getElementById("address2_line").value.trim();
    const address3 = document.getElementById("address3_line").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const city = document.getElementById("city").value.trim();
    const stateSelect = document.getElementById("state_select").value;
    const mobileNumber = document.getElementById("mobile_number").value.trim();
    const emailId = document.getElementById("email_id").value.trim();

    // Get selected gender (radio buttons)
    const genderElement = document.querySelector(
      'input[name="gender"]:checked',
    );
    const gender = genderElement ? genderElement.value : "";

    // --- 2. Validation Logic ---

    // Regex for names: Only letters and spaces (Part a: Correct names)
    const nameRegex = /^[A-Za-z\s]+$/;

    // NEW Mobile Regex: 10 digits, starting with 6, 7, 8, or 9
    const mobileRegex = /^[6789]\d{9}$/;

    // NEW Email Regex: Standard format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // a) Name Validation
    if (firstName === "") {
      errors.firstName = "First name is required.";
    } else if (!nameRegex.test(firstName)) {
      errors.firstName = "Name must contain only letters and spaces.";
    }

    if (lastName === "") {
      errors.lastName = "Last name is required.";
    } else if (!nameRegex.test(lastName)) {
      errors.lastName = "Name must contain only letters and spaces.";
    }

    // Middle name is optional, but check format if entered
    if (middleName !== "" && !nameRegex.test(middleName)) {
      errors.middleName = "Middle name must contain only letters and spaces.";
    }

    // b) Mobile Number Validation (Required, 10 digits, starting with 6/7/8/9)
    if (mobileNumber === "") {
      errors.mobile = "Mobile number is required.";
    } else if (!mobileRegex.test(mobileNumber)) {
      errors.mobile =
        "Mobile must be 10 digits and start with 6, 7, 8, or 9 (+91 fixed).";
    }

    // c) Email ID Validation (Required and standard format)
    if (emailId === "") {
      errors.email = "Email ID is required.";
    } else if (!emailRegex.test(emailId)) {
      errors.email =
        "Please enter a valid email address (e.g., user@domain.com).";
    }

    // d) Address, City, State, Pincode, Gender required checks
    if (address1 === "") {
      errors.address1 = "Address Line 1 is required.";
    }
    if (city === "") {
      errors.city = "City is required.";
    }
    if (stateSelect === "") {
      errors.state = "State selection is required.";
    }
    if (gender === "") {
      errors.gender = "Gender selection is required.";
    }

    // Basic Pincode validation (assuming 6 digits for Indian pincodes)
    const pincodeRegex = /^\d{6}$/;
    if (pincode === "") {
      errors.pincode = "Pincode is required.";
    } else if (!pincodeRegex.test(pincode)) {
      errors.pincode = "Pincode must be 6 digits.";
    }

    // --- 3. Apply Errors to DOM and Update isValid Flag ---

    // Check if any errors were found to update overall isValid flag
    if (Object.keys(errors).some((key) => errors[key])) {
      isValid = false;
    }

    // Display errors/clear errors for all input fields (and re-display values)
    displayError("first_name", "firstNameError", errors.firstName, firstName);
    displayError("last_name", "lastNameError", errors.lastName, lastName);
    displayError(
      "middle_name",
      "middleNameError",
      errors.middleName,
      middleName,
    );
    displayError("address1_line", "address1Error", errors.address1, address1);
    displayError("pincode", "pincodeError", errors.pincode, pincode);
    displayError("city", "cityError", errors.city, city);
    displayError("mobile_number", "mobileError", errors.mobile, mobileNumber);
    displayError("email_id", "emailError", errors.email, emailId);

    // State and Gender (Non-input fields)
    document.getElementById("stateError").textContent = errors.state || "";
    document.getElementById("genderError").textContent = errors.gender || "";

    // --- 4. Handle Submission Result ---
    if (isValid) {
      const submittedData = {
        fullName: `${firstName} ${middleName} ${lastName}`
          .replace(/\s+/g, " ")
          .trim(),
        emailId: emailId,
        mobileNumber: mobileNumber,
        gender: gender,
        address1: address1,
        address2: address2,
        address3: address3,
        pincode: pincode,
        city: city,
        stateSelect:
          document.getElementById("state_select").options[
            document.getElementById("state_select").selectedIndex
          ].text,
      };

      generateSuccessPage(submittedData);

      console.log(
        "Form data submitted successfully. Validation Passed:",
        submittedData,
      );
    } else {
      console.error(
        "Validation failed. Please correct the errors before submitting.",
      );
    }
  }
});
