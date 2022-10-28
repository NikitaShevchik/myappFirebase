import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import { setUser } from '../../redux/user/userSlice';

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
        <div>
            < div >
                <input type="email" placeholder="email" value={email} onChange={event => setEmail(event.target.value)} />
                <input type="password" placeholder="password" value={password} onChange={event => setPassword(event.target.value)} />
                <button onClick={() => signUp('sign')}>
                    Register
                </button>
            </div >
        </div>
    )
}

export default SignUp;