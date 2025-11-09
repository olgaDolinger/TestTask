import { useEffect, useRef, useState } from "react"
import { DropDown, OptionType } from "../../dropdown/DropDown"
import { BaseModal } from "../BaseModal"
import { TaskTableItemType } from "../../taskTable/types"
import { getOptions, handleErrors } from "../utils"
import { v4 as uuidv4 } from 'uuid';
import * as categories from "../../../mocks/categories.json"
import itemSchema from "./schema"
import * as yup from 'yup';
import { useAppContext } from "../../../contexts/appContext"

type AddItemProps = {
    onClose: () => void
    onConfirm: (item: TaskTableItemType) => void
}

export const AddItem = ({ onClose, onConfirm }: AddItemProps) => {
    const categoryList = categories.data
    const { currentCategory, setCurrentCategory } = useAppContext();
    const inputRef =  useRef<HTMLInputElement>(null);
    
    const [title, setTitle] = useState<string>(null)
    const [errors, setErrors] = useState<{ title?: string; category?: string }>({})


    const handleConfirm = () => {
        try{
             itemSchema.validateSync({ title }, { abortEarly: false });
        }catch (error) {
           handleErrors(error as yup.ValidationError, setErrors);
           return
        }

        const newItem: TaskTableItemType = {
            id: uuidv4(),
            title,
            category: currentCategory?.label || '',
            isCompleted: false
        }
        onConfirm(newItem)
    }

    const onCategorySelect = (option: OptionType) => {
        setCurrentCategory(option);
    }
    
    useEffect(() => {
        inputRef.current?.focus();

        if (!currentCategory) {
            setCurrentCategory(getOptions(categoryList)[0]);
        }
    }, []);

    return (
        <BaseModal title="Add New Task" onClose={onClose} onConfirm={handleConfirm}>
            <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-row items-center gap-2 w-full">
                    <label className="whitespace-nowrap">Title:</label>
                    <input 
                    ref={inputRef}
                    className="flex-1 px-2 py-1 border rounded" type="text" placeholder="Task Title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                    <div className="h-6">
                            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                        </div>
                    <DropDown title="Select Category"
                     options={getOptions(categoryList)}
                     onSelect={onCategorySelect} currentValue={currentCategory}/>
            </div>
        </BaseModal>
    )
}