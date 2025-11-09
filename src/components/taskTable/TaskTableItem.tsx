import { TaskTableItemType } from "./types"


export const TaskTableItem = ({ task, onToggle }: { task: TaskTableItemType, onToggle: (id: string) => void }) => {
    const { title, category, isCompleted } = task
    return (
        <tr className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 text-slate-800">{title}</td>
            <td className="px-6 py-4 text-slate-600">{category}</td>
            <td className="px-6 py-4">
                <input 
                    type="checkbox" 
                    checked={isCompleted} 
                    readOnly
                    onChange={() => onToggle(task.id)} 
                    className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
            </td>
        </tr>
    )
}