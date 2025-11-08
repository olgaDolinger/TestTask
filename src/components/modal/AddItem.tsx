import { useState } from "react"
import { DropDown } from "../dropdown/DropDown"
import { BaseModal } from "./BaseModal"
import * as categories from "../../mocks/categories.json"

type AddItemProps = {
    onClose: () => void
    onConfirm: () => void
}

export const AddItem = ({ onClose, onConfirm }: AddItemProps) => {
    const categoryList = categories.data

    const [category, setCategory] = useState<string>(null)
    const [title, setTitle] = useState<string>(null)
    return (
        <BaseModal title="Add New Item" onClose={onClose} onConfirm={onConfirm}>
            <div className="flex flex-row items-center gap-4 w-full">
                <div className="flex-1">Title:
                    <input className="ml-2 px-2 py-1 border rounded w-full" type="text" placeholder="Task Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="flex-none">
                    <DropDown options={categoryList.map((category) => ({ id: category.id, label: category.name }))}
                        onSelect={(option) => setCategory(option.label)} />
                </div>
            </div>
        </BaseModal>
    )
}