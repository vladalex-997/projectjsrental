window.addEventListener("load", function () {
  // Check if a session exists
  const session = JSON.parse(sessionStorage.getItem("session"));

  if (session) {
    const currentTime = Date.now();
    const sessionDuration = currentTime - session.sessionStart;

    // If the session has expired
    if (sessionDuration > session.sessionExpiry) {
      // Session expired, log out user
      alert("Your session has expired. Please log in again.");
      sessionStorage.removeItem("session");
      window.location.href = "login.html";
    }
  } else {
    // No active session, redirect to login page
    window.location.href = "login.html";
  }
});

// Logout button logic
document.getElementById("logoutButton").addEventListener("click", function () {
  sessionStorage.removeItem("session"); // Remove session
  alert("You have been logged out.");
  window.location.href = "login.html"; // Redirect to login page
});
