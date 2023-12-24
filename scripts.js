// scripts.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function sendMessage() {
    // Logic to send the message (You can add your own logic here for message submission)

    // For demonstration, display a success message below the submit button
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";
    successMessage.textContent = "Message sent successfully";

    return false; // Prevent form submission
}

function toggleDetails(sectionId) {
    // Hide all sections except the one toggled
    var sections = document.querySelectorAll('.details');
    sections.forEach(function(section) {
        if (section.id !== sectionId) {
            section.style.display = 'none';
        }
    });

    // Toggle the section passed
    var section = document.getElementById(sectionId);
    if (section.style.display === 'block') {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
    }

    // Hide the 'bio' section specifically when another subsection is clicked
    if (sectionId !== 'bio') {
        var bioSection = document.getElementById('bio');
        bioSection.style.display = 'none';
    }
}


  