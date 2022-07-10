
export default async function sendRequestGet(url, method = 'GET', payload = null) {
    const options = { method }
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(payload)
    }
    
    const res = await fetch(url, options)
    // console.log(options)
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json()
    throw new Error('Bad Request')
}

