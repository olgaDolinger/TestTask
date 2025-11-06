import { useState } from "react"

type Options = {
    id: string | number
    label: string
}

interface DropDownProps {
    options: Options[]
    onSelect: (option: Options) => void
}

export const DropDown = ({ options, onSelect }: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button aria-haspopup="menu" onClick={() => setIsOpen(!isOpen)}>Select an option</button>
            {isOpen && (
                <ul
                    role="menu"
                    data-popover="menu"
                    data-popover-placement="bottom"
                    className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
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
        </>
    )

}