import $ from './lib/lib';

$('button').click(function() {
    $('div').eq(1).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index()); // індекс елементу на який ми клікнули. this - те, що на клікнули
})

