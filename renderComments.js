import { commentsData } from './commentsData.js'
import { setCurrentComment } from './initListeners.js'
import { token, createComment, toggleLike } from './api.js'
import { renderLoginForm } from './renderLoginForm.js'
import { fetchRenderComments } from './fetchRenderComments.js'

export const renderComments = () => {
    if (!commentsData.length) return

    const commentsList = document.createElement('div')
    commentsList.id = 'listComments'
    commentsList.innerHTML = ''
    const containerElement = document.querySelector('.container')
    containerElement.innerHTML = ''

    commentsData.forEach((comment) => {
        const commentElement = document.createElement('li')
        commentElement.className = 'comment'

        const commentDate = new Date(comment.date)
        const date = commentDate.toLocaleDateString('ru-RU')
        const time = commentDate.toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
        })

        commentElement.innerHTML = `
          <div class="comment-header">
            <div>${comment.author.name}</div>
            <div>${date} ${time}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">${comment.text}</div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button data-id="${comment.id}" class="like-button ${
                  comment.isLiked ? 'active-like' : ''
              }"></button>
            </div>
          </div>
        `

        commentsList.appendChild(commentElement)
    })

    containerElement.append(commentsList)

    if (!token) {
        const loginEl = document.createElement('div')
        loginEl.textContent = `Чтобы отправить комментарий, `
        const showLoginFormButton = document.createElement('span')
        showLoginFormButton.id = 'showLoginFormButton'
        showLoginFormButton.className = 'show-login-form'
        showLoginFormButton.textContent = 'войдите'
        showLoginFormButton.addEventListener('click', () => renderLoginForm())

        loginEl.appendChild(showLoginFormButton)
        containerElement.prepend(loginEl)
    } else {
        const addCommentForm = document.createElement('form')
        addCommentForm.className = 'add-form'
        const inputCommentEl = document.createElement('textarea')
        inputCommentEl.required = true
        inputCommentEl.className = 'add-form-text'
        inputCommentEl.placeholder = 'Введите ваш коментарий'
        inputCommentEl.rows = 4

        addCommentForm.appendChild(inputCommentEl)

        const buttonsContainerEl = document.createElement('div')
        buttonsContainerEl.className = 'add-form-row'

        const addCommentButton = document.createElement('button')
        addCommentButton.type = 'submit'
        addCommentButton.textContent = 'Написать'
        addCommentButton.className = ' add-form-button'

        buttonsContainerEl.appendChild(addCommentButton)

        addCommentForm.appendChild(buttonsContainerEl)
        containerElement.appendChild(addCommentForm)
        addCommentForm.addEventListener('submit', (e) => {
            e.preventDefault()

            createComment({ text: inputCommentEl.value }).then(() => {
                fetchRenderComments()
            })
        })
    }

    document.querySelectorAll('.like-button').forEach((button) => {
        button.addEventListener('click', function (event) {
            event.stopPropagation()
            const commentId = button.dataset.id
            toggleLike(commentId).then(() => {
                fetchRenderComments()
            })
        })
    })

    document.querySelectorAll('.comment').forEach((button) => {
        button.addEventListener('click', function (event) {
            event.stopPropagation()
            const commentId = parseInt(button.dataset.id)
            setCurrentComment(commentId)
            console.log(button)
        })
    })
}
