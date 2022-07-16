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


const Form = props => {
    // These are the attributes of the items I am making
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confPass, setconfPass] = useState("");
    return (
        <div style={formStyle}>
            <form action="">
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" id="firstName" onChange={e => setfirstName(e.target.value)} />
                </div>
                <h4>First Name: {firstName}</h4>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" id="lastName" onChange={e => setlastName(e.target.value)} />
                </div>
                <h4>Last Name: {lastName}</h4>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" onChange={e => setemail(e.target.value)} />
                </div>
                <h4>Email: {email}</h4>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" onChange={e => setpassword(e.target.value)} />
                </div>
                <h4>Password: {password}</h4>
                <div>
                    <label htmlFor="confPass">Confirm Password: </label>
                    <input type="password" name="confPass" id="confPass" onChange={e => setconfPass(e.target.value)} />
                </div>
                <h4>Confirm Password: {confPass}</h4>
            </form>
            {/* <div>
            </div> */}
        </div>
    );
}

export default Form;