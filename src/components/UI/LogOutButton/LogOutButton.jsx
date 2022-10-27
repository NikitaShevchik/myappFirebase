import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userSlice, { removeUser } from '../../../redux/user/userSlice';
import styles from './LogOutButton.module.scss'

const LogOutButton = () => {
    const dispath = useDispatch();

    return (
        <button className={styles.button} onClick={() => dispath(removeUser())}>Log out</button>
    )
}

export default LogOutButton