import { useState } from "react"
import { TaskTableItem } from "./TaskTableItem"
import { TaskTableItemType } from "./types"
import { getSortIcon, setOrder, sortItems, toggleTaskInArray } from "./utils"
import { useAppContext } from "../../contexts/appContext";

export type SortOrder = 'asc' | 'desc' | null;

type TasksListProps = {
    tasks: TaskTableItemType[]
    onListUpdate?: (updatedTasks: TaskTableItemType[]) => void
}

export const TaskTable = ({ tasks, onListUpdate }: TasksListProps) => {
    const { categorySortOrder, setCategorySortOrder } = useAppContext();

    const hasTasks = tasks.length > 0

    const handleToggle = (id: string) => {
        const updatedTasks = toggleTaskInArray(tasks, id)
        onListUpdate?.(updatedTasks)
    }

    const handleSort = () => {
        const newOrder = setOrder(categorySortOrder);
        setCategorySortOrder(newOrder);
        onListUpdate?.(sortItems(tasks, newOrder));
    }

    return (
        <table className="w-full text-left table-auto min-w-max border-2 border-slate-300 rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-slate-100 border-b-2 border-slate-300">
                <tr>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Title</th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase cursor-pointer">Category
                        <span onClick={handleSort}>{getSortIcon(categorySortOrder)}</span>
                    </th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-700 uppercase">Completed</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-300 bg-white">
                {hasTasks && tasks.map((task: TaskTableItemType) => (
                    <TaskTableItem key={task.id} task={task} onToggle={handleToggle} />
                ))}
                {!hasTasks &&  <tr>
                        <td colSpan={3} className="px-6 py-8 text-center text-gray-400 italic">
                            No tasks added yet
                        </td>
                    </tr>}
            </tbody>
        </table>
    )
}