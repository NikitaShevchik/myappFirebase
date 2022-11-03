import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { setUser } from '../../redux/user/userSlice';
import styles from './Login.module.scss'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = getAuth();

    function login() {
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(({ user }) => {
        //         dispatch(setUser({
        //             email: user.email,
        //             id: user.uid,
        //             token: user.accessToken
        //         }))
        //     }).then(() => navigate('/'))
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         alert(errorMessage)
        //     });
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
            }).then(() => navigate('/'))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <div className={styles.login}>
            <div className={styles.login__body}>
                <div className={styles.login__content}>
                    <div className={styles.login__form}>
                        <div className={styles.login__title}>
                            Log in
                        </div>
                        <div className={styles.login__inputs}>
                            <input className={styles.login__input} type="email" placeholder="Email..." value={email} onChange={event => setEmail(event.target.value)} />
                            <input className={styles.login__input} type="password" placeholder="Password..." value={password} onChange={event => setPassword(event.target.value)} />
                        </div>
                        <div className={styles.login__buttons}>
                            <button onClick={() => login()} className={styles.login__button}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.box}>
            </div>
        </div>
    )
}

export default Login;