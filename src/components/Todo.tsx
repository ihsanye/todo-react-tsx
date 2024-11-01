import React from 'react'
import { FaCheck, FaRegEdit } from 'react-icons/fa'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { TodoType } from '../types/Types'
import { useDispatch } from 'react-redux'
import { removeTodoById } from '../redux/todoSlice'

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps
    const dispatch = useDispatch()
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    return (
        <div className='todo-block'>
            <div>{content}</div>
            <div className='edit-btn'>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='edit-icon' />
                <FaRegEdit className='edit-icon' />
            </div>
        </div>
    )
}

export default Todo