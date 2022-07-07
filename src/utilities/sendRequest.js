
export default async function sendRequestPut(url, method = 'PUT', payload = null) {
    const options = { method }
        options.headers = { 'Content-Type': 'application/json', "Accept": "application/json" }
        options.body = JSON.stringify(payload)
        console.log("Options.body", options)
    
    fetch(url, options).then(response => {
        console.log("Initial response: ", response);
        return response.json();
    }).then(data => {
        console.log("The data", data);
      }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
    //console.log("The url", url)
    //console.log("The options", options.body)
    //console.log("Res", res)
    // res.ok will be false if the status code set to 4xx in the controller action
    //if (res.ok) {
    //    console.log("This is ok")
     //   return res.json()
    //}else{
       // console.log("This is bad")
       // console.log("This is res ", res)
        //console.log("Pending promise", res.json())
//throw new Error('Bad Request')
    //}
    
}

