 export const fetchComments = () => fetch('https://wedev-api.sky.pro/api/v1/umipunkin/comments')

 export const createComment = (comment) => fetch('https://wedev-api.sky.pro/api/v1/umipunkin/comments', {
    method: 'POST',
    body: JSON.stringify(comment)
 } )
