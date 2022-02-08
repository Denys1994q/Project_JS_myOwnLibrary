import $ from '../core';

    const scroll = calcScroll();
    function calcScroll() { // штучний блок, щоб забрати загальний скрол при появі всіх модалок
        let div = document.createElement('div');

        div.style.width = '50px'; // будь-яка ширина і висота
        div.style.height = '50px';
        div.style.overflowY = 'scroll'; // штучно задаємо, щоб з'явився скрол
        div.style.visibility = 'hidden'; // щоб ми його не бачили 

        document.body.appendChild(div); // просто кудись вставити
        let scrollWidth = div.offsetWidth - div.clientWidth; // віднімаємо від загальних параметрів блоку (разом зі скролом) його реальні параметри і різниця - це скрол в пікселях
        div.remove();

        return scrollWidth;
    }

// ф-ія modal - логіка модалки (відкриття, закриття)
// ф-ія createModal - створює програмно модалку (замість коду в html)

$.prototype.modal = function(created) {
    // created - якщо передаємо, це значить, що працюємо з модалкою, яка створена програмно, а не просто прописана в html. Треба для того, щоб видаляти модалку після закриття
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target'); // те модальне вікно, яке треба відкрити. Тобто, ми з кнопки беремо атрибут id, по якому знаходимо модалку, бо в модалки стоїть це id (exampleModal)
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
            // document.body.style.marginRight = `${scroll}px`;
        })
        const closeElements = document.querySelectorAll(`${target} [data-close]`);
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            })
        })
    
        $(target).click((e) => {
            if (e.target.classList.contains('modall')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove();
                }
            }   
        });
    }
}

// $('[data-toggle="modal"]').modal();


// 1. клікаємо на кнопку (це записано в main)
// 2. створюємо модалку через createElement, додаємо модалці класи, прописуємо верстку через innerHTML (передаємо динамічно параметри з ф-ії createModal)
// 3. встановлюємо модалці id, в який записуємо значення data-target з кнопки, по якій клікнули (щоб різні кнопки викликали різні модалки)
// 4. В innerHTML модалки записуємо масив з кнопками 
// 5. Додаємо створену модалку в html 
// 6. Запускаємо ф-ію modal всередині createModal (щоб в main не писати .modal.createModal)
$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div'); // 2. 
        modal.classList.add('modall'); // 2.
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); // 3. slice, щоб передати без #, яка 0 символ

        // btns = {count: num, settings: [ [text, classNames = [], close, cb] ] } . Це просто як має виглядати
    
        const buttons = []; // 4. 
       
        for (let j = 0; j < btns.settings.length; j++) { // count
            
            const [textBtn, classNames, close, cb] = btns.settings[j]; // деструктуризація

            let btn = document.createElement('button');
            btn.classList.add('btn', ...classNames); // classNames
            btn.textContent = textBtn; // text
            if (close) { // close
                btn.setAttribute('data-close', 'true');
            }
            if (cb && typeof(cb) === 'function') { // cb
                btn.addEventListener('click', cb)
            }
            buttons.push(btn);
        }
        
        // 2.
        modal.innerHTML = ` 
        <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close><span>&times;</span></button>
                    <div class="modal-header">
                        <div class="modal-title">
                            ${text.title}
                        </div>
                    </div>
                    <div class="modal-body">
                        ${text.body}
                    </div>
                    <div class="modal-footer">

                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons); // 4.
        document.body.appendChild(modal); // 5. 
        $(this[i]).modal(true); // 6. відразу запускаємо ф-ію modal всередині createModal
        $(this[i].getAttribute('data-target')).fadeIn(500); // типу імітуємо click. Тому що ф-ія modal чекає клік, щоб працювати, а тут ми по кліку запускаємо ф-ію createModal, тому треба типу зімітувати клік, щоб запрацювала ф-я modal або, як і зробили, просто прямо прописати метод fadeIn напряму. 
    }
}

