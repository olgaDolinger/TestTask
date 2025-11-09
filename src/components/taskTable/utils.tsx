import { SortOrder } from "./TaskTable";
import { TaskTableItemType } from "./types";
import {SortIconDown} from "../../assets/sortIconDown"
import {SortIconUp} from "../../assets/sortIconUp"
import {SortIconNoOrder} from "../../assets/sortIconNoOrder"

export const sortItems = (tasks: TaskTableItemType[], order: SortOrder) => {
    return [...tasks].sort((a, b) => {
        if (a.category < b.category) return order === 'asc' ? -1 : 1;
        if (a.category > b.category) return order === 'asc' ? 1 : -1;
        return 0;
    });
}

export const setOrder = (sortOrder: SortOrder): SortOrder => {
     if(sortOrder === null) {
            return 'asc'
        }else if(sortOrder === 'asc') {
            return 'desc'
        }else {
            return 'asc'
        }
}

export const toggleTaskInArray = (tasks: TaskTableItemType[], id: string) => {
    return tasks.map(task => 
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
}

export const getSortIcon = (sortOrder: SortOrder) => {
    if (sortOrder === 'asc') {
        return <SortIconUp />
    } else if (sortOrder === 'desc') {
        return <SortIconDown />
    } else {
        return <SortIconNoOrder />
    }
}