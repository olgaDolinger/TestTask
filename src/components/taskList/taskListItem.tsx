import { TaskListItemType } from "./types"


export const TaskListItem = ({ task }: { task: TaskListItemType }) => {
    const { title, category, isCompleted } = task
    return (
        <tr>
            <td>{title}</td>
            <td>{category}</td>
            <td><input type="checkbox" checked={isCompleted} readOnly /></td>
        </tr>
    )
}