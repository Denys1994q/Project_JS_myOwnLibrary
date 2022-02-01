import $ from '../core'; // ../ - вийти з папки

$.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) { // якщо нема взагалі такого свойства в елемента
            continue;
        }
        this[i].classList.add(...classNames);
    }
    return this;
};

$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) { // якщо нема взагалі такого свойства в елемента
            continue;
        }
        this[i].classList.remove(...classNames);
    }
    return this;
};

$.prototype.toggleClass = function(classNames) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].classList) { // якщо нема взагалі такого свойства в елемента
            continue;
        }
        this[i].classList.toggle(classNames);
    }
    return this;
};
