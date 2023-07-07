// Start Header
let buttonBars = document.querySelector(".bars");
let navbar = document.querySelector(".navbar");

buttonBars.addEventListener("click", function (e) {
    // Stop Propagation On Navbar Links
    e.stopPropagation();
    // Add Class Show On The Btn Toggle
    this.classList.toggle("show");
    // Add Class showNavbar On The Navbar Links
    navbar.classList.toggle("showNavbar");
})
// Stop Propagation On Navbar Links
navbar.addEventListener("click", function (e) {
    e.stopPropagation();
})

document.addEventListener("click", function (e) {
    // Check The Btn Toggle on The Show Class
    if (buttonBars.classList.contains("show")) {
        if (e.target !== buttonBars && e.target !== navbar) {
            // Add Class Show On The Btn Toggle
            buttonBars.classList.toggle("show");
            // Add Class showNavbar On The Navbar Links
            navbar.classList.toggle("showNavbar");
        }
    }
})
// End Header

// // Start Slider Images
// Get Images Of Slider
let imgs = Array.from(document.querySelectorAll(".imgs img"));

// Get Slide Count
let imgsCount = imgs.length;

// Set Current Slide
let currentSlide = 1;

// Bullets Items
let Bullets = Array.from(document.querySelectorAll(".bullets li"));

// Button Next
let next = document.querySelector(".next");
// Button Previous
let prev = document.querySelector(".prev");

// Loop On Bullets Items
for (let i = 0; i < Bullets.length; i++) {
    Bullets[i].addEventListener("click", function () {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    })
}

// Function Remove All Active Classes
function removeActive() {
    // Remove Class Active From All imgs
    imgs.forEach(function (img) {
        img.classList.remove("active");
    })

    // Remove Class Active From All Bullets Item
    Bullets.forEach(function (bullet) {
        bullet.classList.remove("active");
    })
}


// Function Checker Of Slider Images
function theChecker() {

    // Function Remove All Active Classes
    removeActive();

    // Add Class Active On Slide Current
    imgs[currentSlide - 1].classList.add("active");

    // Add Class Active On Bullets Current
    Bullets[currentSlide - 1].classList.add("active");
}

theChecker();

// Function Next
next.addEventListener("click", nextSlide);
function nextSlide() {
    if (currentSlide == imgsCount) {
        currentSlide = 1;
        theChecker();
    } else {
        currentSlide++;
        theChecker();
    }
}
// Function Previous
prev.addEventListener("click", prevSlide);
function prevSlide() {
    if (currentSlide == 1) {
        currentSlide = imgsCount;
        theChecker();
    } else {
        currentSlide--;
        theChecker();
    }
}

// Create Function And Repeat Opeartion
setInterval(function () {
    if (currentSlide == imgsCount) {
        currentSlide = 1;
        theChecker();
    } else {
        currentSlide++;
        theChecker();
    }
}, 10000);



// // End Slider Images

// // Start Contact Section
let nameInput = document.querySelector("[name='Name']");
let emailInput = document.querySelector("[name='email']");
let msgInput = document.querySelector("[name='Message']");
let msg = document.querySelector(".msg");

document.forms[0].onsubmit = function (e) {
    nameValid = false;
    emailValid = false;
    msgValid = false;

    // Valid Message
    if (msgInput.value !== "" && msgInput.value.length >= 50) {
        msgValid = true;
    } else {
        msg.textContent = "Plz Enter Valid Message*";
        msg.style.display = "block";
    }

    // Valid Email
    if (emailInput.value !== "") {
        emailValid = true;
    } else {
        msg.textContent = "Plz Enter Valid Email*";
        msg.style.display = "block";
    }

    // Valid UserName
    if (nameInput.value !== "" && nameInput.value.length >= 10) {
        nameValid = true;
    } else {
        msg.textContent = "Plz Enter Valid Name*";
        msg.style.display = "block";
    }

    if (nameValid === false || emailValid === false || msgValid === false) {
        e.preventDefault();
    }
}
// // End Contact Section

// Start button Arrow Scrolling
let arrowScrooing = document.querySelector(".scrolling");

// When Window Scroll Effect Header
window.addEventListener("scroll", function () {
    if (window.scrollY >= innerHeight - 500) {
        arrowScrooing.style.opacity = 1;
    } else {
        arrowScrooing.style.opacity = 0;
    }
})

// Effect button Scrolling
arrowScrooing.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})
// Start button Arrow Scrolling

