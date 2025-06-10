import { fetchRenderComments } from './fetchRenderComments.js'

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

    button.disabled = true
    button.textContent = "Отправка комментария..."

    fetch('https://wedev-api.sky.pro/api/v1/umipunkin/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
    }).then(() => {
        return fetchRenderComments()
            .then(() => {

                    button.disabled = false
                    button.textContent = "Написать"
            })
    })
})
