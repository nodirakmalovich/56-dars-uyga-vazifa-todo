import { Button, Checkbox, Input } from "antd";
import React, { useState, useRef } from "react";
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { SaveFilled, CloseSquareFilled } from '@ant-design/icons';
import '../table/table.scss'


export default function Table({ todos, setTodos, filteredTodos }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const [editTodoValue, setEditTodoValue] = useState(
        editTodo ? editTodo.task : ""
    );


    const taskRef = useRef();

    const handleDelete = (todoId) => {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
    }


    const handleEdit = (todo) => {
        setIsModalOpen(true)
        setEditTodo(todo);
        setEditTodoValue(todo.task);
    }

    const saveHandleEdit = () => {
        const cloneTodos = [...todos]
        const selectedIndex = todos.findIndex((todo) => todo.id === editTodo.id);
        cloneTodos[selectedIndex].task = editTodoValue

        setTodos(cloneTodos)
        setIsModalOpen(false)
    }

    const handleCheckboxChange = (todoId) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
    }

    return (
        <div className="container">
            {isModalOpen && <div className="backdrop" onClick={() => setIsModalOpen(false)} />}

            <div
                className="add_modal"
                style={{ display: isModalOpen ? 'flex' : 'none' }}
            >
                <Input
                    ref={taskRef}
                    type="text"
                    className="navbar_row_input add_modal_input"
                    placeholder="Task"
                    size='large'
                    value={editTodoValue}
                    onChange={(e) => {
                        setEditTodoValue(e.target.value);
                    }}
                />
                <div className="flex justify-end gap-3 w-full edit_modal">

                    <Button
                        className='add_btn'
                        variant='outlined'
                        onClick={() => setIsModalOpen(false)}
                        type="primary" size={"large"}
                        icon={<CloseSquareFilled />}

                    />
                    <Button
                        className='add_btn'
                        variant='outlined'
                        success
                        onClick={saveHandleEdit}
                        type="primary" size={"large"}
                        icon={<SaveFilled />}
                    />
                </div>
            </div>

            <table className="my-10 table-auto border-collapse border w-full">
                <thead>
                    <tr className="bg-slate-500">
                        <th className="p-2 border ">Check</th>
                        <th className="p-2 border ">Tasks</th>
                        <th className="p-2 border ">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(filteredTodos || todos).map((todo, index) => {
                        return (

                            <tr key={index} className={`border ${todo.completed ? 'completed-task' : ''}`}>
                                <td className="p-2 border text-center">
                                    <Checkbox
                                        checked={todo.completed}
                                        onChange={() => handleCheckboxChange(todo.id)}
                                    />
                                </td>
                                <td className="p-2 border ">{todo.task}</td>
                                <td className="p-2 flex gap-3 justify-center table_actions">
                                    <Button type="primary" size="default" icon={<EditFilled />} onClick={() => { handleEdit(todo) }} />
                                    <Button type="primary" size="default" danger icon={<DeleteFilled />} onClick={() => handleDelete(todo.id)} />
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}