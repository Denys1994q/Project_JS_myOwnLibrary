import $ from '../core'; // ../ - вийти з папки

$.prototype.show = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) { // якщо нема взагалі такого свойства style в елемента
            continue;
        }
        this[i].style.display = '';
    }

    return this; // щоб ми далі могли працювати з цими методами
};

$.prototype.hide = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) { // якщо нема взагалі такого свойства style в елемента
            continue;
        }
        this[i].style.display = 'none';
    }

    return this; // щоб ми далі могли працювати з цими методами
};

$.prototype.toggle = function() {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].style) { // якщо нема взагалі такого свойства style в елемента
            continue;
        }

        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        } else {
            this[i].style.display = 'none';
        }

    }

    return this; // щоб ми далі могли працювати з цими методами
};



