function setusername(username){
    this.username = username;
    console.log("Function is called")
}

// function createUser(username, email, password){
//     setusername(username) // this case function is only called the reference in not hold in this case because the after calling the context of that function is removed

//     this.password = password
//     this.email = email
// }

function createUser(username, email, password){
    setusername.call(this, username) // to hold the reference we use the call keyword

    this.password = password
    this.email = email
}

const user = new createUser("Saptarshi", "saptarshi@gmail.com", "12345")
console.log(user)