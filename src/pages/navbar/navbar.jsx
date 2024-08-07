import React from 'react';
import { Button, Input, } from 'antd';
import { useRef, useState } from 'react';
import "../navbar/navbar.scss"
import { SaveFilled, CloseSquareFilled } from '@ant-design/icons';
const { Search } = Input;


export default function Navbar({ todos, setTodos, setFilteredTodos }) {

    const [isModalOpen, setIsModalOpen] = useState(false);


    const taskRef = useRef();
    const searchRef = useRef()
    const [taskValue, setTaskValue] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault();

        const newTask = {
            id: todos.length + 1,
            task: taskRef.current.input.value,
            completed: false,
        };

        let cloneTodos = [...todos];
        cloneTodos.unshift(newTask);

        setTodos(cloneTodos);

        taskRef.current.input.value = ""
        console.log(taskRef);
        console.log(newTask);

        setIsModalOpen(false);
    };

    const searchTask = () => {
        const filteredTodos = todos.filter(todo => todo.task.toLowerCase().includes(searchRef.current.input.value))
        setFilteredTodos(filteredTodos)
    }

    return (
        <div className="navbar mt-5">
            {isModalOpen && <div className="backdrop" onClick={() => setIsModalOpen(false)} />}
            <div className="container">

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
                    />
                    <div className='navbar_btns flex gap-3 justify-end w-full'>

                        <Button
                            className='add_btn'
                            variant='outlined'
                            children={'Close'}
                            onClick={() => setIsModalOpen(false)}
                            type="primary" size={"large"}
                            icon={<CloseSquareFilled />}
                        />
                        <Button
                            className='add_btn'
                            variant='outlined'
                            children={'Save'}
                            color="success"
                            onClick={handleSubmit}
                            type="primary" size={"large"}
                            icon={<SaveFilled />}
                        />
                    </div>
                </div>


                <div className="navbar_row flex justify-content-between align-items-center gap-3">
                    <Search
                        placeholder="Search tasks"
                        allowClear
                        enterButton="Search"
                        size="large"
                        ref={searchRef}
                        onChange={searchTask}
                    />
                    <Button type="primary" size={"large"} onClick={() => setIsModalOpen(true)}>
                        Add new task
                    </Button>
                </div>
            </div>
        </div>
    )
}