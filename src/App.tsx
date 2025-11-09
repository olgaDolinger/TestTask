import  { JSX } from 'react'
import { AppProvider} from './contexts/appContext'
import { Tasks } from './pages/tasks/Tasks'

export default function App(): JSX.Element {
    return (
        <AppProvider>
            <Tasks />
        </AppProvider>
    )
}

