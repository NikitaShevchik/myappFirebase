import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { setUser } from '../../redux/user/userSlice';
import styles from './SignUp.module.scss'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = getAuth();

    function signUp() {
        createUserWithEmailAndPassword(auth, email, password)
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
        <div className={styles.signup}>
            <div className={styles.signup__body}>
                <div className={styles.signup__content}>
                    <div className={styles.signup__form}>
                        <div className={styles.signup__title}>
                            Sign up
                        </div>
                        <div className={styles.signup__inputs}>
                            <input className={styles.signup__input} type="email" placeholder="Email..." value={email} onChange={event => setEmail(event.target.value)} />
                            <input className={styles.signup__input_password} type="password" placeholder="Password..." value={password} onChange={event => setPassword(event.target.value)} />
                            <div className={styles.signup__login}>
                                <p onClick={() => navigate('/login')}>Already have an account?</p>
                            </div>
                        </div>
                        <div className={styles.signup__buttons}>
                            <button onClick={() => signUp('sign')} className={styles.signup__button}>
                                Register
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

export default SignUp;