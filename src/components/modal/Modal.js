import React from 'react'
import './Modal.scss'

const Modal = ({ children, isOpen, toggle }) => {
	return (
		<div className={`modal ${!isOpen ? 'close' : ''}`}>
			<button onClick={() => toggle()}>x</button>
			{children}
		</div>
	)
}

export default Modal
