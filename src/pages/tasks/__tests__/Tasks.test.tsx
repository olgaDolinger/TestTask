import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tasks } from '../Tasks';
import { AppProvider } from '../../../contexts/appContext';

const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
            store[key] = value.toString();
        },
        clear: () => {
            store = {};
        },
        removeItem: (key: string) => {
            delete store[key];
        }
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});

const renderWithContext = (component: React.ReactElement) => {
    return render(
        <AppProvider>
            {component}
        </AppProvider>
    );
};

describe('Tasks Component', () => {
    beforeEach(() => {
        localStorageMock.clear();
    });

    test('adds a new item to the table when form is submitted', async () => {
        renderWithContext(<Tasks />);

        const addButton = screen.getByText('Add Task');
        fireEvent.click(addButton);

        await waitFor(() => {
            expect(screen.getByText('Add New Task')).toBeInTheDocument();
        });

        const titleInput = screen.getByPlaceholderText('Task Title');
        fireEvent.change(titleInput, { target: { value: 'New Test Task' } });

        const confirmButton = screen.getByText('Ok');
        fireEvent.click(confirmButton);

        await waitFor(() => {
            expect(screen.getByText('New Test Task')).toBeInTheDocument();
        });

        const taskCell = screen.getByText('New Test Task');
        expect(taskCell).toBeInTheDocument();
    });

    test('displays "No tasks added yet" when there are no tasks', () => {
        renderWithContext(<Tasks />);
        
        expect(screen.getByText('No tasks added yet')).toBeInTheDocument();
    });
});