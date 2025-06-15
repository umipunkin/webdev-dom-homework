import { setCommentsData } from "./commentsData.js";
import { renderComments } from "./renderComments.js";

export const fetchRenderComments = () => {
    

    return fetch('https://wedev-api.sky.pro/api/v1/umipunkin/comments').then(response => response.json()).then(data => {


        
    document.getElementById('loader').style.display = 'none';
        
        
        setCommentsData(data.comments)
        renderComments();

    
    })
}