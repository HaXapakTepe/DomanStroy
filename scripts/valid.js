window.addEventListener('DOMContentLoaded', () => {
  const token = '6379225826:AAEnSyjeL0HHnhk0QrFang7OBJrHwpOa0iM'
  const chatId = '-1002094903710'
  const urlApi = `https://api.telegram.org/bot${token}/sendMessage`

  // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  const success = document.querySelector('.success')
  const formEl = document.querySelector('#form')
  const formNameInputEl = formEl?.querySelector('#form-name-input')
  const formTelInputEl = formEl?.querySelector('#form-tel-input')
  const formCheckboxEl = formEl?.querySelector('#form-input-checkbox')

  const checkInputValidity = (input) => input.value

  const submitForm = async (e) => {
    e.preventDefault()
    ;[formNameInputEl, formTelInputEl].forEach((input) => {
      if (!checkInputValidity(input)) {
        input.classList.add('input--invalid')
        return
      } else {
        input.classList.remove('input--invalid')
      }
    })

    if (formNameInputEl.value.length < 2 || formNameInputEl.value.length > 30) {
      formNameInputEl.parentNode.classList.add('input--invalid')
      return
    } else {
      formNameInputEl.parentNode.classList.remove('input--invalid')
    }

    if (formTelInputEl.value.length < 16) {
      formTelInputEl.parentNode.classList.add('input--invalid')
      return
    } else {
      formTelInputEl.parentNode.classList.remove('input--invalid')
    }

    if (!formCheckboxEl.checked) {
      formCheckboxEl.parentNode.classList.add('input--invalid')
      return
    } else {
      formCheckboxEl.parentNode.classList.remove('input--invalid')
    }

    let message = `<b>Заявка с сайта:</b>\n`
    message += `<b>Имя:</b> ${e.target.name.value}\n`
    message += `<b>Телефон:</b> ${e.target.phone.value}\n`

    const resp = await axios.post(urlApi, {
      chat_id: chatId,
      parse_mode: 'html',
      text: message,
    })

    if (resp.data.ok) {
      $.ajax({
        url: '/send.php',
        type: 'post',
        data: {
          name: formNameInputEl.value,
          phone: formTelInputEl.value,
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

      formNameInputEl.value = ''
      formTelInputEl.value = ''
      formCheckboxEl.checked = false

      Fancybox.close()
    }
  }

  document.querySelectorAll('.form-input-name').forEach((input) => {
    input.addEventListener('input', (event) => {
      const inputValue = event.target.value
      const regex = /^[a-zA-Zа-яА-Я]+$/

      if (!regex.test(inputValue)) {
        event.target.value = inputValue.replace(/[^a-zA-Zа-яА-Я]+/g, '')
      }
      if (event.target.value.length < 2 || event.target.value.length > 30) {
        input.parentNode.classList.add('input--invalid')
      } else {
        input.parentNode.classList.remove('input--invalid')
      }
    })
  })

  document.querySelectorAll('.form-input-tel').forEach((input) => {
    input.addEventListener('input', () => {
      if (input.value.length < 16) {
        input.parentNode.classList.add('input--invalid')
      } else {
        input.parentNode.classList.remove('input--invalid')
      }
    })
  })

  formEl?.addEventListener('submit', submitForm)
})
