import React from 'react'
import './containers.scss'

const Navigation = ({clssnm, children}) => {
    return (
        <nav className={clssnm}>
            {children}
        </nav>
    )
}

export default Navigation