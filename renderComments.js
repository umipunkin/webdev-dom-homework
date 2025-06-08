import { commentsData } from './commentsData.js'
import { toggleLike, setCurrentComment } from './initListeners.js'
import {} from './replaceAll.js'

export const renderComments = () => {
    const commentsList = document.getElementById('listComments')
    commentsList.innerHTML = ''

    commentsData.forEach((comment) => {
        const commentElement = document.createElement('li')
        commentElement.className = 'comment'
        commentElement.dataset.id = comment.id
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
    <button class="like-button ${
        comment.isLiked ? 'active-like' : ''
    }"></button>
  </div>
</div>
`

        commentsList.appendChild(commentElement)
    })

    document.querySelectorAll('.like-button').forEach((button) => {
        button.addEventListener('click', function (event) {
            event.stopPropagation()
            const commentId = parseInt(this.closest('.comment').dataset.id)
            toggleLike(commentId)
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
