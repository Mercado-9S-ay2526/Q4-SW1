
function login() {

    u = document.getElementById("Username").value.trim();
    p = document.getElementById("Password").value.trim();

    
    const correctUsername = "Sancho II";
    const correctPassword = "egglover54321";

    if (u === correctUsername && p === correctPassword) {
        alert("✅ Login Successful! Welcome, Sancho II!");

    } else {
        alert("❌ Incorrect username or password. Please try again.");
    }
}
