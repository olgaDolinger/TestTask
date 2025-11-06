import { TaskListItem } from "./taskListItem"
import { TaskListItemType } from "./types"

type TasksListProps = {
    tasks: TaskListItemType[]
}

export const TaskList = ({ tasks }: TasksListProps) => {
    const hasTasks = tasks.length > 0
    return (
        <table className="w-full text-left table-auto min-w-max color-scheme-light">
            <thead>
                <tr>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Title</th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Category</th>
                    <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Completed</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {hasTasks && tasks.map((task: TaskListItemType) => (
                    <TaskListItem key={task.id} task={task} />
                ))}
                {!hasTasks && <>No tasks added</>}
            </tbody>
        </table>
    )
}