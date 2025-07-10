
var element = Array.from(document.querySelectorAll(".nda-btn")); //grab the element

const overlay = document.getElementsByClassName("form-overlay")[0]
const form = document.getElementsByClassName("nda-form")[0]

// console.log(form);

element.forEach(ele => {
  console.log('enter');
  ele.addEventListener('click', function() {
    console.log('enter');
    overlay.classList.add('nda-show');
    overlay.classList.remove('nda-remove');

  })
})

document.addEventListener('mouseup', function(e) {
  if (!form.contains(e.target)) {
    overlay.classList.add('nda-remove');
    overlay.classList.remove('nda-show');
    
  }
});


// Select the circle element
const circleElement = document.querySelector(".circle");
const textElement = document.querySelector(".click");

// Create objects to track mouse position and custom cursor position
const mouse = { x: 0, y: 0 }; // Track current mouse position
const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
const circle = { x: 0, y: 0 }; // Track the circle position

// Initialize variables to track scaling and rotation
let currentScale = 0; // Track current scale value
let currentAngle = 0; // Track current angle value

// Update mouse position on the 'mousemove' event
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

// Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
const speed = 0.17;

// Start animation
const tick = () => {
  // MOVE
  // Calculate circle movement based on mouse position and smoothing
  circle.x += (mouse.x - circle.x) * speed;
  circle.y += (mouse.y - circle.y) * speed;
  // Create a transformation string for cursor translation
  const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

  // SQUEEZE
  // 1. Calculate the change in mouse position (deltaMouse)
  const deltaMouseX = mouse.x - previousMouse.x;
  const deltaMouseY = mouse.y - previousMouse.y;
  // Update previous mouse position for the next frame
  previousMouse.x = mouse.x;
  previousMouse.y = mouse.y;
  // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
  const mouseVelocity = Math.min(
    Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
    150
  );
  // 3. Convert mouse velocity to a value in the range [0, 0.5]
  const scaleValue = (mouseVelocity / 150) * 0.5;
  // 4. Smoothly update the current scale
  currentScale += (scaleValue - currentScale) * speed;
  // 5. Create a transformation string for scaling
  const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

  // ROTATE
  // 1. Calculate the angle using the atan2 function
  const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
  // 2. Check for a threshold to reduce shakiness at low mouse velocity
  if (mouseVelocity > 20) {
    currentAngle = angle;
  }
  // 3. Create a transformation string for rotation
  const rotateTransform = `rotate(${currentAngle}deg)`;
  const rotateTransform2 = `rotate(${0}deg)`;

  // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
  circleElement.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
  textElement.style.transform = `${translateTransform} ${rotateTransform2} ${scaleTransform}`;


  // Request the next frame to continue the animation
  window.requestAnimationFrame(tick);
};

// Start the animation loop
tick();

// this function create for page scroll and when screen scroll down on page referesh in both case code properly work that's why make this function
function scrollTop() {
  // 500 -> This is the value in px of the distance to be scrolled for the 'scroll-to-top' button to show-up
  if ($(window).scrollTop() > 50) {
    $(".backToTopBtn").addClass("active");
  } else {
    $(".backToTopBtn").removeClass("active");
  }
}
$(function () {
  // show and hide btn
  scrollTop();
  $(window).on("scroll", scrollTop);

  // body scroll on btn click
  $(".backToTopBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1);
    return false;
  });
});


  var text = Array.from(document.querySelectorAll('.has-hover'));

  text.forEach(text => {
  text.addEventListener('mousemove', function() {
  // console.log('enter');
  circleElement.classList.add('hover-cursor');
  textElement.classList.add('show-click');

  })
  //To remove the class when it doesn't hover the text
  text.addEventListener('mouseleave', function () {
  // console.log('leave');
  circleElement.classList.remove('hover-cursor');
  textElement.classList.remove('show-click');
  })
  })
  var text2 = Array.from(document.querySelectorAll('.canvas'));
  var boddy = Array.from(document.querySelectorAll('body'));

  text2.forEach(text => {
  text.addEventListener('mousemove', function() {
  // console.log('enter');
  circleElement.classList.add('hover-cursor-transparent');
  circleElement.classList.remove('hover-cursor');

  })
  //To remove the class when it doesn't hover the text
  text.addEventListener('mouseleave', function () {
  console.log('leave');
  circleElement.classList.remove('hover-cursor-transparent');
  circleElement.classList.add('hover-cursor');

  textElement.classList.remove('show-click');
  })


  let layout = new rive.Layout({
    fit: rive.Fit.Fit,
  });
  let layout2 = new rive.Layout({
    fit: rive.Fit.FitHeight,
  });
  

  // const r = new rive.Rive({
  //   src: "/public/portfolio.riv",
  //   // OR the path to a discoverable and public Rive asset
  //   // src: '/public/example.riv',
  //   canvas: document.getElementById("canvas"),
  //   autoplay: true,
  //   layout: layout,
  //   stateMachines: "State Machine 1",
  //   onLoad: () => {
  //     r.resizeDrawingSurfaceToCanvas();
  //   },
  //   });
  //   window.addEventListener("resize", () => {
  //     r.resizeDrawingSurfaceToCanvas();
  //   });
  const projects = [
    {
      name: "Suraasa ITO - Promo",
      videoSrc: "/Public/thumbnails/suraasa ITO thumbnail.mp4",
      link: "/ito.html"
    },
    {
      name: "Fleek - Build Lightning Fast",
      videoSrc: "/Public/thumbnails/fleek thumbnail.mp4",
      link: "/fleek.html"
    },
    {
      name: "Ghost Projector - Promo",
      videoSrc: "/Public/thumbnails/Ghost Projector Thumbnail.mp4",
      link: "/ghost-projector.html"
    },
    {
      name: "Greynade - Promo",
      videoSrc: "/Public/thumbnails/greynade-thumbnail.mp4",
      link: "/greynade.html"
    },
    {
      name: "Project 5",
      videoSrc: "project5.mp4",
      link: "/project5.html"
    }
  ];
  let currentIndex = 0;
  const videoElement = document.getElementById("project-video");
  const nameElement = document.getElementById("project-name");
  const linkElement = document.getElementById("video-link");

  function updateProject() {
    const project = projects[currentIndex];
    videoElement.src = project.videoSrc;
    nameElement.textContent = project.name;
    linkElement.href = project.link;

    currentIndex = (currentIndex + 1) % projects.length;
  }

  updateProject(); // initial call
  setInterval(updateProject, 5000);



      const g = new rive.Rive({
        src: "Public/hero/portfolio_bentos2.riv",
        // OR the path to a discoverable and public Rive asset
        // src: '/public/example.riv',
        canvas: document.getElementById("canvas1"),
        autoplay: true,
        // layout: layout,
        artboard: "Left", // Optional. If not supplied the default is selected
        stateMachines: "State Machine 1",
        onLoad: () => {
        //  g.resizeDrawingSurfaceToCanvas();
        },
        });
        window.addEventListener("resize", () => {
          // g.resizeDrawingSurfaceToCanvas();
        });

        const g2 = new rive.Rive({
          src: "Public/hero/portfolio_bentos2.riv",
          // OR the path to a discoverable and public Rive asset
          // src: '/public/example.riv',
          canvas: document.getElementById("canvas2"),
          autoplay: true,
          // layout: layout2,
          artboard: "Right", // Optional. If not supplied the default is selected
          stateMachines: "State Machine 1",
          onLoad: () => {
          //  g2.resizeDrawingSurfaceToCanvas();
          },
          });
          window.addEventListener("resize", () => {
            // g2.resizeDrawingSurfaceToCanvas();
          });
})