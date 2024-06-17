const BASE_URL = 'http://localhost:8080/api'
const LOGIN_URL = `${BASE_URL}/login`

export async function tryLogin(email, password) {
    const rawResponse = await fetch(LOGIN_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    const data = await rawResponse.json()
    console.log(data);

    const token = data.token
    return token
}
