

function userdata(){
    
    return new Promise( (resolve, reject) => {
        // setTimeout( () => {
            const data = true
            
            if(data)
                resolve("Data is visible")
            else
                reject("Data not available")    
        // },4000)
    })
    
    
}


userdata()
.then( (sucess) => console.log(sucess))
.catch( (error) => console.log(error))
