document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        // Simulate registration (client-side)
        const registrationSuccess = await simulateRegistration(email, password);

        if (registrationSuccess) {
            // Registration successful, redirect to the login page or perform other actions
            alert("Registration successful");
        } else {
            // Registration failed, display an error message
            alert("Registration failed. Please try again.");
        }
    });

    async function simulateRegistration(email, password) {
        // Simulate a successful registration
        return true;
    }
});
