import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import clienteAxios from '../../config/axios';


const EditarTask = (props) => {
    const { id } = useParams();
    const [task, setTask] = useState({
        tarea: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        const consultarTask = async () => {
            try {
                const task = await clienteAxios.get(`/tasks/${id}`);
                setTask(task.data);
            } catch (error) {
                console.log(error);
            }
        }

        consultarTask();
    }, []);

    const handlerTaskNameChange = (e) => {
        setTask({
            ...task,
            tarea: e.target.value
        })
    }

    const handlerSaveTask = async () => {
        try {
            const rta = await clienteAxios.put(`/tasks/${id}`, {
                tarea: task.tarea
            });
            setTask(rta);
            navigate(-1)
        } catch (error) {
            console.log(error);
        }
    }




    return (
        <>
            <h1>Editar Task</h1>
            <input type="text" name="tarea" value={task.tarea} onChange={handlerTaskNameChange} />
            <button onClick={handlerSaveTask}>Save</button>
            <button onClick={() => navigate(-1)}>Cancel</button>
        </>
    )

}

export default EditarTask;