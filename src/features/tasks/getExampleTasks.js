export const getExampleTasks = async () => {

    const response = await fetch("https://raw.githubusercontent.com/PaweLeszczynsky/to-do-list-react/main/public/exampleTasks.json");
    
    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};