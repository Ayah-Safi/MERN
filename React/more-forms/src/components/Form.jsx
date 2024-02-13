import React, { useState } from "react";
import styles from './Form.module.css';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        if (firstName && lastName && email && password === confirmPass) {
            const newUser = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            console.log("Welcome!", newUser);
        }
        // Reset the form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPass("");
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters.");
        } else {
            setFirstNameError("");
        }
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters.");
        } else {
            setLastNameError("");
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters.");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters.");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value);
        if(e.target.value !== password) {
            setConfirmPassError("Passwords must match.");
        } else {
            setConfirmPassError("");
        }
    };

    return (
        <>
            <div className={styles.formWrapper}>
                <form onSubmit={createUser}>
                <div className={styles.formField}>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" onChange={handleFirstName} value={firstName} />
                    {firstNameError && <p className={styles.error}>{firstNameError}</p>}
                </div>
        
                <div className={styles.formField}>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" onChange={handleLastName} value={lastName} />
                    {lastNameError && <p className={styles.error}>{lastNameError}</p>}
                </div>
                <div className={styles.formField}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" onChange={handleEmail} value={email} />
                        {emailError && <p className={styles.error}>{emailError}</p>}
                 </div>
                <div className={styles.formField}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={handlePassword} value={password} />
                    {passwordError && <p className={styles.error}>{passwordError}</p>}
                </div>
    
                <div className={styles.formField}>
                    <label htmlFor="confirmPass">Confirm Password:</label>
                    <input type="password" onChange={handleConfirmPass} value={confirmPass} />
                    {confirmPassError && <p className={styles.error}>{confirmPassError}</p>}
                </div>
    
                <div>
                    <button type="submit" className={styles.button}>Create User</button>
                </div>
            </form>
        </div>

        <div className={styles.textWrapper}>
            <h4>Your Form Data</h4>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPass}</p>
        </div>
    </>
);
};

export default Form;

