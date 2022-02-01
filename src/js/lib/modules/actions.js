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
