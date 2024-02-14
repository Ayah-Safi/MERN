import React, {useState} from "react";
import styles from './Form.module.css';

const Form = (props) =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const createUser = (e) =>{
        e.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        }
        console.log("Welcome!", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    }
    return (
        <>
            <div className={styles.formWrapper}>
            <form onSubmit={createUser}>
                <div className={styles.formField}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
        
                <div className={styles.formField}>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
        
                <div className={styles.formField}>
                <label htmlFor="email">Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
        
                <div className={styles.formField}>
                <label htmlFor="password">Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
        
                <div className={styles.formField}>
                <label htmlFor="confirmPass">Confirm Password:</label>
                <input type="password" onChange={(e) => setConfirmPass(e.target.value)} />
                </div>
        
                <div>
                <button type="submit">Create User</button>
                </div>
            </form>
            </div>

            <div className="textWrapper">
                <h4>Your Form Data</h4>
                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Email: {email} </p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPass} </p>
            </div>
        </>
      );

};

export default Form;