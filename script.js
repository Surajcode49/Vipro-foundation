document.getElementById("vipraForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const paymentConfirmed = document.getElementById("paymentConfirmed").checked;

    if (!paymentConfirmed) {
        alert("Please confirm the payment before submitting the form.");
        return;
    }

    // Form validation logic
    const candidateName = document.getElementById("candidateName").value;
    const monthlyIncome = document.getElementById("monthlyIncome").value;
    const birthPlace = document.getElementById("birthPlace").value;

    if (!candidateName || !monthlyIncome || !birthPlace) {
        alert("Please fill in all the required fields.");
        return;
    }

    alert("Form submitted successfully!");

    // Further form handling like sending the data to a server
});
