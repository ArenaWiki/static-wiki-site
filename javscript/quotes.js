var quotes = [
  "Whoever is telling you quotes in Defense is lying.",
  "If Bocchi wrote this website, it would probably be better.",
  "If you are seeing this, its a cry for help. Room 5 Blo-",
  "ArenaDev (other than food) was one of the best Malaysian creations.",
  "Better than the TDS Wiki.",
  "JR East.. SOTETSU... KEIO... Odakyu... TOEI.. Am i missing something?",
  "Firing inactive wiki staff",
  "Finding Miyamoto",
  "Sucessfully Robbed Mayla",
  "Sitting in jail after Robbing Mayla",
  "Watching Anime",
  "Coding this website",
  "Post a screenshot of this quote in general. I bet you wont.",
  "Eating a Burger",
  "Shake Shack is the best burger joint",
  "Playing 'that' board game",
  "Switching up my cards",
  '"Draw 25 or release a new update" *Draws 25*',
  "We are the best wiki. In my opinion.",
  "Copying DOORS Wiki",
  "Re-adding bugs to the wiki",
  "Changing the CSS for the 4500000th time",
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
