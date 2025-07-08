var database = [
    {
        username : "Salisu",
        password : "adamu"
    }
];
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
function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsfeed);
  } else {
    alert("Wrong username or password.");
  }
}
signIn(userNameprompt,passwordPrompt);