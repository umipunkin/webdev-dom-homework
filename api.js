const apiLink = 'https://wedev-api.sky.pro/api/v2/umipunkin/comments'
const authUrl = 'https://wedev-api.sky.pro/api/user/'

export let token = ''

export const signUp = (user) => {
    return fetch(authUrl, {
        method: 'POST',
        body: JSON.stringify(user),
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            }

            return res.text().then((text) => {
                throw new Error(JSON.parse(text).error)
            })
        })
        .then((user) => {
            token = user.user.token
        })
        .catch((error) => alert(error))
}

export const login = (login, password) => {
    return fetch(authUrl + 'login', {
        method: 'POST',
        body: JSON.stringify({ login, password }),
    })
        .then((res) => {
            if (!res.ok) {
                return res.text().then((e) => {
                    alert(JSON.parse(e).error)
                })
            }
            return res.json()
        })
        .then((data) => {
            token = data.user.token
        })
        .catch((error) => {
            throw new Error(error)
        })
}

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
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((res) => {
        if (res.ok) {
            return res.json()
        }

        if (res.status === 500) {
            throw new Error('Ошибка сервера')
        }

        if (res.status === 400) {
            return res.text().then((text) => {
                throw new Error(JSON.parse(text).error ?? 'Произошла ошибка')
            })
            // throw new Error('Неверный запрос')
        }
    })
}

export const toggleLike = (id) => {
    console.log(id)

    return fetch(`${apiLink}/${id}/toggle-like`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
        if (!res.ok) {
            return res.text().then((error) => {
                throw new Error(JSON.parse(error).text || 'Ошибка')
            })
        }

        return res.json()
    })
}
