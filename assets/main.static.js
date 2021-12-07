window.addEventListener('load', () => {
  let e = document.querySelectorAll('.slide-pagination');
  function t(e, t, i) {
    var o = e.scrollTop,
      a = t - o,
      n = 0,
      r = function () {
        n += 20;
        var t = Math.easeInOutQuad(n, o, a, i);
        (e.scrollTop = t), n < i && setTimeout(r, 20);
      };
    r();
  }
  (Math.easeInOutQuad = function (e, t, i, o) {
    return (e /= o / 2) < 1
      ? (i / 2) * e * e + t
      : (-i / 2) * (--e * (e - 2) - 1) + t;
  }),
    e.forEach((i, o) => {
      i.addEventListener('click', function () {
        var i = this.offsetTop;
        let o = this.getAttribute('data-slide');
        t(document.querySelector('#custom-navigation > div'), i - 71, 300),
          e.forEach((e, t) => {
            e.classList.remove('active-slide');
          }),
          this.classList.add('active-slide'),
          (location.hash = o);
      });
    });
  new Swiper('#swiper', {
    effect: 'fade',
    fadeEffect: { crossFade: !0 },
    autoHeight: !0,
    direction: 'horizontal',
    loop: !0,
    hashNavigation: { watchState: !0 },
    on: {
      slideChange: function () {
        setTimeout(() => {
          e.forEach((i, o) => {
            if (i.getAttribute('data-slide') === location.hash.split('#')[1]) {
              var a = i.offsetTop;
              t(
                document.querySelector('#custom-navigation > div'),
                a - 71,
                300
              ),
                e.forEach((e, t) => {
                  e.classList.remove('active-slide');
                }),
                i.classList.add('active-slide');
            }
          });
        }, 400);
      },
    },
  });
});
window.addEventListener('load', function () {
  new Swiper('#product_slider', {
    navigation: { nextEl: '.next-arrow', prevEl: '.prev-arrow' },
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: { 981: { slidesPerView: 4, spaceBetween: 40 } },
  }),
    new Swiper('#product_slider_2_slides', {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: { nextEl: '.next-arrow', prevEl: '.prev-arrow' },
    }),
    new Swiper('#gallery-slider', {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: { nextEl: '.next-arrow', prevEl: '.prev-arrow' },
      breakpoints: { 981: { slidesPerView: 4, spaceBetween: 40 } },
    });
}),
  window.addEventListener('load', function () {
    const e = document.querySelectorAll('.c-accordian .accordion-collapse ');
    window.innerWidth < 980 &&
      e.forEach(function (e) {
        e.classList.remove('show');
      });
    const t = document.querySelectorAll('.footer_link_col .collapse');
    window.innerWidth < 980 &&
      t.forEach(function (e) {
        e.classList.remove('show');
      });
  });
