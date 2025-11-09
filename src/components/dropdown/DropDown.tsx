import { useState } from "react"

export type OptionType = {
    id: string | number
    label: string
}

interface DropDownProps {
    title:string
    options: OptionType[]
    currentValue?: OptionType
    onSelect: (option: OptionType) => void
}

export const DropDown = ({ title, options, onSelect, currentValue }: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex flex-row items-center">
            <label className="mr-2">{title}:</label>
            <div className="flex flex-col items-start">
            <button 
                aria-haspopup="menu" 
                onClick={() => setIsOpen(!isOpen)}
                className="min-w-[100px] text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 border border-slate-200 disabled:border-slate-300 disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed"
            >
                {currentValue?.label || ''}
            </button>
            {isOpen && (
                <ul
                    role="menu"
                    data-popover="menu"
                    data-popover-placement="bottom"
                    className="absolute z-10 min-w-[180px] max-h-[300px] overflow-y-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
                >
                    {options.map(option => (
                        <li
                            role="menuitem"
                            className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                            key={option.id}
                            onClick={() => {
                                console.log('option selected:', option)
                                onSelect(option)
                                setIsOpen(false)
                            }}>
                            {option.label}
                        </li>
                    ))}
                </ul>)}
            </div>
        </div>
    )

}