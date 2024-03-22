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

  const headerElement = document.querySelector('.header')
  const socials = document.querySelector('.socials--fixed')

  window.addEventListener('scroll', () => {
    const headerPosition = headerElement.getBoundingClientRect().bottom
    const isHeaderHidden = headerPosition < 0

    if (isHeaderHidden) {
      socials.classList.add('socials--visible')
      socials.classList.remove('socials--hidden')
    } else {
      socials.classList.remove('socials--visible')
      socials.classList.add('socials--hidden')
    }
    // if (isHeaderHidden) {
    //   socials.style.display = 'block'
    // } else {
    //   socials.style.display = 'none'
    // }
  })

  const menuLinks = document.querySelectorAll('[class][data-goto]')

  if (menuLinks.length > 0) {
    menuLinks.forEach((link) => {
      link.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
      const link = e.target
      if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        const gotoBlock = document.querySelector(link.dataset.goto)
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top
        window.scrollBy({
          top: gotoBlockValue,
          behavior: 'smooth',
        })
        e.preventDefault()
      }
    }
  }

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
      grid: {
        rows: 3,
      },
      breakpoints: {
        993: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 2.1,
        },
        577: {
          slidesPerView: 2,
        },
        391: {
          slidesPerView: 1.3,
        },
        320: {
          slidesPerView: 1.1,
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
