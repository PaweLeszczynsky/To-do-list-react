import { useState, useEffect } from "react";

export const useTasks = () => {

    const tasksStorage = JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(tasksStorage);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            };
            return task;
        }));
    };

    const setAllTasksDone = () => {
        setTasks(tasks => tasks.map(task => (
            {
                ...task, done: true,
            }
        )));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks =>
            [...tasks,
            {
                content: newTaskContent,
                status: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            }
            ]);
    };

    const focusTaskInput = (event) => {
        event.target[0].focus();
    };

    return [tasks, removeTask, toggleTaskDone, setAllTasksDone, addNewTask, focusTaskInput];
};