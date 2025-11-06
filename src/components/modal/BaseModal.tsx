import { PropsWithChildren } from "react"

type BaseModalProps = PropsWithChildren<{
    title: string
    confirmText?: string
    onClose?: () => void
    onConfirm?: () => void
}>

export const BaseModal = ({ children, title, onClose, onConfirm, confirmText = 'Ok' }: BaseModalProps) => {
    return (
        <dialog className="p-4" open>
            <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                <button className="mt-2 text-sm text-gray-500" onClick={onClose}>X</button>
            </div>
            {children}
            <button onClick={onConfirm}>{confirmText}</button>
        </dialog>
    )
}