 const apiLink = 'https://wedev-api.sky.pro/api/v1/umipunkin/comments'
 
 
 export const fetchComments = () => fetch(apiLink)


 export const createComment = (comment) => fetch(apiLink, {
    method: 'POST',
    body: JSON.stringify(comment)
 } )
