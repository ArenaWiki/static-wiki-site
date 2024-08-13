var quotes = [
  "Trashing Fandom",
  "Better than the #?$%# Wiki.",
  "Hiring Wiki Staff",
  "Talking to the CEO",
  "Finding Miyamoto",
  "Sucessfully Robbed Mayla",
  "Sitting in jail after Robbing Mayla",
  "Watching Anime",
  "Coding this website",
  "Don't post a screenshot of this quote in. Do not.",
  "Eating a Burger",
  "Pizza!",
  "Playing 'that' board game",
  "Switching up my cards",
  '"Draw 25 or release a new update" *Draws 25*',
  "We are the best wiki. In my opinion.",
  "Re-adding bugs to the wiki",
  "Attempting to style with CSS",
];

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomNumber];

  // Add an event listener to remove the splash screen when clicked
  document.getElementById("splash").addEventListener("click", function () {
    this.remove();
  });
}

window.onload = getRandomQuote;
