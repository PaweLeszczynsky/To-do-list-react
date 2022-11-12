import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            if (state.tasks.some(({ done }) => done)) {
                state.hideDone = !state.hideDone;
            }

        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks.splice(index, 1);
        },
        setAllTasksDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllTasksDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
