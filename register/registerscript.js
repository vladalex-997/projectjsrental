class User {
  constructor(firstName, lastName, username, email, password, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.password = password; // Hashed password
    this.birthdate = birthdate;
  }
}

class UserManager {
  static saveUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  static getUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
}

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;

    if (firstName && lastName && username && email && password && birthdate) {
      // Hash the password using SHA-256 before saving it
      const hashedPassword = CryptoJS.SHA256(password).toString(
        CryptoJS.enc.Base64
      );

      const newUser = new User(
        firstName,
        lastName,
        username,
        email,
        hashedPassword,
        birthdate
      );
      UserManager.saveUser(newUser);

      // Show success message with animation
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";
      successMessage.innerHTML =
        "Registration successful! You will be redirected to the login page...";

      setTimeout(() => {
        // Redirect to login page after a delay
        window.location.href = "../login/login.html";
      }, 3000); // Redirects after 3 seconds

      // Optionally clear form inputs
      document.getElementById("registerForm").reset();
    }
  });
