import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './SignUpButton.module.scss'

const SignUpButton = () => {
    const navigate = useNavigate()
    return (
        <button className={styles.button} onClick={() => navigate('/signup')}>Sign Up</button>
    )
}

export default SignUpButton