import React from 'react'

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='Todo Giriniz...' />
            <button className='todo-create-btn'>Olustur</button>
        </div>
    )
}

export default TodoCreate