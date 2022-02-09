import $ from './lib/lib';

// modal
// $('#trigger').click(() => {
//     $('#trigger').createModal({
//         text: {
//             title: 'Modal title',
//             body: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, maxime autem voluptatum est corrupti libero eligendi ipsa obcaecati, officia officiis ut veritatis earum. Neque deserunt, harum quibusdam similique cum unde!'
//         },
//         btns: {
//             settings: [
//                 [
//                     'Close',
//                     ['btn-danger', 'mr-10'],
//                     true
//                 ],
//                 [
//                     'Save changes',
//                     ['btn-success'],
//                     false,
//                     () => {
//                         alert('Дані збережено');
//                     }
//                 ],
//                 [
//                     'Another btn',
//                     ['btn-warning'],
//                     false,
//                     () => {
//                         alert('Куку');
//                     }
//                 ]
//             ]
//         }
//     });
// })

// // slider
$().createSlider({
    container: '.container-for-slider',
    imgs: [
            'https://ipiccy.com/res/template/img/hp_v2/pics/ba-01s3.jpg',
            'https://images.pexels.com/photos/1363876/pexels-photo-1363876.jpeg?cs=srgb&dl=calm-body-of-water-1363876.jpg&fm=jpg',
            'https://pixlr.com/images/best-photo-editor-cover.jpg',
            'http://www.rosphoto.com/images/u/articles/1510/7_5.jpg',
            'https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg',
            'https://prophotos.ru/data/articles/0002/2614/image-rectangle_600_x.jpg',
            'https://i.pinimg.com/736x/b3/a6/32/b3a632a5547d22c553075514add449db.jpg'
    ],
    autoplay: false,
    dots: true
});

