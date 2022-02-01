import $ from '../core'; // ../ - вийти з папки

$.prototype.setAttribute = function(name, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute(name, value)) { // якщо нема взагалі такого свойства в елемента
            continue;
        }
        return this[i].setAttribute(name, value);
    }
    return this;
};

$.prototype.getAttribute = function(name) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(name)) { // якщо нема взагалі такого свойства в елемента
            continue;
        }
        return this[i].getAttribute(name);
    }
    return this;
};
