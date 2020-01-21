import React from 'react'
import './Modal.scss'

const Modal = ({ children, isOpen, toggle }) => {
	return (
		<div className={`modal ${!isOpen ? 'close' : ''}`}>
			<button className='modal_btn' onClick={() => toggle()}>x</button>
			{children}
		</div>
	)
}

export default Modal
