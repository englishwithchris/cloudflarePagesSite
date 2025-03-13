

// DOM variables
let formSubmitBtn = document.getElementById("formSubmitBtn")

//Pop up handler
let alertFire = () => {
  Swal.fire({
    title: "Message submitted!",
    text: "If this was a real website, we would have received your message",
    icon: "success",
   
  });
  //prevents SWAL from recentering the page when it fires
  event.preventDefault();
  
}

//Text pop-in animation handler
document.addEventListener("DOMContentLoaded", () => {
  let textEnterLeft = document.querySelectorAll(".textEnterLeft");
  let textEnterRight = document.querySelectorAll(".textEnterRight");

  let options = {
    root: null, // Observes the viewport
    rootMargin: "0px",
    threshold: 0.2, // Triggers when 20% of the element is visible
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
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

  textEnterLeft.forEach((element) => observer.observe(element));
  textEnterRight.forEach((element) => observer.observe(element));
});


//event listeners
formSubmitBtn.addEventListener("click",alertFire )
