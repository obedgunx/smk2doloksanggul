// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Audio background control
const audio = document.getElementById('bg-audio');
const playButton = document.getElementById('play-audio');

audio.addEventListener('canplaythrough', () => {
    // Audio siap diputar
});

audio.addEventListener('error', () => {
    playButton.style.display = 'block';
});

playButton.addEventListener('click', () => {
    audio.play();
    playButton.style.display = 'none';
});

// Jika autoplay diblokir, tampilkan tombol play
if (audio.paused) {
    playButton.style.display = 'block';
}
