document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 2000);

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card .card');

    projectCards.forEach(card => {
        card.addEventListener('mouseover', function () {
            card.classList.add('shadow-lg');
        });

        card.addEventListener('mouseout', function () {
            card.classList.remove('shadow-lg');
        });
    });
});
