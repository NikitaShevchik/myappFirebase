import React from 'react';
import Logo from '../../UI/Logo/Logo';
import ProfileInfo from '../../UI/ProfileInfo/ProfileInfo';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <ProfileInfo />
        </div>
    )
}

export default Header;