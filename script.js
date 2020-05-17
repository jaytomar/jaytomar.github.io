
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = 408;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position


function myFunction() {
  var x = window.matchMedia("(max-width: 560px)")
  var z = window.matchMedia('(max-width: 800px)')
  var a = window.matchMedia('(max-width: 960px)')
  var y = window.matchMedia('(max-width: 1000px)')


  // console.log(window.pageYOffset , sticky);
  // console.log(y.matches);
  // console.log(x.matches);
  // console.log(z.matches);
  // console.log(a.matches);

  


   if (x.matches) {
    //  console.log('x working');
     
    if (window.pageYOffset > 381) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }

  else if (y.matches) {
    // console.log('y wokring');
    
    if (window.pageYOffset > 298) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }
  else{
    if (window.pageYOffset > sticky) {
      // console.log('default working');
      
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }

}

