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
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => setIsAddTaskOpen(true)}>Add Task</button>
            <TaskList tasks={tasks} />
            {isAddTaskOpen && <AddItem onClose={() => setIsAddTaskOpen(false)} onConfirm={addItem} />}
        </>
    )
}

