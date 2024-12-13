document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Hash the entered password using SHA-256
    const hashedPassword = CryptoJS.SHA256(password).toString(
      CryptoJS.enc.Base64
    );

    // Retrieve the stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === hashedPassword
    ) {
      // Set session start time and expiration time (60 minutes)
      const sessionData = {
        username: username,
        sessionStart: Date.now(),
        sessionExpiry: 60 * 60 * 1000, // 60 minutes
      };

      sessionStorage.setItem("session", JSON.stringify(sessionData));

      alert("Login successful!");
      // Redirect to home page after successful login
      window.location.href = "../home/home.html";
    } else {
      const errorMessage = document.getElementById("errorMessage");
      errorMessage.style.display = "block";
    }
  });
