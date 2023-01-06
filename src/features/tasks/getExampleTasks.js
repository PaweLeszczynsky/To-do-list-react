export const getExampleTasks = async () => {
    const response = await fetch("https://raw.githubusercontent.com/PaweLeszczynsky/to-do-list-react/main/src/features/exampleTasks/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};