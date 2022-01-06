import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import clienteAxios from '../../config/axios';

const ListadoTask = (props) => {
    const { id: idFolder } = useParams();
    const [tasks, setTasks] = useState([]);
    const [nameTask, setNameTask] = useState('')

    useEffect(() => {
        const consultarTasks = async () => {
            try {
                const tasks = await clienteAxios.get(`/tasks?folder=${idFolder}`);
                setTasks(tasks.data);
            } catch (error) {
                console.log(error);
            }
        }
        consultarTasks();
    }, []);

    const handleAddTask = async () => {
        try {
            const rta = await clienteAxios.post('/tasks', {
                tarea: nameTask,
                folder: idFolder
            });
            setTasks([
                ...tasks,
                rta.data
            ]);
            setNameTask('');
        } catch (error) {
            console.log(error);
        }
    }

    const handlerNameTask = (e) => {
        setNameTask(e.target.value);
    }

    const handlerRemoveTask = async (id) => {
        console.log(id);
    }

    const handlerChek = async (id, e) =>{


        try {
            const rta = await clienteAxios.put(`/tasks/${id}`, {
                realizado: e.target.checked
            });
            const tasksActualizados = tasks.map( task => {
                if(task._id == id){
                    return rta.data;
                } else {
                    return task;
                }
            });
            setTasks(tasksActualizados);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Tasks</h1>
            <table>
                <tbody>
                    {tasks.map((task, i) => {
                        return (
                            <tr key={i}>
                                <td><input type="checkbox" name="realizado" checked={task.realizado} onChange={(e) => handlerChek(task._id, e)}/></td>
                                <td>{task.tarea}</td>
                                <td><Link to={`/editarTask/${task._id}`}><button>Edit</button></Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <input type="text" name="nombre" onChange={handlerNameTask} value={nameTask} />
            <button onClick={handleAddTask} disabled={nameTask.length == 0}>Add</button>
        </>
    )

}

export default ListadoTask;