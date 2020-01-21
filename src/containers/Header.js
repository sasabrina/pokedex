import React from 'react'

const Header = ({title, children}) => {
    return(
        <header>
            <h1 className='header_title'>{title}</h1>
            {children}
        </header>
    )
}

export default Header