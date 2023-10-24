// Get references to HTML elements
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="password"]');
const loginForm = document.querySelector('#login-form'); // Use the correct form ID

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting

    const enteredUsername = usernameInput.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    const enteredPassword = passwordInput.value.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    // Define the correct credentials for manager, HR, and employee
    const credentials = {
        manager: { username: 'manager', password: 'm123', page: 'mk.html' },
        hr: { username: 'hr', password: 'h123', page: 'hr.html' },
        employee: { username: 'employee', password: 'e123', page: 'ek.html' },
    };

    // Check if the entered credentials match any of the predefined credentials
    const role = Object.keys(credentials).find(role => credentials[role].username === enteredUsername && credentials[role].password === enteredPassword);

    if (role) {
        // Redirect the user to the corresponding page based on their role
        window.location.href = credentials[role].page;
    } else {
        // Display an error message for invalid credentials
        alert('Invalid credentials. Please try again.');
    }
}

// Add an event listener to the form's submit event
if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
}
