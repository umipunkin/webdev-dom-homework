import { login, signUp } from './api.js'
import { fetchRenderComments } from './fetchRenderComments.js'


export const renderLoginForm = () => {
    const containerElement = document.querySelector('.container')
    containerElement.innerHTML = ''

    const loginInput = document.createElement('input')
    loginInput.className = 'add-form-name'
    loginInput.setAttribute('placeholder', 'Введите логин')
    loginInput.id = 'loginInput'
    loginInput.required = true

    const passwordElement = document.createElement('input')
    passwordElement.setAttribute('type', 'password')
    passwordElement.setAttribute('placeholder', 'Введите пароль')
    passwordElement.className = 'add-form-name'
    passwordElement.id = 'passwordInput'
    passwordElement.required = true

    const submitLoginButton = document.createElement('button')
    submitLoginButton.type = 'button'
    submitLoginButton.id = 'submitLogin'
    submitLoginButton.textContent = 'Войти'
    submitLoginButton.className = 'add-form-button'

    const signUpButton = document.createElement('a')
    signUpButton.href = ''
    signUpButton.textContent = 'Зарегистрироваться'

    submitLoginButton.addEventListener('click', () => {
        if (!loginInput.value) {
            alert('Введите логин')
            return
        }
        if (!passwordElement.value) {
            alert('Введите пароль')
            return
        }

        login(loginInput.value, passwordElement.value)
            .then(() => {
                fetchRenderComments()
            })
            .catch((e) => {
                console.log('form render', e)
            })
    })

    signUpButton.addEventListener('click', (e) => {
        e.preventDefault()
        renderSignUpForm()
    })

    const formElement = document.createElement('form')
    formElement.className = 'add-form login-form'

    formElement.appendChild(loginInput)
    formElement.appendChild(passwordElement)

    const formRowElement = document.createElement('div')
    formRowElement.className = 'add-form-row'
    formRowElement.appendChild(submitLoginButton)
    formRowElement.appendChild(signUpButton)

    formElement.append(formRowElement)

    containerElement.appendChild(formElement)
}

export const renderSignUpForm = () => {
    const containerElement = document.querySelector('.container')
    containerElement.innerHTML = ''

    const loginInput = document.createElement('input')
    loginInput.className = 'add-form-name'
    loginInput.setAttribute('placeholder', 'Введите логин')
    loginInput.id = 'loginInput'

    const nameInput = document.createElement('input')
    nameInput.className = 'add-form-name'
    nameInput.setAttribute('placeholder', 'Введите имя')
    nameInput.id = 'loginInput'
    nameInput.required = true

    const passwordElement = document.createElement('input')
    passwordElement.setAttribute('type', 'password')
    passwordElement.setAttribute('placeholder', 'Введите пароль')
    passwordElement.className = 'add-form-name'
    passwordElement.id = 'passwordInput'
    passwordElement.required = true

    const submitLoginButton = document.createElement('button')
    submitLoginButton.type = 'button'
    submitLoginButton.id = 'submitLogin'
    submitLoginButton.textContent = 'Зарегистрирваться'
    submitLoginButton.className = 'add-form-button'

    const loginButton = document.createElement('a')
    loginButton.href = ''
    loginButton.textContent = 'Войти'

    loginButton.addEventListener('click', (e) => {
        e.preventDefault()
        renderLoginForm()
    })

    submitLoginButton.addEventListener('click', () => {
        if (!loginInput.value) {
            alert('Введите логин')
            return
        }
        if (!nameInput.value) {
            alert('Введите имя')
            return
        }
        if (!passwordElement.value) {
            alert('Введите пароль')
            return
        }

        signUp({
            login: loginInput.value,
            name: nameInput.value,
            password: passwordElement.value,
        })
            .then(() => {
                fetchRenderComments()
            })
            .catch((e) => {
                console.log('form render', e)
            })
    })

    const formElement = document.createElement('form')
    formElement.className = 'add-form login-form'

    formElement.appendChild(loginInput)
    formElement.appendChild(nameInput)
    formElement.appendChild(passwordElement)

    const formRowElement = document.createElement('div')
    formRowElement.className = 'add-form-row'
    formRowElement.appendChild(submitLoginButton)
    formRowElement.appendChild(loginButton)

    formElement.append(formRowElement)

    containerElement.appendChild(formElement)
}
