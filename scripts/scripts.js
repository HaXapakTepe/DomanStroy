$(document).ready(function () {
  const body = document.querySelector('body')
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const menuItem = document.querySelectorAll('.menu__item')
  const close = document.querySelector('.menu__close')

  const toggleMenu = () => {
    menu.classList.toggle('menu--active')
    burger.classList.toggle('burger--active')
    body.classList.toggle('no-scroll')
  }

  const clickOutsideMenu = (event) => {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
      menu.classList.remove('menu--active')
      burger.classList.remove('burger--active')
      body.classList.remove('no-scroll')
    }
  }

  burger.addEventListener('click', toggleMenu)
  close.addEventListener('click', toggleMenu)
  document.addEventListener('click', clickOutsideMenu)

  if (burger) {
    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        burger.classList.toggle('active')
        menu.classList.remove('active')
        body.classList.remove('no-scroll')
      })
    })
  }

  function handleTabClick(tabs, pages, activeTabClass, activePageClass, opacityPageClass) {
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove(activeTabClass))
        pages.forEach((page) => {
          page.classList.remove(activePageClass)
          page.classList.remove(opacityPageClass)
        })

        tab.classList.add(activeTabClass)
        pages[idx].classList.add(activePageClass)

        setTimeout(() => {
          pages[idx].classList.add(opacityPageClass)
        }, 380)
      })
    })
  }

  const tabs = document.querySelectorAll('.tab__target')
  const pages = document.querySelectorAll('.tab__info')

  handleTabClick(tabs, pages, 'tab__target--active', 'tab__info--active', 'tab__info--opacity')

  // const accordion = document.querySelectorAll('.accordion')
  // accordion?.forEach((acc) => {
  //   acc.addEventListener('click', (e) => {
  //     e.preventDefault()
  //     // const content = acc.querySelector('.accordion__content')
  //     const content = acc.nextElementSibling
  //     if (acc.classList.contains('accordion--active')) {
  //       acc.classList.remove('accordion--active')
  //       content.style.maxHeight = '0'
  //     } else {
  //       acc.classList.add('accordion--active')
  //       content.style.maxHeight = content.scrollHeight + 'px'
  //     }
  //   })
  // })
  const accordions = document.querySelectorAll('.accordion')
  const contents = document.querySelectorAll('.accordion-content')

  accordions?.forEach((acc, index) => {
    acc.addEventListener('click', (e) => {
      e.preventDefault()

      const content = contents[index]

      if (acc.classList.contains('accordion--active')) {
        acc.classList.remove('accordion--active')
        content.style.maxHeight = '0'
      } else {
        acc.classList.add('accordion--active')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })

  const count = document.querySelectorAll('.count')

  count?.forEach((element) => {
    element.addEventListener('click', function (event) {
      const e = event.target
      const num = element.querySelector('.count__num')
      let sum = +num.innerHTML

      if (e.classList.contains('count__plus')) {
        ++sum
        num.innerHTML = sum
      }
      if (e.classList.contains('count__minus')) {
        if (sum > 1) {
          --sum
          num.innerHTML = sum
        }
      }
    })
  })

  if (document.querySelector('[name="phone"]')) {
    const element = document.querySelector('[name="phone"]')
    const maskOptions = {
      mask: '+{7} 000 000 00 00',
    }
    const mask = IMask(element, maskOptions)
  }

  Fancybox.bind('[data-fancybox]', {})

  $('.header__loca-select').select2({
    dropdownParent: $('.header__loca-box'),
    // placeholder: 'Выберите из списка',
  })

  if (document.querySelector('.calc-step')) {
    var calcStep = document.querySelectorAll('.calc-step')
    calcStep.forEach((item) => {
      noUiSlider.create(item, {
        start: [500000],
        connect: [true, false],
        step: 5000,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          min: [100000],
          max: [3000000],
        },
      })

      let pips = item.noUiSlider.pips({
        mode: 'positions',
        values: [0, 100],
        format: wNumb({
          suffix: '₽',
        }),
      })
      // let attr = pips.querySelectorAll('[data-value]')
      // let elem = Array.from(attr).splice(1)
      // elem.forEach(function (el) {
      //   let i = el.dataset.value.substr(0, 1)
      //   el.innerHTML = i + ' ₽'
      // })
      item.noUiSlider.on('update', function (values, handle) {
        item.previousElementSibling.innerHTML = values[handle] + ' ₽'
      })
    })
  }

  if (document.querySelector('.calc-year')) {
    var calcStep = document.querySelectorAll('.calc-year')
    calcStep.forEach((item) => {
      noUiSlider.create(item, {
        start: [10],
        connect: [true, false],
        step: 1,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          min: [5],
          max: [30],
        },
      })

      let pips = item.noUiSlider.pips({
        mode: 'positions',
        values: [0, 100],
        format: wNumb({
          suffix: ' лет',
        }),
      })
      item.noUiSlider.on('update', function (values, handle) {
        item.previousElementSibling.innerHTML = values[handle] + ' лет'
      })
    })
  }
  if (document.querySelector('.calc-bid')) {
    var calcStep = document.querySelectorAll('.calc-bid')
    calcStep.forEach((item) => {
      noUiSlider.create(item, {
        start: [5],
        connect: [true, false],
        step: 0.1,
        format: wNumb({
          decimals: 0,
        }),
        range: {
          min: [0.1],
          max: [15],
        },
      })

      let pips = item.noUiSlider.pips({
        mode: 'positions',
        values: [0, 100],
        format: wNumb({
          suffix: ' %',
        }),
      })
      item.noUiSlider.on('update', function (values, handle) {
        item.previousElementSibling.innerHTML = values[handle] + ' %'
      })
    })
  }

  if (document.querySelector('.projects__swiper')) {
    var projectsSwiper = new Swiper('.projects__swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        769: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        577: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        391: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
      },
      pagination: {
        el: '.projects__swiper-pagination',
      },
    })
  }

  if (document.querySelector('.team__swiper')) {
    var teamSwiper = new Swiper('.team__swiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        993: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        769: {
          slidesPerView: 2.1,
          spaceBetween: 20,
        },
        577: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        391: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
      },
      // navigation: {
      //   nextEl: `.team__arrow-next`,
      //   prevEl: `.team__arrow-prev`,
      // },
      pagination: {
        el: '.team__swiper-pagination',
      },
    })
  }

  var swiper = new Swiper('.details__swiperSmall', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  })
  var swiper2 = new Swiper('.details__swiperBig', {
    loop: true,
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  })

  var points = [
    [
      '<div class="map-baloon"><p>г. Ростов-на-Дону, пр-т Михаила Нагибина, 38</p></div>',
      '47.26437635192941',
      '39.72169386836962',
    ],
  ]

  if (document.querySelector('.map')) {
    ymaps?.ready(function () {
      var myCollection = new ymaps.GeoObjectCollection()

      myMap = new ymaps.Map('mapYandex', {
        center: [47.26437635192941, 39.72169386836962],
        zoom: 16,
        // controls: ['zoomControl', 'geolocationControl', 'trafficControl'],
      })

      if (innerWidth < 1024) {
        myMap.behaviors.disable('scrollZoom')
        myMap.behaviors.disable('drag')
      }

      for (i = 0; i < points.length; i++) {
        var myPlacemark = new ymaps.Placemark(
          [points[i][1], points[i][2]],
          {
            balloonContent: points[i][0],
          },
          {
            iconLayout: 'default#image',
            iconImageHref: '../assets/images/icons/loca-color.svg',
            iconImageSize: [48, 48],
          }
        )
        myCollection.add(myPlacemark)
        myMap.geoObjects.add(myPlacemark)

        myMap.events.add('click', function (e) {
          myMap.balloon.close()
        })
      }

      myMap.geoObjects.add(myCollection)

      myPlacemark.events.add('click', function (event) {
        event.preventDefault()
      })
    })
  }
})
