var IMAGES = {
    exams: [{
            src: './assets/100MSDCF/DSC00827.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00828.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00829.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00830.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00831.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00832.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        }
    ],
    events: [{
            src: './assets/100MSDCF/DSC00827.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00828.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00829.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00830.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00831.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00832.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        },
        {
            src: './assets/100MSDCF/DSC00833.JPG',
            info: "THISMIS DEMO IMAGE"
        }
    ],
    fun: [{
        src: '../assets/100MSDCF/DSC00827.JPG',
        info: "THISMIS DEMO IMAGE"
    }, {
        src: '../assets/100MSDCF/DSC00827.JPG',
        info: "THISMIS DEMO IMAGE"
    }]
}

var html = '<div class="row m-0">';
var modal = document.getElementById("myModal");


for (let i = 0; i < IMAGES.exams.length; i++) {
    html += "<div class='col-md-3'><div class='card'>";
    html += "<img src='" + IMAGES.exams[i].src + "' class='img-tag card-img-top'>";
    html += "<div class='card-body'><p class='card-text'>'" + IMAGES.exams[i].info + "'</p></div></div>"
    html += "</div>"
}
html += '</div>'
document.getElementById("exm_img").innerHTML = html;

var event_img_html = '<div class="swiper-container custom-swiper"><div class="swiper-wrapper">';
for (let j = 0; j < IMAGES.events.length; j++) {
    event_img_html += "<div class='swiper-slide card'><img src='" + IMAGES.events[j].src + "' class='card-img-top'><div class='card-body'><p class='card-text'>'" + IMAGES.events[j].info + "'</p></div></div>"
}
event_img_html += "</div>"
event_img_html += "<div class='swiper-pagination'></div>"
event_img_html += "</div>"
document.getElementById("event_img").innerHTML = event_img_html;

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerColumn: 2,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


var fun_img_html = '<div class="row m-0">';
for (let j = 0; j < IMAGES.events.length; j++) {
    fun_img_html += "<div class='col-md-3'><div class='card'>";
    fun_img_html += "<img src='" + IMAGES.events[j].src + "' class='img-tag card-img-top'>";
    fun_img_html += "<div class='card-body'><p class='card-text'>'" + IMAGES.events[j].info + "'</p></div></div>"
    fun_img_html += "</div>"
}
fun_img_html += '</div>'
document.getElementById("fun_img").innerHTML = fun_img_html;
// var fun_img_html = '<div class="swiper-container"><div class="swiper-wrapper">';
// for (let j = 0; j < IMAGES.events.length; j++) {
//     fun_img_html += "<div class='swiper-slide card'><img src='" + IMAGES.events[j].src + "' class='card-img-top'><div class='card-body'><p class='card-text'>'" + IMAGES.events[j].info + "'</p></div></div>"
// }
// fun_img_html += "</div>"
// fun_img_html += "<div class='swiper-pagination'></div>"
// fun_img_html += "</div>"
// document.getElementById("fun_img").innerHTML = fun_img_html;

// var swiper2 = new Swiper('swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerColumn: 2,
//     freeMode: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     /* effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows : true,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//     }, */
//   });



(new IntersectionObserver(function (e, o) {
    if (e[0].intersectionRatio > 0) {
        document.documentElement.removeAttribute('class');
    } else {
        document.documentElement.setAttribute('class', 'stuck');
    };
})).observe(document.querySelector('.trigger'));

// $("#faculty-swiper").removeClass("swiper-container-multirow");
// $("#faculty-swiper").removeClass("swiper-container-free-mode");
// document.getElementById("faculty-swiper-wrapper").removeAttribute("style");
// console.log('$("#faculty-swiper") : ', $("#faculty-swiper"));
