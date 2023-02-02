import React, { useState } from 'react';
import { ToDo } from '../ToDo';
import { ToDoForm } from '../ToDoForm';

export const ToDoList: any = () => {
    const [toDos, setToDos] = useState<any[]>([]);
    const addToDo: any = (toDo: { text: string; }) => {
        if (!toDo.text || /^\s*$/.test(toDo.text)) {
            return 
        }
        const newToDos = [toDo, ...toDos];
        setToDos(newToDos);
        console.log(newToDos);
    }

    const removeToDo = (id: any) => {
        const removeArr = [...toDos].filter(toDo => toDo.id !== id);
        setToDos(removeArr);
 }
 const updateToDo = (toDoId:any , newValue:any) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return
    }
    setToDos(prev => prev.map(item => (item.id === toDoId ? newValue : item)))
}
    

    return (
        <>
            <h1> WHAT'S YOUR PLAN FOR TODAY?</h1>
            <ToDoForm onSubmit={addToDo} />
            <ToDo  toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo}/>
        </>
    )
}
