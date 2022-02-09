import $ from '../core';

// слайди стоять в ряд за допомогою флексу в обгортці slidesField
// при кліку на кнопки обгоортка slidesField рухається і видимим стає інший слайд. Рухається обгортка рівно на width кожного слайду, яку ми задаємо самі. Ширина кожного слайда дорівнює ширині вікна. Ширина вікна встановлюється у верстці для головного діва carousel, у нас це 900px
// 3. Робота з dots
// 4. Коли клікаємо на dot має показуватися відповідний слайд (у верстці в кожної кнопки записано до якого слайду вона має вести)

$.prototype.slider = function(autoplay) {
    for (let i = 0; i < this.length; i++) {

        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width; // вікно - видима частина слайдера, в яку поміщається слайд, який ми бачимо
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides')
        const dots = this[i].querySelectorAll('.carousel-indicators li'); // 3.

        slidesField.style.width = 100 * slides.length + '%'; // задаємо ширину для обгортки слайдів, обговортка для слайдів має бути довга, щоб слайди в ній стали в ряд і по ньому рухалися 

        slides.forEach(slide => { // задаємо однакову ширину для кожного слайда
            slide.style.width = width; // дорівнює розміру вікна
        })

        let offset = 0; // показує на скільки ми вже посунули slidesField
        let slideIndex = 0; // 3. Показує активну точку 

        if (autoplay) {
            setInterval(() => {
                if (offset == (+width.replace(/\D/g, '') * (slides.length-1)) ) { // якщо дійшли до кінця
                    offset = 0;
                } else {
                    offset += +width.replace(/\D/g, '');
                }
                slidesField.style.transform = `translateX(-${offset}px)`;

                if (slideIndex == slides.length-1) { // 3.
                    slideIndex = 0;
                } else {
                    slideIndex++;
                }
                dots.forEach(dot => dot.classList.remove('active'));
                dots[slideIndex].classList.add('active');

            }, 2000)
        }
       
        
        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length-1)) ) { // якщо дійшли до кінця
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }
            slidesField.style.transform = `translateX(-${offset}px)`; // при кліку на next slidesField має зміщуватися вліво. Правильно, бо за замовчуванням вони стоять справа до кінця, а зліва пусто.

            if (slideIndex == slides.length-1) { // 3.
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) { // якщо дійшли до початку
                offset = (+width.replace(/\D/g, '') * (slides.length-1));
            } else {
                offset -= +width.replace(/\D/g, '');
            }
            slidesField.style.transform = `translateX(-${offset}px)`; // при кліку на next slidesField має зміщуватися вліво. Правильно, бо за замовчуванням вони стоять справа до кінця, а зліва пусто.

            if (slideIndex == 0) { // 3.
                slideIndex = slides.length-1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
        
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                    
                const slideTo = i;
            
                slideIndex = slideTo;
                dots.forEach(dot => dot.classList.remove('active'));
                dots[slideIndex].classList.add('active');

                offset = +width.replace(/\D/g, '') * slideTo; 
                slidesField.style.transform = `translateX(-${offset}px)`;
            })
        })
    }
};

$.prototype.createSlider = function({imgs, autoplay, dots, container}) {
    let slider = document.createElement('div');
    slider.classList.add('carousel');
    slider.setAttribute('id', 'example');

    let slidesArr = [];
    for (let i = 0; i < imgs.length; i++) {
        let slideDiv = document.createElement('div');
        slideDiv.classList.add('carousel-item');
        slideDiv.innerHTML = `
        <img src=${imgs[i]} alt="photo"></img>
        `;
        slidesArr.push(slideDiv);
    }

    let dotsArr = [];
    if (dots) {
        for (let i = 0; i < imgs.length; i++) {
            let dotsLi = document.createElement('li');
            dotsArr.push(dotsLi);
        }
    }

    slider.innerHTML = 
    `
    <ol class="carousel-indicators">
           
    </ol>
    <div class="carousel-inner">
        <div class="carousel-slides">
                   
        </div>
    </div>
    <a href="#" class="carousel-prev" data-slide="prev">
        <span class="carousel-prev-icon">&lt;</span>
    </a>
    <a href="#" class="carousel-next" data-slide="next">
        <span class="carousel-next-icon">&gt;</span>
    </a>
    `;

    slider.querySelector('.carousel-indicators').append(...dotsArr);
    slider.querySelector('.carousel-slides').append(...slidesArr);
    document.querySelector(container).appendChild(slider);

    $('.carousel').slider(autoplay);
};

