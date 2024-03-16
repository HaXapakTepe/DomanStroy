window.addEventListener('DOMContentLoaded', () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const registrationFormEl = document.querySelector('#form-registration')
  const intranceFormEl = document.querySelector('#form-intrance')
  const footerFormEl = document.querySelector('#footer-form')
  const registrationNameInputEl = registrationFormEl?.querySelector('#form-name-input')
  const registrationSurnameInputEl = registrationFormEl?.querySelector('#form-surname-input')
  const registrationEmailInputEl = registrationFormEl?.querySelector('#form-email-input')
  const registrationTelInputEl = registrationFormEl?.querySelector('#form-tel-input')
  const registrationPasswordInputEl = registrationFormEl?.querySelector('#form-password-input')
  const registrationPasswordRepeatInputEl = registrationFormEl?.querySelector('#form-password-input-repeat')
  const intranceEmailInputEl = intranceFormEl?.querySelector('#form-email-input')
  const intrancePasswordInputEl = intranceFormEl?.querySelector('#form-password-input')
  const intranceErrorEl = intranceFormEl?.querySelector('.form__error')

  const checkInputValidity = (input) => input.value

  const submitRegistrationForm = (e) => {
    e.preventDefault()
    ;[
      registrationNameInputEl,
      registrationSurnameInputEl,
      registrationEmailInputEl,
      registrationTelInputEl,
      registrationPasswordInputEl,
      registrationPasswordRepeatInputEl,
    ].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        intranceErrorEl?.classList.add('form__error--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
        intranceErrorEl?.classList.remove('form__error--invalid')
      }
    })

    if (registrationNameInputEl.value.length < 2 || registrationNameInputEl.value.length > 30) {
      registrationNameInputEl.classList.add('input--invalid')
      return
    } else {
      registrationNameInputEl.classList.remove('input--invalid')
    }

    if (registrationSurnameInputEl.value.length < 2 || registrationSurnameInputEl.value.length > 30) {
      registrationSurnameInputEl.classList.add('input--invalid')
      return
    } else {
      registrationSurnameInputEl.classList.remove('input--invalid')
    }

    if (!emailRegex.test(registrationEmailInputEl.value)) {
      registrationEmailInputEl.classList.add('input--invalid')
      return
    } else {
      registrationEmailInputEl.classList.remove('input--invalid')
    }

    if (registrationTelInputEl.value.length < 16) {
      registrationTelInputEl.classList.add('input--invalid')
      return
    } else {
      registrationTelInputEl.classList.remove('input--invalid')
    }

    if (registrationPasswordInputEl.value.length < 6) {
      registrationPasswordInputEl.classList.add('input--invalid')
      return
    } else {
      registrationPasswordInputEl.classList.remove('input--invalid')
    }

    if (registrationPasswordRepeatInputEl.value != registrationPasswordInputEl.value) {
      registrationPasswordRepeatInputEl.classList.add('input--invalid')
      return
    } else {
      registrationPasswordRepeatInputEl.classList.remove('input--invalid')
    }

    registrationFormEl.submit()
  }

  const submitIntranceForm = (e) => {
    e.preventDefault()
    ;[intrancePasswordInputEl, intranceEmailInputEl, intranceErrorEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        intranceErrorEl.classList.add('form__error--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
        intranceErrorEl.classList.remove('form__error--invalid')
      }
    })

    if (intrancePasswordInputEl.value.length < 6) {
      intrancePasswordInputEl.classList.add('input--invalid')
      return
    } else {
      intrancePasswordInputEl.classList.remove('input--invalid')
    }

    if (!emailRegex.test(intranceEmailInputEl.value)) {
      intranceEmailInputEl.classList.add('input--invalid')
      return
    } else {
      intranceEmailInputEl.classList.remove('input--invalid')
    }

    intranceFormEl.submit()
  }

  const submitFooterForm = (e) => {
    e.preventDefault()

    const emailInput = e.target.footer_form_email

    if (!checkInputValidity(emailInput)) {
      emailInput.classList.add('input--invalid')
      return
    } else {
      emailInput.classList.remove('input--invalid')
    }

    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add('input--invalid')
      return
    } else {
      emailInput.classList.remove('input--invalid')
    }

    footerFormEl.submit()
  }

  document.querySelectorAll('.form-input-name').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value
      const regex = /^[a-zA-Zа-яА-Я]+$/

      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Zа-яА-Я]+/g, '')
      }
      if (event.target.value.length < 2 || event.target.value.length > 30) {
        input.classList.add('input--invalid')
      } else {
        input.classList.remove('input--invalid')
      }
    })
  })

  document.querySelectorAll('.form-input-textarea').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value
      const regex = /^[a-zA-Zа-яА-Я]+$/

      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Zа-яА-Я]+/g, '')
      }
      if (event.target.value.length < 10) {
        input.classList.add('input--invalid')
      } else {
        input.classList.remove('input--invalid')
      }
    })
  })

  document.querySelectorAll('.form-input-password').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value
      const regex = /^[\da-zA-Z]{6,}$/

      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/^[\da-zA-Z]{6,}$/, '')
        input.classList.add('input--invalid')
      } else {
        input.classList.remove('input--invalid')
      }
    })
  })

  document.querySelectorAll('.form-input-email').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value
      if (!emailRegex.test(inputValue)) {
        input.classList.add('input--invalid')
      } else {
        input.classList.remove('input--invalid')
      }
    })
  })

  document.querySelectorAll('.form-input-tel').forEach((input) => {
    input.addEventListener('input', () => {
      if (input.value.length < 16) {
        console.log(input.value.length)
        input.classList.add('input--invalid')
      } else {
        console.log(input.value.length)
        input.classList.remove('input--invalid')
      }
    })
  })

  registrationFormEl?.addEventListener('submit', submitRegistrationForm)

  intranceFormEl?.addEventListener('submit', submitIntranceForm)

  footerFormEl?.addEventListener('submit', submitFooterForm)
})
