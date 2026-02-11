// Welcome text
let userName = prompt("Please enter your name:");
if (userName) {
  document.getElementById("welcome-text").innerText =
    "Hi " + userName + ", Welcome to Website";
}

// Form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  if (!name || !email || !phone || !message) {
    alert("Please fill in all fields!");
    return;
  }

  alert("Thank you, " + name + "! Your message has been sent.");
  this.reset();
});
