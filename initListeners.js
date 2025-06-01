import { renderComments } from "./renderComments.js";
import { commentsData } from "./commentsData.js";

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
