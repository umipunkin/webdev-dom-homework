import { fetchComments } from './api.js'
import { setCommentsData } from './commentsData.js'
import { renderComments } from './renderComments.js'

export const fetchRenderComments = () => {
    return fetchComments()
        .then((data) => {
            setCommentsData(data.comments)
            renderComments()
        })
        .catch((error) => {
            alert(error.message)
        })
        .finally(() => {
            document.getElementById('loader').style.display = 'none'
        })
}
