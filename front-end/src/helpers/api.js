import { BASE_URL } from '../constants'

/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 */
const fetchJSON = (url, options = {}) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return fetch(`${BASE_URL}${url}`, { ...options, headers })
        .then(response => {
            if (response.status !== 200) {
                throw response.json()
            }
            return response.json()
        })
        .then(json => {
            return json
        })
        .catch(error => {

            throw error
        })
}

export { fetchJSON }