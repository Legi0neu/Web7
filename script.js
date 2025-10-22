// Email validation regex
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// Get DOM elements
const subscriptionForm = document.getElementById('subscriptionForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');
const subscriptionCard = document.getElementById('subscriptionCard');
const successDialog = document.getElementById('successDialog');
const userEmailSpan = document.getElementById('userEmail');
const closeDialogBtn = document.getElementById('closeDialog');

// Form submit handler
subscriptionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = emailInput.value.trim();
    
    // Validate email
    if (validateEmail(email)) {
        // Hide error state
        hideError();
        
        // Show success dialog
        showSuccessDialog(email);
    } else {
        // Show error state
        showError();
    }
});

// Email input handler - hide error on typing
emailInput.addEventListener('input', function() {
    if (emailInput.classList.contains('error')) {
        hideError();
    }
});

// Close dialog handler
closeDialogBtn.addEventListener('click', function() {
    successDialog.close();
    resetForm();
});

// Validate email function
function validateEmail(email) {
    return emailRegex.test(email);
}

// Show error state
function showError() {
    emailInput.classList.add('error');
    errorMessage.classList.add('show');
}

// Hide error state
function hideError() {
    emailInput.classList.remove('error');
    errorMessage.classList.remove('show');
}

// Show success dialog
function showSuccessDialog(email) {
    // Hide subscription card
    subscriptionCard.style.display = 'none';
    
    // Update dialog with user email
    userEmailSpan.textContent = `<${email}>`;
    
    // Show dialog
    successDialog.showModal();
}

// Reset form
function resetForm() {
    emailInput.value = '';
    subscriptionCard.style.display = 'block';
    hideError();
}

// Handle dialog close with ESC key
successDialog.addEventListener('close', function() {
    resetForm();
});