import React, { useState } from 'react'
import { FaCheck, FaRegEdit } from 'react-icons/fa'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { TodoType } from '../types/Types'
import { useDispatch } from 'react-redux'
import { removeTodoById, updateTodoById } from '../redux/todoSlice'

interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps
    const dispatch = useDispatch()

    const [editable, setEditable] = useState<boolean>(false)
    const [newTodo, setNewTodo] = useState<string>(content)

    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id))
    }

    const handleUpdateTodo = () => {
        const playload = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodoById(playload))
        setEditable(false)
    }

    return (
        <div className='todo-block'>
            {editable ? <input className='edit-input' type='text' value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content}</div>}
            <div className='edit-btn'>
                <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='edit-icon' />
                {editable ? <FaCheck className='edit-icon' onClick={handleUpdateTodo} /> : <FaRegEdit className='edit-icon' onClick={() => setEditable(true)} />
                }

            </div>
        </div>
    )
}

export default Todo