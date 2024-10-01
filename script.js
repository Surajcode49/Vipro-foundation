// Initialize EmailJS with your public key
(function () {
    emailjs.init("pLsiyttn3ZjuOIsn7"); // Your EmailJS public key
})();

document.getElementById("vipraFormHindi").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collect form data
    const candidateName = document.getElementById("candidateName").value;
    const monthlyIncome = document.getElementById("monthlyIncome").value;
    const manglik = document.getElementById("manglik").value;
    const birthPlace = document.getElementById("birthPlace").value;
    const birthDate = document.getElementById("birthDate").value;
    const height = document.getElementById("height").value;
    const skinColor = document.getElementById("skinColor").value;
    const education = document.getElementById("education").value;
    const fatherName = document.getElementById("fatherName").value;
    const familyProfession = document.getElementById("familyProfession").value;
    const address = document.getElementById("address").value;
    const mobile = document.getElementById("mobile").value;
    const gotraSelf = document.getElementById("gotraSelf").value;
    const gotraMother = document.getElementById("gotraMother").value;
    const gotraGrandmother = document.getElementById("gotraGrandmother").value;
    const gotraNani = document.getElementById("gotraNani").value;

    // Prepare email data
    const templateParams = {
        candidateName,
        monthlyIncome,
        manglik,
        birthPlace,
        birthDate,
        height,
        skinColor,
        education,
        fatherName,
        familyProfession,
        address,
        mobile,
        gotraSelf,
        gotraMother,
        gotraGrandmother,
        gotraNani,
        to_name: 'Vipra Foundation', 
        message: 'Now Now Inc' 
    };

    console.log("Sending email with the following parameters:", templateParams); // Debug log

    // Send email
    emailjs.send("service_9dhfjcr", "template_0ttni4c", templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            alert("फॉर्म सफलतापूर्वक सबमिट किया गया!"); // Message in Hindi
        }, function(error) {
            console.error('Failed to send email. Error:', error);
            alert("फॉर्म सबमिट करने में समस्या आई। कृपया पुनः प्रयास करें।" + "\n" + error.text); // Log error
        });

    // Reset form fields
    this.reset();
});
