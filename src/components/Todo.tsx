import React from 'react'
import { FaCheck, FaRegEdit } from 'react-icons/fa'
import { IoMdRemoveCircleOutline } from 'react-icons/io'

function Todo() {
    return (
        <div className='todo-block'>
            <div>ben 1 todoyum</div>
            <div className='edit-btn'>
                <IoMdRemoveCircleOutline className='edit-icon' />
                <FaRegEdit className='edit-icon' />
            </div>
        </div>
    )
}

export default Todo