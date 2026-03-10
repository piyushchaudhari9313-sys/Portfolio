const sidebar = document.querySelector('.sidebar');
const ham = document.querySelector('.ham');
const cross = document.querySelector('.cross');

// Page load: hamburger visible, cross hidden
ham.style.display = 'block';
cross.style.display = 'none';

// Hamburger click → show sidebar
ham.addEventListener('click', () => {
    sidebar.classList.remove('sidebarGo'); // sidebar dikhega
    ham.style.display = 'none'; // hamburger hide immediately

    // cross show with delay (300ms) for smooth effect
    setTimeout(() => {
        cross.style.display = 'block';
    }, 300); // delay should match CSS transition
});

// Cross click → hide sidebar
cross.addEventListener('click', () => {
    sidebar.classList.add('sidebarGo'); // sidebar hide

    cross.style.display = 'none'; // cross hide immediately

    // hamburger show with delay (300ms)
    setTimeout(() => {
        ham.style.display = 'block';
    }, 300); // same delay as sidebar transition
});






// // script.js
// let form = document.querySelector(".contactForm"); // class 
// let message = document.getElementById("successMsg"); //

// form.addEventListener("submit", function(e){
//     e.preventDefault(); // page reload stop
//     message.style.display = "block"; // success message show
//     form.reset(); // form reset
// });


const form = document.querySelector(".contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault(); 
    alert("Your message has been sent successfully!");
});
