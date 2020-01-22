import React from 'react'

const Header = ({title, children, clssnm}) => {
    return(
        <header className={clssnm}>
            <h1 className='header_title'>{title}</h1>
            {children}
        </header>
    )
}

export default Header