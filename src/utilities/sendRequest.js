
export default async function sendRequestPut(url, method = 'PUT', payload = null) {
    const options =  { method }
    if (payload) {
        options.headers = { 'Content-Type': 'application/json', "Accept": "application/json" }
        options.body = JSON.stringify(options)
        
        fetch(`${url}`, 
        {method: 'PUT', 
        headers: { 'Content-Type': 'application/json', "Accept": "application/json" }, 
        body: payload
        })
        .then(function(response) {
            return response.json()
        })
        .then((data) => {
            console.log("data", data)
        })
        .catch((e) => console.log(e))
    }
}

