import $ from '../core'; 

$.prototype.animateOverTime = function(dur, cb, fin) { // dur - як довго буде виконуватися анімація, cb і fin - необов'язкові параметри. cb - запуск після того як анімація запустилася, fin - після закінчення анімації.
    // треба створити функцію, яка буде виконуватися до певної умови. Якщо умова виконується, то все, анімація закінчується
    // вираховуємо час початку анімації і порівнюємо його з dur, який самі встановлюємо

    // 1. Треба визначити скільки часу пройшло від початку анімації 
    // 2. Порівняти значення, яке вийшло, із duration, яку задаємо самі (за скільки часу має пройти анімація: 3,5,10 сек)
    // 3. Результат (число) записати у основну дію з анімацією (зростання opacity, якась distance тощо). Це типу інтервал анімації.
    // 4. Записати умови, що ф-ія requestAnimationFrame працює, поки кількість часу, яка пройшла, не перевищує duration, яку ми зазначили вручну

     let timeStart;
     
     function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }
        
        let timeElapsed = time - timeStart; // скільки часу пройшло від початку 
        console.log(timeElapsed);
        // dur = 3000, виставляю сам, тобто, за скільки часу має відбутися анімація ()
        let complection = Math.min(timeElapsed / dur, 1) // кожен раз інше значення

        cb(complection)

        if(timeElapsed < dur) { // якщо пройшло менше часу, ніж ми задали в dur, то все ок, анімація поки працює
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof fin === 'function') {
                fin();
            }
        }
     }
     return _animateOverTime;
}

$.prototype.fadeIn = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection; // цифри від 0 до 1 
        }

        const ani = this.animateOverTime(dur, _fadeIn, fin);
        requestAnimationFrame(ani);
    }
    return this;
}

$.prototype.fadeOut = function(dur, fin) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection == 1) {
                this[i].style.display = 'none';
            }
        }

        const ani = this.animateOverTime(dur, _fadeOut, fin);
        requestAnimationFrame(ani);
    }
    return this;
}

$.prototype.fadeToggle = function(dur, display, fin) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection; // цифри від 0 до 1 
            }
    
            const ani = this.animateOverTime(dur, _fadeIn, fin);
            requestAnimationFrame(ani);
        } else {
            for (let i = 0; i < this.length; i++) {

                const _fadeOut = (complection) => {
                    this[i].style.opacity = 1 - complection;
                    if (complection == 1) {
                        this[i].style.display = 'none';
                    }
                }
        
                const ani = this.animateOverTime(dur, _fadeOut, fin);
                requestAnimationFrame(ani);
            }
        }
    }
    return this;
}

// let circle = document.querySelector('.circle');

// circle.style.cssText = `
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     margin-left: -300px;
//     width: 100px;
//     height: 100px;
//     background: red;
// `;
// ми хочемо, щоб за секунду пройшло 10 ітерацій (10 рухів)
// const duration = 1000; // за скільки часу
// const iterations = 60; // за скільки разів (кадрів у секунду)
// const distance = 500; // на скільки ми хочемо зрушити об'єкт
// let translate = 0;

// const anim = setInterval(() => {
//     translate += distance / iterations;
//     circle.style.transform = `translateX(${translate}px)`
//     if (translate >= distance) {
//         clearInterval(anim);
//     }
// }, duration/iterations)

// те саме, але через requestAnimationFrame. Не треба рахувати кількість iterations, це робить requestAnimationFrame - time
// const duration = 1000; // за скільки часу
// const distance = 500; // на скільки ми хочемо зрушити об'єкт

// let startAnimation = null;

// requestAnimationFrame(function measure(time) {
//     if (!startAnimation) {
//         startAnimation = time;
//     }
    
//     const progress = (time - startAnimation) / duration; // число від 0 до 1, наприклад time = 500; startAnimation = 0; duration = 1000; то прогрес = 500/1000 = 0,5, тобто, ми в середині анімації, а якщо 1 - то в кінці 
//     console.log(startAnimation)
//     console.log(time)

//     const translate = progress * distance;
//     circle.style.transform = `translateX(${translate}px)`

//     if (progress < 1) { // виклик анімації, типу рекурсія тут
//         requestAnimationFrame(measure)
//     }
// });