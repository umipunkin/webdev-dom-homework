import { setCommentsData } from "./commentsData.js";
import {renderComments} from "./renderComments.js";
renderComments();

fetch('https://wedev-api.sky.pro/api/v1/umipunkin/comments').then(response => response.json()).then(data => {
    setCommentsData(data.comments)
    renderComments();
})

