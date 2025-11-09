import { useState } from "react";
import { getFromLocalStorage, setInLocalStorage } from "../../services/localStorageService";
import { TaskTableItemType } from "../../components/taskTable/types";
import { useAppContext } from "../../contexts/appContext";
import { TaskTable } from "../../components/taskTable/TaskTable";
import { AddItem } from "../../components/modal/addItem/AddItem";

export const Tasks = () => {
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
    const [tasks, setTasks] = useState<TaskTableItemType[]>(getFromLocalStorage('tasks', []))
    const { setCategorySortOrder } = useAppContext();

    const updateList = (updatedTasks: TaskTableItemType[]) => {
        setTasks(updatedTasks)
        setInLocalStorage('tasks', updatedTasks)
    }

    const addItem = (item: TaskTableItemType) => {
        updateList( [item, ...tasks])
        setCategorySortOrder(null);
        setIsAddDialogOpen(false)
    }

    return (
        <>
          <button type="button"
           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => setIsAddDialogOpen(true)}>
                Add Task
            </button>
            <TaskTable tasks={tasks} onListUpdate={updateList} />
            {isAddDialogOpen && <AddItem onClose={() => setIsAddDialogOpen(false)} onConfirm={addItem} />}
        </>
    )
}