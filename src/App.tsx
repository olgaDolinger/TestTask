import React, { JSX, useState } from 'react'
import { TaskList } from './components/taskList/taskList'
import { useGetFromLocalStorage } from './services/useLocalStorage'
import { AddItem } from './components/modal/AddItem'

export default function App(): JSX.Element {
    const [isAddTaskOpen, setIsAddTaskOpen] = useState(false)
    const tasks = useGetFromLocalStorage('tasks', [])

    const addItem = () => {
        setIsAddTaskOpen(false)
    }

    return (
        <>
            <button onClick={() => setIsAddTaskOpen(true)}>Add Task</button>
            <TaskList tasks={tasks} />
            {isAddTaskOpen && <AddItem onClose={() => setIsAddTaskOpen(false)} onConfirm={addItem} />}
        </>
    )
}

