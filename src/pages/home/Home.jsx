import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'
import styles from './Home.module.scss'

const Home = () => {
    const navigate = useNavigate()
    const auth = useAuth()
    return auth.isAuth ?
        (<div className={styles.home}>
            <div className={styles.home__content}>
                Home
            </div>
        </div>)
        :
        <Navigate to="/login" />

}

export default Home