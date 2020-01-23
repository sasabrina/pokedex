import React from 'react'

const Navigation = ({clssnm, children}) => {
    return (
        <nav className={clssnm}>
            {children}
        </nav>
    )
}

export default Navigation