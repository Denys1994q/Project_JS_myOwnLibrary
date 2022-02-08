import $ from '../core';

$.prototype.accordion = function(headActive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive); // для head
            $(this[i].nextElementSibling).toggleClass(contentActive); // для content

            if (this[i].classList.contains(headActive)) { 
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px'; // збільшуємо висоту контенту, щоб не налазили один на одного
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }

        })
    }
}

$('.accordion-head').accordion();