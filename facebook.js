var database = [
    {
        username : "Salisu",
        password : "adamu"
    },
    {
      username : "Max",
      password : "11111"
    },
    {
      username:"Freeman",
      password : "a1b2c3"
    },
    {
      username : "Roman",
      password : "my123"
    }
]
var newsfeed = [
    {
        username : "tboy",
        timeline : "javascript is hard"
    },
    {
        username : "david",
        timeline : "keep trying"
    },
    {
        username : "Jona",
        timeline : "well done"
    },
];
var userNameprompt = prompt("what is your username");
var passwordPrompt = prompt( "what is your password");
function signIn(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      username === database[i].username &&
      password === database[i].password
    ) {
      console.log("Login successful. Welcome, " + username + "!");
      return;
    }
  }
  alert("Sorry, wrong username or password.");
}
signIn(userNameprompt,passwordPrompt);