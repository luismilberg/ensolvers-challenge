import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import clienteAxios from '../../config/axios';

const ListadoFolder = (props) => {
    const [folders, setFolders] = useState([]);
    const [newFolder, setNewFolder] = useState('');

    useEffect(() => {
        try {
            const consultarFolders = async () => {
                const folders = await clienteAxios.get('/folders');
                setFolders(folders.data);
            }

            consultarFolders();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handlerAddFolder = async () => {
        try {
            const rta = await clienteAxios.post('/folders', {
                nombre: newFolder
            });
            setFolders([
                ...folders,
                rta.data
            ]);
            setNewFolder('');
        } catch (error) {
            console.log(error);
        }
    }

    const setNameFolder = (e) => {
        setNewFolder(e.target.value);
    }

    const handlerRemoveFolder = async (id) => {
        try {
            const rta = clienteAxios.delete(`/folders/${id}`);
            const foldersActualizados = folders.filter(folder => { 
                return folder._id != id;
            });
            setFolders(foldersActualizados);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <>
            <h1>Folders</h1>
            <table>
                <tbody>
                    {folders.map((folder, i) => {
                        return (
                            <tr key={i}>
                                <td>{folder.nombre}</td>
                                <td><Link to={`/folders/${folder._id}`}><button>View Items</button></Link></td>
                                <td><button onClick={() => handlerRemoveFolder(folder._id)}>Remove</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <input type="text" name="nombre" onChange={setNameFolder} value={newFolder} />
            <button onClick={handlerAddFolder} disabled={newFolder.length == 0}>Add</button>
        </>
    )

}

export default ListadoFolder;
