import { PropsWithChildren } from 'react'
import { Dialog } from '@headlessui/react'

type BaseModalProps = PropsWithChildren<{
    title: string
    confirmText?: string
    onClose?: () => void
    onConfirm?: () => void
}>

export const BaseModal = ({ children, title, onClose, onConfirm, confirmText = 'Ok' }: BaseModalProps) => {
    return (
        <Dialog open={true} onClose={onClose} className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-gray-500/75" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4 h-screen">
                <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-6 pt-0 overflow-hidden">
                    <div className="relative">
                        <div className="absolute -left-6 -right-6 top-0">
                            <div className="bg-gray-100 dark:bg-gray-700 w-full py-3 text-center rounded-t-lg">
                                <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
                            </div>
                        </div>

                        <button className="absolute top-2 right-2 text-sm text-gray-500" onClick={onClose} aria-label="Close">✕</button>
                    </div>

                    <div className="mt-20 flex flex-col items-center justify-center gap-4">{children}</div>

                    <div className="mt-6 flex justify-center gap-2">
                        <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={onConfirm}>{confirmText}</button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}