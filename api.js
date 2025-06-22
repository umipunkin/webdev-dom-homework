const apiLink = 'https://wedev-api.sky.pro/api/v1/umipunkin/comments'

export const fetchComments = () => {
    return fetch(apiLink).then((res) => {
        if (res.ok) {
            return res.json()
        }

        if (res.status === 500) {
            throw new Error('Ошибка сервера')
        }

        if (res.status === 400) {
            throw new Error('Неверный запрос')
        }
    })
}

export const createComment = (comment) => {
    return fetch(apiLink, {
        method: 'POST',
        body: JSON.stringify(comment),
    }).then((res) => {
        if (res.ok) {
            return res.json()
        }

        if (res.status === 500) {
            throw new Error('Ошибка сервера')
        }

        if (res.status === 400) {
            return res.text().then((text) => {
                throw new Error(JSON.parse(text).error ?? 'Произошла ошабка')
            })
            // throw new Error('Неверный запрос')
        }
    })
}
