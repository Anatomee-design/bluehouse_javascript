var database = [
  { username: "david", password: "1234" },
  { username: "sarah", password: "abcd" },
  { username: "john", password: "pass123" }
];


function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      username === database[i].username &&
      password === database[i].password
    ) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log("✅ Login successful. Welcome, " + username + "!");
  } else {
    console.log("❌ Invalid username or password.");
  }
}

var userNamePrompt = prompt("Enter your username:");
var passwordPrompt = prompt("Enter your password:");

signIn(userNamePrompt, passwordPrompt);
