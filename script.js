const tagline = document.querySelector('.tagline');
const text = "A blend of coding, photography, and videography.";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        tagline.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;
