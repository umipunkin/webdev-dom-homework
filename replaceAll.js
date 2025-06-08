import { renderComments } from './renderComments.js'
import { setCommentsData } from './commentsData.js'

document.getElementById('button').addEventListener('click', () => {
    const name = document
        .getElementById('input')
        .value.trim()
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
    const commentText = document
        .getElementById('textArea')
        .value.trim()
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')

    if (name === '' || commentText === '') {
        alert('Пожалуйста, заполните все поля!')
        return
    }


    const newComment = {
        name: name,
        text: commentText,
    }



    document.getElementById('input').value = ''
    document.getElementById('textArea').value = ''

    fetch('https://wedev-api.sky.pro/api/v1/umipunkin/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
    }).then(() => {
        fetch('https://wedev-api.sky.pro/api/v1/umipunkin/comments')
            .then((res) => res.json())
            .then((data) => {
                setCommentsData(data.comments)
                renderComments()
            })
    })
})
