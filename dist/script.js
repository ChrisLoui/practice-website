const hamb = document.querySelector(".mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const x = document.querySelector(".x-top");
const y = document.querySelector(".y-bottom");



// Menu Button
hamb.addEventListener("click", () => {
    x.classList.toggle('translate-y-1');
    x.classList.toggle('rotate-45');
    y.classList.toggle('w-4');
    y.classList.toggle('-translate-y-1');
    y.classList.toggle('-rotate-45');
    menu.classList.toggle('hidden');

    menu.classList.toggle('translate-y-0');

    setTimeout(() => {
        menu.classList.toggle('active');
    }, 50);

});

// Change of images

const face = document.getElementById('myImage');
const images = ["/images/face.png", "/images/theface.png", "/images/face3.png", "/images/face4.png", "/images/face5.png"];
let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0; // Retrieve the index from localStorage or default to 0

face.src = images[currentIndex];

face.addEventListener('click', () => {
    face.style.opacity = 0;

    // Wait for the fade-out transition to finish
    setTimeout(() => {
        // Increment the index and reset it if it reaches the end of the array
        currentIndex = (currentIndex + 1) % images.length;
        // Save the current index to localStorage
        localStorage.setItem('currentIndex', currentIndex);
        // Change the src attribute to the next image in the array
        face.src = images[currentIndex];
        // Fade in the new image
        face.style.opacity = 1;
    }, 500);
});



// Sun and Moon toggle

const svgContainer = document.getElementById('svgContainer');
const backgroundImage = document.getElementById('backgroundImage');

// Check if dark mode was enabled before and update isDarkMode accordingly
let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// Apply the initial mode based on isDarkMode
applyMode();

svgContainer.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode); // Save the current mode to localStorage
    applyMode();
});

function applyMode() {
    setTimeout(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            svgContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-4 z-30">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
            `;
            backgroundImage.src = "/images/light.png"; // Change to the light mode image
        } else {
            document.body.classList.remove('dark-mode');
            svgContainer.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-4 z-30">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            `;
            backgroundImage.src = "/images/thisisit.png"; // Change to the dark mode image
        }
    }, 200);
}




