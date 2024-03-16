window.addEventListener('DOMContentLoaded', () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const success = document.querySelector('.success')

  const formWhereEl = document.querySelector('#formWhere')
  const formWhereElNameInputEl = formWhereEl?.querySelector('#formWhere-name-input')
  const formWhereElEmailInputEl = formWhereEl?.querySelector('#formWhere-email-input')
  const formWhereElTelInputEl = formWhereEl?.querySelector('#formWhere-phone-input')
  const formWhereElStrInputEl = formWhereEl?.querySelector('#formWhere-str-url')
  const formWhereElSubject = 'Заявка из формы Где купить'

  const formPartnersEl = document.querySelector('#formPartners')
  const formPartnersElNameInputEl = formPartnersEl?.querySelector('#formPartners-name-input')
  const formPartnersElEmailInputEl = formPartnersEl?.querySelector('#formPartners-email-input')
  const formPartnersElTelInputEl = formPartnersEl?.querySelector('#formPartners-phone-input')
  const formPartnersElStrInputEl = formPartnersEl?.querySelector('#formPartners-str-url')
  const formPartnersElSubject = 'Заявка из формы Сотрудничества'

  const modalPartnersEl = document.querySelector('#modalPartners')
  const modalPartnersElNameInputEl = modalPartnersEl?.querySelector('#modalPartners-name-input')
  const modalPartnersElEmailInputEl = modalPartnersEl?.querySelector('#modalPartners-email-input')
  const modalPartnersElTelInputEl = modalPartnersEl?.querySelector('#modalPartners-phone-input')
  const modalPartnersElStrInputEl = modalPartnersEl?.querySelector('#modalPartners-str-url')
  const modalPartnersElSubject = 'Заявка из модалки Партнёры'

  const modalReviewsEl = document.querySelector('#modalReviews')
  const modalReviewsElNameInputEl = modalReviewsEl?.querySelector('#modalReviews-name-input')
  const modalReviewsElEmailInputEl = modalReviewsEl?.querySelector('#modalReviews-email-input')
  const modalReviewsElTelInputEl = modalReviewsEl?.querySelector('#modalReviews-phone-input')
  const modalReviewsElProductInputEl = modalReviewsEl?.querySelector('#modalReviews-product-input')
  const modalReviewsElReviewInputEl = modalReviewsEl?.querySelector('#modalReviews-review-input')
  const modalReviewsElSubject = 'Форма Отзыва'

  const checkInputValidity = (input) => input.value

  const submitWhereForm = async (e) => {
    e.preventDefault()
    ;[formWhereElNameInputEl, formWhereElEmailInputEl, formWhereElTelInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input-invalid')
        return
      } else {
        input.classList.remove('input-invalid')
      }
    })

    if (formWhereElNameInputEl.value.length < 2 || formWhereElNameInputEl.value.length > 30) {
      formWhereElNameInputEl.classList.add('input-invalid')
      return
    } else {
      formWhereElNameInputEl.classList.remove('input-invalid')
    }

    if (!emailRegex.test(formWhereElEmailInputEl.value)) {
      formWhereElEmailInputEl.classList.add('input-invalid')
      return
    } else {
      formWhereElEmailInputEl.classList.remove('input-invalid')
    }

    if (formWhereElTelInputEl.value.length < 18) {
      formWhereElTelInputEl.classList.add('input-invalid')
      return
    } else {
      formWhereElTelInputEl.classList.remove('input-invalid')
    }

    $.ajax({
      url: '/mail.php',
      type: 'POST',
      data: {
        name: formWhereElNameInputEl.value,
        phone: formWhereElTelInputEl.value,
        email: formWhereElEmailInputEl.value,
        url: formWhereElStrInputEl.value,
        subject: formWhereElSubject,
      },
      cache: false,
      dataType: 'html',
      success: function (data) {
        success.classList.add('success--visible')
        if (success.classList.contains('success--visible')) {
          setTimeout(() => {
            success.classList.remove('success--visible')
          }, 1500)
        }
      },
    })
  }

  const submitPartnersForm = async (e) => {
    e.preventDefault()
    ;[formPartnersElNameInputEl, formPartnersElEmailInputEl, formPartnersElTelInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input-invalid')
        return
      } else {
        input.classList.remove('input-invalid')
      }
    })

    if (formPartnersElNameInputEl.value.length < 2 || formPartnersElNameInputEl.value.length > 30) {
      formPartnersElNameInputEl.classList.add('input-invalid')
      return
    } else {
      formPartnersElNameInputEl.classList.remove('input-invalid')
    }

    if (!emailRegex.test(formPartnersElEmailInputEl.value)) {
      formPartnersElEmailInputEl.classList.add('input-invalid')
      return
    } else {
      formPartnersElEmailInputEl.classList.remove('input-invalid')
    }

    if (formPartnersElTelInputEl.value.length < 18) {
      formPartnersElTelInputEl.classList.add('input-invalid')
      return
    } else {
      formPartnersElTelInputEl.classList.remove('input-invalid')
    }

    $.ajax({
      url: '/mail.php',
      type: 'POST',
      data: {
        name: formPartnersElNameInputEl.value,
        phone: formPartnersElTelInputEl.value,
        email: formPartnersElEmailInputEl.value,
        url: formPartnersElStrInputEl.value,
        subject: formPartnersElSubject,
      },
      cache: false,
      dataType: 'html',
      success: function (data) {
        success.classList.add('success--visible')
        if (success.classList.contains('success--visible')) {
          setTimeout(() => {
            success.classList.remove('success--visible')
          }, 1500)
        }
      },
    })
  }

  const submitModalPartnersForm = async (e) => {
    e.preventDefault()
    ;[modalPartnersElNameInputEl, modalPartnersElEmailInputEl, modalPartnersElTelInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input-invalid')
        return
      } else {
        input.classList.remove('input-invalid')
      }
    })

    if (modalPartnersElNameInputEl.value.length < 2 || modalPartnersElNameInputEl.value.length > 30) {
      modalPartnersElNameInputEl.classList.add('input-invalid')
      return
    } else {
      modalPartnersElNameInputEl.classList.remove('input-invalid')
    }

    if (!emailRegex.test(modalPartnersElEmailInputEl.value)) {
      modalPartnersElEmailInputEl.classList.add('input-invalid')
      return
    } else {
      modalPartnersElEmailInputEl.classList.remove('input-invalid')
    }

    if (modalPartnersElTelInputEl.value.length < 18) {
      modalPartnersElTelInputEl.classList.add('input-invalid')
      return
    } else {
      modalPartnersElTelInputEl.classList.remove('input-invalid')
    }

    $.ajax({
      url: '/mail.php',
      type: 'POST',
      data: {
        name: modalPartnersElNameInputEl.value,
        phone: modalPartnersElTelInputEl.value,
        email: modalPartnersElEmailInputEl.value,
        url: modalPartnersElStrInputEl.value,
        subject: modalPartnersElSubject,
      },
      cache: false,
      dataType: 'html',
      success: function (data) {
        Fancybox.close()
        success.classList.add('success--visible')
        if (success.classList.contains('success--visible')) {
          setTimeout(() => {
            success.classList.remove('success--visible')
          }, 1500)
        }
      },
    })
  }

  const submitModalReviewsForm = async (e) => {
    e.preventDefault()
    ;[
      modalReviewsElNameInputEl,
      modalReviewsElEmailInputEl,
      modalReviewsElTelInputEl,
      modalReviewsElProductInputEl,
      modalReviewsElReviewInputEl,
    ].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input-invalid')
        return
      } else {
        input.classList.remove('input-invalid')
      }
    })

    if (modalReviewsElNameInputEl.value.length < 2 || modalReviewsElNameInputEl.value.length > 30) {
      modalReviewsElNameInputEl.classList.add('input-invalid')
      return
    } else {
      modalReviewsElNameInputEl.classList.remove('input-invalid')
    }

    if (modalReviewsElProductInputEl.value.length < 2 || modalReviewsElProductInputEl.value.length > 30) {
      modalReviewsElProductInputEl.classList.add('input-invalid')
      return
    } else {
      modalReviewsElProductInputEl.classList.remove('input-invalid')
    }

    if (modalReviewsElReviewInputEl.value.length < 2) {
      modalReviewsElReviewInputEl.classList.add('input-invalid')
      return
    } else {
      modalReviewsElReviewInputEl.classList.remove('input-invalid')
    }

    if (!emailRegex.test(modalReviewsElEmailInputEl.value)) {
      modalReviewsElEmailInputEl.classList.add('input-invalid')
      return
    } else {
      modalReviewsElEmailInputEl.classList.remove('input-invalid')
    }

    if (modalReviewsElTelInputEl.value.length < 18) {
      modalReviewsElTelInputEl.classList.add('input-invalid')
      return
    } else {
      modalReviewsElTelInputEl.classList.remove('input-invalid')
    }

    $.ajax({
      url: '/mail-modal.php',
      type: 'POST',
      data: {
        name: modalReviewsElNameInputEl.value,
        phone: modalReviewsElTelInputEl.value,
        email: modalReviewsElEmailInputEl.value,
        product: modalReviewsElProductInputEl.value,
        review: modalReviewsElReviewInputEl.value,
        subject: modalReviewsElSubject,
      },
      cache: false,
      dataType: 'html',
      success: function (data) {
        Fancybox.close()
        success.classList.add('success--visible')
        if (success.classList.contains('success--visible')) {
          setTimeout(() => {
            success.classList.remove('success--visible')
          }, 1500)
        }
      },
    })
  }

  document.querySelectorAll('.form-input-name').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value
      const regex = /^[a-zA-Zа-яА-Я]+$/

      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Zа-яА-Я]+/g, '')
      }
      if (event.target.value.length < 2 || event.target.value.length > 30) {
        input.classList.add('input-invalid')
      } else {
        input.classList.remove('input-invalid')
      }
    })
  })

  document.querySelectorAll('.form-input-email').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value
      if (!emailRegex.test(inputValue)) {
        input.classList.add('input-invalid')
      } else {
        input.classList.remove('input-invalid')
      }
    })
  })

  document.querySelectorAll('.form-input-phone').forEach((input) => {
    input.addEventListener('input', () => {
      if (input.value.length < 18) {
        input.classList.add('input-invalid')
      } else {
        input.classList.remove('input-invalid')
      }
    })
  })

  formWhereEl?.addEventListener('submit', submitWhereForm)

  formPartnersEl?.addEventListener('submit', submitPartnersForm)

  modalPartnersEl?.addEventListener('submit', submitModalPartnersForm)

  modalReviewsEl?.addEventListener('submit', submitModalReviewsForm)
})
