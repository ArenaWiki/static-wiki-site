function showImage(n) {
  // Get all images and buttons
  var images = document.getElementsByClassName("gallery-images")[0].getElementsByTagName("img");
  var buttons = document.getElementsByClassName("gallery-buttons")[0].getElementsByTagName("button");
  
  // Hide all images
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  
  // Remove "active" class from all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  
  // Show the selected image and add "active" class to the button
  images[n-1].style.display = "block";
  buttons[n-1].classList.add("active");
}
