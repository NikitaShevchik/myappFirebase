import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            UserLogin
        </div>
    )
}

export default Logo