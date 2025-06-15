import { renderComments } from './renderComments.js'
import { commentsData } from './commentsData.js'
import { fetchRenderComments } from './fetchRenderComments.js'
import { replaceAll } from './replaceAll.js'

export const toggleLike = (commentId) => {
    const comment = commentsData.find((c) => c.id === commentId)
    if (comment) {
        comment.isLiked = !comment.isLiked
        comment.likes += comment.isLiked ? 1 : -1
        renderComments()
    }
}

export const setCurrentComment = (currentId) => {
    const comment = commentsData.find(({ id }) => id === currentId)

    const quoteElement = `"${comment.author.name} \n ${comment.text}"\n\n`
    document.getElementById('input').value = ''
    document.getElementById('textArea').value = quoteElement
}

const sendCommentButton = document.getElementById('sendButton')
const inputElement = document.getElementById('input')
const commentFieldElement = document.getElementById('textArea')

sendCommentButton.addEventListener('click', () => {
    const name = replaceAll(inputElement.value)
    const commentText = replaceAll(commentFieldElement.value)

    if (name === '' || commentText === '') {
        alert('Пожалуйста, заполните все поля!')
        return
    }

    const newComment = {
        name: name,
        text: commentText,
    }

    sendCommentButton.setAttribute('disabled', true)
    sendCommentButton.textContent = 'Отправка комментария...'

    fetch('https://wedev-api.sky.pro/api/v1/umipunkin/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
    })
        .then(() => {
            inputElement.value = ''
            commentFieldElement.value = ''

            return fetchRenderComments().then((res) => {
                console.log(res)
            })
        })
        .finally(() => {
            sendCommentButton.removeAttribute('disabled')
            sendCommentButton.textContent = 'Написать'
        })
})
