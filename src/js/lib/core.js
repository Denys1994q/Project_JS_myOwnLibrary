// прототипом об'єкта функції $ є об'єкт функція init
// у ф-ію init записані всі методи, які ми створюємо, додаючи їх в прототип init (0: addClass; 1: click...)
// а потім ми всі ці методи записуємо в об'єкт $

const $ = function(selector) {
    return new $.prototype.init(selector); // кожен раз, коли запускається функція, створюється новий об'єкт 
};

$.prototype.init = function(selector) { // щоб кожен раз не робити querySelectorAll на кожен метод. А відразу звертатися до елементів 
    if (!selector) {
        return this; // новосторений об'єкт, в цьому випадку пустий {}
    }
    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }
    Object.assign(this, document.querySelectorAll(selector)); // додаємо в {} елементи, для яких ми нижче додаємо свойства
    this.length = document.querySelectorAll(selector).length; // нове свойство length
    return this;
}

$.prototype.init.prototype = $.prototype; // ми в протитип об'єкта, який нам повертає init, записуємо прототип нашої головної функції (всі методи, які ми в неї додали )
// прототипом inita є функція $ (!). А в $ ми записуємо всі інші методи (з модулів). І виходить, що у $ є і ініт, і інші методи з модулів. 

window.$ = $;

export default $;


// Про ООП
// __proto__ є в будь-якого об'єкта, а prototype - тільки в класів чи функцій  https://www.youtube.com/watch?v=b55hiUlhAzI&t=1508s
// prototype завжди не рівні між собою
// __proto__ - це те від чого створилося. від Function.prototype, Number.prototype, Array.prototype...
// console.log($.prototype)

