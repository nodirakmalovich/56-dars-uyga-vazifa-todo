import React, { useState } from "react";

function useTodoData() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            task: "Complete Homepage Layout",
            completed: false
        },
        {
            id: 2,
            task: "Fix Responsive Issues",
            completed: false
        },
        {
            id: 3,
            task: "Add Animation",
            completed: true
        },
        {
            id: 4,
            task: "Optimize Images",
            completed: false
        },
        {
            id: 5,
            task: "Update Navigation Menu",
            completed: true
        },
        {
            id: 6,
            task: "Implement Dark Mode",
            completed: false
        },
        {
            id: 7,
            task: "Test Browser Compatibility",
            completed: false
        },
        {
            id: 8,
            task: "Refactor Code",
            completed: true
        },
        {
            id: 9,
            task: "Add Accessibility Features",
            completed: false
        },
        {
            id: 10,
            task: "Deploy to Production",
            completed: true
        }
    ]);

    return { todos, setTodos };
}

export default useTodoData;