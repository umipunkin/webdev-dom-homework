export const replaceAll = (value) => {
    return String(value).trim().replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}
