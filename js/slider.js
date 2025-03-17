class slider {
    constructor(idMainElement) {
        this.slider = document.getElementById(idMainElement);
        this.images = this.slider.querySelector('.slider__images__container');
        this.prevButton = this.slider.querySelector('.slider__butons__prev');
        this.nextButton = this.slider.querySelector('.slider__butons__next');
        this.dotsContainer = this.slider.querySelector('.slider__dots');
        this.slides = this.images.querySelectorAll('img');
        this.currentIndex = 0;
        this.autoPlayInterval = null;

        this.init();
    }



    init() {
        // Crea los dots
        this.slides.forEach((slide, index) => {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });

        // Actualizar dots activos
        this.updateDots();

        // Event listeners para los botones
        this.prevButton.addEventListener('click', () => this.prevSlide());
        this.nextButton.addEventListener('click', () => this.nextSlide());

        // Detener autoplay cuando el ratón está sobre el slider
        this.images.addEventListener('mouseenter', () => this.stopAutoPlay());

        // Reanudar autoplay cuando el ratón sale del slider
        this.images.addEventListener('mouseleave', () => this.startAutoPlay());

        // Iniciar autoplay
        this.startAutoPlay();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.images.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.updateDots();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.images.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.updateDots();
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.images.style.transform = `translateX(-${this.currentIndex * 100}%)`;
        this.updateDots();
        this.stopAutoPlay();
        this.startAutoPlay();
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => this.nextSlide(), 3000);
    }

    stopAutoPlay() {
        clearInterval(this.autoPlayInterval);
    }

    updateDots() {
        const dots = this.dotsContainer.querySelectorAll('span');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }
}

// Inicializar el slider
const mySlider = new slider('slider');