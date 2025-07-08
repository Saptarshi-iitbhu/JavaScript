class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){ // If you are writing get function then we should write set functions for that element also
        return `${this._password}saptarshi` // We should access the password from set 
    }

    set password(value){
        // this.password = value // If we write this line then the code will throw an error memory stack exceeded.
        // For this reason we should define the set finctionlike this
        this._password = value
    }
}

const user1 = new User("abc@gmail.com", "abcdswehbd")