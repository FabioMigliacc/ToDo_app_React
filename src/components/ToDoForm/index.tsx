
import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';


export const ToDoForm = (props: any) => {
    const [input, SetInput] = useState(props.edit ? props.edit.value : '')


    const handleSubmit = (e: any) => {
        e.preventDefault();

        props.onSubmit({
            id: uuid(),
            text: input
        })

        SetInput('');

    }
    const handleChange = (e: any) => {
        SetInput(e.target.value)
    }
    return (

        <form className='toDo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input type='text' placeholder='Udate your item' value={input}
                        name='text' className='toDo-input edit'
                        onChange={handleChange} />
                    <button className='toDo-button edit'> Update </button>
                </>
            ) : (
                <> 
                <input type='text' placeholder='Add a to do' value={input} 
                name='text' className='toDo-input' onChange={handleChange} />
                    <button className='toDo-button'> Add something to do </button>
                </>
            )}

        </form>
    )
}
