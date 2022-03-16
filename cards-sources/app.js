const slides = document.querySelectorAll('.slide')

for(const slide of slides) {
    slide.addEventListener('click', () => {
        claerActiveClasses()
        slide.classList.add('active')
    })
}

function claerActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}