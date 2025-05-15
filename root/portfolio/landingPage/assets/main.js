
let ctaButton = document.getElementById("ctaButton")

let popup = function(){
    Swal.fire({
        title: "Good job!",
        text: "If this were a real website, you'd be on your way to the booking page now.",
        icon: "success"
      });
}

ctaButton.addEventListener("click", popup)
