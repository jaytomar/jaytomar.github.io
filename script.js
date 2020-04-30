
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("menu");
console.log(header);

// Get the offset position of the navbar
var sticky = 408;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position


function myFunction() {
  var x = window.matchMedia("(max-width: 700px)")

  if (x.matches) {
    if (window.pageYOffset > 381) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }
  else{
    console.log(window.pageYOffset , sticky);

    if (window.pageYOffset > sticky) {
      console.log('start');
      
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }
  console.log(x);

}

