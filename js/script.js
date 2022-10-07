/*Don´t erase this! It's for media query stuff I'm still developping - João
let x = window.matchMedia("screen and (min-width: 1200px)");
x.addEventListener('change', function () {
    console.log(x);
    applyClassOnMedia();/index.html
})
let mainImg = document.getElementById("main-img");
function applyClassOnMedia() {
    if (x.matches) {
        mainImg.classList.add("second-art");

    }
    else {
        mainImg.classList.remove("second-art");
    }
}
mainImg.addEventListener('click', function () {
    mainImg.style.width = "auto|lenght|%|initial|inherit";
})
applyClassOnMedia();
*/
// const monkey = document.addEventListener("#iryna");
// monkey.addEventListener('click', function () {
//     alert("MONKEY GO");
// });

/*LOAD DEFAULT PAGE TO PREVENT CLICKED ARTICLES TO LOCK THE VIEW EVERY TIME WE REFRESH THE PAGE - JOAO
window.addEventListener('DOMContentLoaded', function() { 
    history.go(-1); 
 });
*/

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// WELCOME OVERLAY - Isamu

// MENU OVERLAY STSRT
/* Open when someone clicks on the menu button */
function openNav() {
    document.getElementById("menuNav").style.height = "20rem";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("menuNav").style.height = "0";
}

const close = document.querySelector("body");
const mNav = document.querySelector("#menuNav");

close.onscroll = ()=>{
    mNav.style.height = "0";
}
// MENU OVERLAY END - Isamu 
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

/*Button Send Message*/

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
        closeModal(modal);
    });
});

closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        closeModal(modal);
    });
});

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
}



/*Activating Pop Message*/


const contact1 = document.querySelector(".contact");
contact1.onsubmit = function (event) {
    event.preventDefault()
};


const in1 = document.querySelector(".input1");
const in2 = document.querySelector(".input2");
const buttonwork = document.querySelector(".buttonc")


contact1.addEventListener("input", () => {
    if (in1.value != "" && in2.value != "") {
        buttonwork.removeAttribute("disabled");
    } else {
        buttonwork.setAttribute("disabled", "");
    }
});

/*End of activation*/


const close = document.querySelector("body");
const mNav = document.querySelector("#menuNav");

close.onscroll = (event) => {
    mNav.style.height = "0";
}