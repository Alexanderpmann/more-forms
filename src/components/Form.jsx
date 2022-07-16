import { useState } from 'react';

const formStyle = {
    backgroundColor: "ghostwhite",
    color: "slategray",
    padding: "20px",
    marginLeft: "32%",
    marginRight: "32%",
    fontSize: "20px",
    borderRadius: "10%",
    border: "3px solid darkgrey",
    boxShadow: "2px 20px 20px darkslateblue"
}

const validationAlert = {
    color: "red"
}


const Form = props => {
    // These are the attributes of the items I am making
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confPass, setconfPass] = useState("");
    

const createUser = (e) => {
    // prevent default prevents the page from refreshing
    e.preventDefault();
    const newUser = { firstName, lastName, email, password };
    console.log("Welcome", newUser);
};

// creating a method to validate input
// const TextValid = input => {
//     if(input.length == 0 ) {
//         return false;
//     }
//     return true;
// }
// Name Validation - first and last name must be longer than 2 characters
const NameValid = input => {
    if(input.length < 2 ) {
        return false;
    }
    return true;
}
// Email validation - must be at least 5 characters long
const EmailValid = input => {
    if(input.length < 5 ) {
        return false;
    }
    return true;
}
// Password Validation - must be at least 8 characters long
const PasswordValid = input => {
    if(input.length < 8 ) {
        return false;
    }
    return true;
}
// Confirm password validation -> must match password
const ConfirmPasswordValid = input => {
    if(password != confPass ) {
        return false;
    }
    return true;
}


    return (
        <div style={formStyle}>
            <form onSubmit={ createUser }>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" onChange={e => setfirstName(e.target.value)} />
                    {NameValid(firstName) ? "" : <p style={validationAlert}>First Name must be at least 2 characters!</p>}
                </div>
                <h4>First Name: {firstName}</h4>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="lastName" onChange={e => setlastName(e.target.value)} />
                    {NameValid(lastName) ? "" : <p style={validationAlert}>Last Name must be at least 2 characters!</p>}
                </div>
                <h4>Last Name: {lastName}</h4>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={e => setemail(e.target.value)} />
                    {EmailValid(email) ? "" : <p style={validationAlert}>Email must be at least 5 characters!</p>}
                </div>
                <h4>Email: {email}</h4>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setpassword(e.target.value)} />
                    {PasswordValid(password) ? "" : <p style={validationAlert}>Password must be at least 8 characters!</p>}
                </div>
                <h4>Password: {password}</h4>
                <div>
                    <label htmlFor="confPass">Confirm Password: </label>
                    <input type="password" name="confPass" id="confPass" onChange={e => setconfPass(e.target.value)} />
                    {ConfirmPasswordValid(confPass) ? "" : <p style={validationAlert}>Passwords must match!</p>}
                </div>
                <h4>Confirm Password: {confPass}</h4>
                <input type="submit" value="Create User"/>
            </form>
            {/* <div>
            <h3>Form Data:</h3>
            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {password}</h4>
            <h4>Confirm Password: {confPass}</h4>
            </div> */}
        </div>
    );
}

export default Form;