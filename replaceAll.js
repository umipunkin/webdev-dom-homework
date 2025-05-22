import { renderComments } from "./renderComments.js";
import { commentsData } from "./comentsData.js";



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

    const now = new Date()
    const date = now.toLocaleDateString('ru-RU')
    const time = now.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
    })

      const newComment = {
        id: Date.now(),
        name: name,
        date: `${date} ${time}`,
        text: commentText,
        isLiked: false,
        likesCount: 0,
    }

    commentsData.push(newComment)
    renderComments()

    document.getElementById('input').value = ''
    document.getElementById('textArea').value = ''
})