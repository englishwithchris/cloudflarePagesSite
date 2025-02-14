//Text pop in animation handler
document.addEventListener("DOMContentLoaded", () => {
  let textEnterLeft = document.querySelectorAll(".textEnterLeft");
  let textEnterRight = document.querySelectorAll(".textEnterRight");

  let options = {
      root: null, // Observes the viewport
      rootMargin: "0px",
      threshold: 0.2 // Triggers when 20% of the element is visible
  };

  let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              if (entry.target.classList.contains("textEnterLeft")) {
                  entry.target.classList.add("animateEnterLeft");
              } else if (entry.target.classList.contains("textEnterRight")) {
                  entry.target.classList.add("animateEnterRight");
              }
              observer.unobserve(entry.target); // Stops observing once animation is triggered
          }
      });
  }, options);

  textEnterLeft.forEach(element => observer.observe(element));
  textEnterRight.forEach(element => observer.observe(element));
});


//Text background looping animation
document.addEventListener("DOMContentLoaded", () => {
  let textElement = document.querySelector(".text-with-image-1");

  if (!textElement) return; 

  let positionX = -150; //start the image well to the right
  let positionY = 50;   //Center horizontall
  let speed = 0.05; 

  function animateBackground() {
      positionX += speed; 
      if (positionX > 150) positionX = -150; // Resets position to loop animation

      textElement.style.backgroundPosition = `${positionX}% ${positionY}%`;

      requestAnimationFrame(animateBackground); // Loop smoothly
  }

  requestAnimationFrame(animateBackground); // Start animation
});
