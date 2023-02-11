import { createSlice } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from './tasksLocalStorage';

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        examlpeTasksStatus: null,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
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
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        setExampleTasksStatus: (state, { payload: status }) => {
            state.examlpeTasksStatus = status;
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllTasksDone, fetchExampleTasks, setTasks, setExampleTasksStatus } = tasksSlice.actions;
export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectExampleTasksStatus = state => selectTasksState(state).examlpeTasksStatus;
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}
export default tasksSlice.reducer;
