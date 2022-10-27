import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './LogInButton.module.scss'

const LogInButton = () => {
    const navigate = useNavigate()
    return (
        <button className={styles.button} onClick={() => navigate('/login')}>Log in</button>
    )
}

export default LogInButton