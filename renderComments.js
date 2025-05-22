import { commentsData } from "./comentsData.js"
import {toggleLike, setCurrentComment} from "./initListeners.js"
import {} from "./replaceAll.js"

export const renderComments = () => {
    const commentsList = document.getElementById('listComments')
    commentsList.innerHTML = ''

    commentsData.forEach((comment) => {
        const commentElement = document.createElement('li')
        commentElement.className = 'comment'
        commentElement.dataset.id = comment.id

        commentElement.innerHTML = `
<div class="comment-header">
  <div>${comment.name}</div>
  <div>${comment.date}</div>
</div>
<div class="comment-body">
  <div class="comment-text">${comment.text}</div>
</div>
<div class="comment-footer">
  <div class="likes">
    <span class="likes-counter">${comment.likesCount}</span>
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
            const commentId = parseInt(
                this.closest('.comment').dataset.id,
            )
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