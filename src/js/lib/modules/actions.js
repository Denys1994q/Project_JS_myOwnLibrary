import $ from '../core'; // ../ - вийти з папки

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }
    return this;
}
// для роботи з окремими елементами, наприклад, лише з 2 дівом з 10 дівів
$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength.length; i++) {
        delete this[i];
    }
    this[0] = swap;
    this.length = 1;  
    return this; // повертає об'єкт з яким можна далі взаємодіяти 
}

// отримання елементу по порядку, серед тих елементів, які мають спільного родителя 
// це закінчений метод (повертає число - індекс елементу, який ми шукаємо), тобто, немає команди return this
$.prototype.index = function(i) {
    const parent = this[0].parentNode; // шукаємо родительський елемент
    const childs = [...parent.children]; // шукаємо його дітей, перетворюємо в масив, щоб можна було методи масиву використати

    //ф-ія для пошуку елементу, передається у findIndex
    const findMyIndex = (item) => {
        return item == this[0]; // поверне лише той один елемент item, який буде дорівнювати тому селектору, який ми передаємо на початку в $()
    }

    return childs.findIndex(findMyIndex) // шукаємо потрібний елемент 
    // Метод findIndex() возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции
}

$.prototype.find = function(selector) {
    let numberOfItems = 0; // к-сть елементів, які підійшли по селектору
    let counter = 0;

    const copyObj = Object.assign({}, this); // створюємо просто копію об'єкту this, щоб з ним працювати, а потім вже перейти до нормального this

    for(let i = 0; i < copyObj.length; i++) { // перебираємо всі елементи 
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }
        // записуємо в об'єкт this елементи, які знайшли
        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];
            counter++;
        }
        numberOfItems += arr.length;
    }

    this.length = numberOfItems;

    // видаляємо зайві елементи з першого базового this, щоб була нормальна length
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }
    return this;
}

$.prototype.closest = function(selector) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector) !== null) {
            this[i] = this[i].closest(selector);
            counter++;
        }
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

// шукає всі сусідні елементи, не включаючи сам елемент
$.prototype.siblings = function() {
    let numberOfItems = 0; // к-сть елементів, які підійшли по селектору
    let counter = 0;

    const copyObj = Object.assign({}, this); // створюємо просто копію об'єкту this, щоб з ним працювати, а потім вже перейти до нормального this

    for(let i = 0; i < copyObj.length; i++) { // перебираємо всі елементи 
        const arr = copyObj[i].parentNode.children;
        
        // записуємо в об'єкт this елементи, які знайшли
        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) { // щоб сам елемент, по якому клікнули, не додавався 
                continue;
            }
            this[counter] = arr[j];
            counter++;
        }
        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    // видаляємо зайві елементи з першого базового this, щоб була нормальна length
    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }
    return this;
}





