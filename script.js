// Ensure the DOM is loaded before attaching any event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle project details
    function toggleDetails(button) {
        var details = button.nextElementSibling; // Get the "details" element
        if (details.style.display === "block") {
            details.style.display = "none"; // Hide details
        } else {
            details.style.display = "block"; // Show details
        }
    }

    // Make the toggleDetails function available globally
    window.toggleDetails = toggleDetails;
});
