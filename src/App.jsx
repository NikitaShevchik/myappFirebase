import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/user/userSlice";

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const userS = useSelector(state => state.user)

    const auth = getAuth();

    function signUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                console.log(userS)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return <div>
        <input type="email" placeholder="email" value={email} onChange={event => setEmail(event.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={event => setPassword(event.target.value)} />
        <button onClick={() => signUp()}>
            Sign up
        </button>
    </div>
}

export default App;