import { fetchComments } from './api.js';
import { setCommentsData } from './commentsData.js'
import { renderComments } from './renderComments.js'

export const fetchRenderComments = () => {
    return fetchComments()
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('loader').style.display = 'none';

            setCommentsData(data.comments)
            renderComments()
        })

}
