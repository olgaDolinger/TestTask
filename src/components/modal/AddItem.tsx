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
            <>
                <input type="text" placeholder="Task Title" onChange={(e) => setTitle(e.target.value)} />
                <DropDown options={categoryList.map((category) => ({ id: category.id, label: category.name }))}
                    onSelect={(option) => setCategory(option.label)} />
            </>
        </BaseModal>
    )
}