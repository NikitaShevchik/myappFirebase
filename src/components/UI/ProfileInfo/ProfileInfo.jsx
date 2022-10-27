import React from 'react'
import { useAuth } from '../../../hooks/use-auth'
import LogInButton from '../LogInButton/LogInButton'
import LogOutButton from '../LogOutButton/LogOutButton'
import SignUpButton from '../SignUpButton/SignUpButton'

const ProfileInfo = () => {
    const { isAuth, email } = useAuth()
    return (
        <div>
            {isAuth ?
                <div>
                    {email}
                    <LogOutButton />
                </div>
                :
                <div>
                    <LogInButton />
                    <SignUpButton />
                </div>
            }
        </div>
    )
}

export default ProfileInfo