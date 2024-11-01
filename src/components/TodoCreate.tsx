import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice'
import { TodoType } from '../types/Types'

function TodoCreate() {

    const [newTodo, setNewTodo] = useState<string>('')

    const dispatch = useDispatch()
    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert('Todo Giriniz')
            return
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo('')
    }

    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} className='todo-input' type="text" placeholder='Todo Giriniz...' />
            <button onClick={handleCreateTodo} className='todo-create-btn'>Olustur</button>
        </div>
    )
}

export default TodoCreate