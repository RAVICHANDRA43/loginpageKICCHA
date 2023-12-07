
// Sample user credentials stored in JSON format
const userCredentials = {
    "RAVI": "RAVICHANDRA",
    "CPC":"POLYTECHNIC",
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the username exists and the password matches
    if (userCredentials.hasOwnProperty(username) && userCredentials[username] === password) {
        // Redirect to the second page upon successful login
        window.location.href = 'm2.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
