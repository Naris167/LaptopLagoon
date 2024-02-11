document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('backButton');
    const nextButton = document.getElementById('nextButton');
    const contentSections = document.querySelectorAll('.content');

    let slideInterval = setInterval(simulateNextButtonClick, 5000); // 5000 milliseconds (5 seconds)

    let currentIndex = 0;

    // Show the initial content
    contentSections[currentIndex].classList.add('active');

    backButton.addEventListener('click', function(e) {
        e.preventDefault();
        changeSlide(-1); // Move to the previous slide
        resetSlideInterval(); // Reset the interval
    });

    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        changeSlide(1); // Move to the next slide
        resetSlideInterval(); // Reset the interval
    });

    function changeSlide(direction) {
        contentSections[currentIndex].style.transform = `translateX(${direction * -100}vw)`;
        setTimeout(() => {
            contentSections[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + direction + contentSections.length) % contentSections.length;
            contentSections[currentIndex].classList.add('active');
            contentSections[currentIndex].style.transform = `translateX(${direction * 100}vw)`;
            setTimeout(() => {
                contentSections[currentIndex].style.transform = 'translateX(0)';
            }, 10);
        }, 100);
    }

    function resetSlideInterval() {
        clearInterval(slideInterval); // Clear the existing interval
        slideInterval = setInterval(simulateNextButtonClick, 5000); // Set a new interval
    }

    function simulateNextButtonClick() {
        const event = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        nextButton.dispatchEvent(event);
    }
});
