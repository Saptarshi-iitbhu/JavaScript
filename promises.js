const promise1 = new Promise(function(resolve, rejec){
    // Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async Task Completed');
        resolve() // unless we write this then and resolve is not connected. resolve is a function
    }, 1000);
}); 

promise1.then(function(){
    console.log("Promise consumed");
}) // it has connectioin with resolve in promise

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
        console.log("Async task resolved")
    })

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username : "Saptarshi783",
            email : "abcd@gmail.com"
        })
    }, 1000)
})

promisethree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username : "Saptarshi783",
                passowrd : "123456"
            })
        } else {
            reject('ERROR : Something went wrong')
        }
    })
})

promiseFour.then(function(user) {
    console.log(user);
    return user.username;
}).then(function(e){
    console.log(e);
}).catch(function(error){
    console.log(error);
}).finally( () => console.log("The promise is either rejected or resolved"))


const promiseFive = new Promise(function(resolvem, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({
                username : "JavaScript",
                passowrd : "123456"
            })
        } else {
            reject('ERROR : JS went wrong')
        }
    })
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(respose); 
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/Saptarshi-iitbhu')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
