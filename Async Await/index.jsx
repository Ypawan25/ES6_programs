

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function joke(){
    let respone =   await fetch(apiUrl)
    let data = await respone.json()
    console.log(data)
}


joke()