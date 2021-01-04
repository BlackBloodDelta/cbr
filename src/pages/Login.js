import React, {useEffect, useState} from "react";
import { auth } from "../components/Fire";

const Login = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = () => {
        clearErrors();

        auth
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        setEmailError("Unidentified Error");
                        setPasswordError("Unidentified Error");
                        break;
                }
            })
    };

    const handleSignUp = () => {
        clearErrors();

        auth
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                    default:
                        setEmailError("Unidentified Error");
                        setPasswordError("Unidentified Error");
                        break;
                }
            })
    };

    const handleLogOut = () => {
        auth.signOut();
    };

    const authListener = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
                window.location.href = "/admin";
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, [])

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleSignUp}>Sign Up</button>
                            <p>Have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
