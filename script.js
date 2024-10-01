document.getElementById("vipraForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the form elements
    const paymentConfirmed = document.getElementById("paymentConfirmed").checked;
    const candidateName = document.getElementById("candidateName").value.trim();
    const monthlyIncome = document.getElementById("monthlyIncome").value.trim();
    const birthPlace = document.getElementById("birthPlace").value.trim();

    // Clear previous error highlights
    clearErrorHighlighting();

    // Check if payment is confirmed
    if (!paymentConfirmed) {
        alert("Please confirm the payment before submitting the form.");
        return;
    }

    // Validate the form fields
    if (!candidateName) {
        showError("candidateName", "Please enter the candidate's name.");
        return;
    }

    if (!monthlyIncome || isNaN(monthlyIncome)) {
        showError("monthlyIncome", "Please enter a valid monthly income.");
        return;
    }

    if (!birthPlace) {
        showError("birthPlace", "Please enter the birth place.");
        return;
    }

    // Form submission success
    alert("Form submitted successfully!");

    // Optionally, send the form data to a server using Fetch or AJAX

    // Reset the form after successful submission
    document.getElementById("vipraForm").reset();
});

// Function to highlight fields with errors
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.style.borderColor = "red";
    alert(message);
}

// Function to clear error highlighting
function clearErrorHighlighting() {
    const fields = ["candidateName", "monthlyIncome", "birthPlace"];
    fields.forEach(fieldId => {
        document.getElementById(fieldId).style.borderColor = "";
    });
}
