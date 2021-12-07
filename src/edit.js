import { useLocation ,useHistory} from "react-router-dom"
import axios from "axios";
import React, { useState} from "react";

export const Edit = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState([])
    const location = useLocation();
    const history = useHistory()
    console.log(location);
    axios.get(`/users/${location.state}`)
    .then(response => setUsers(response.data))
    .catch(error => console.log(error))

    const handleChange = (e) => {
        setName(e.target.value)
      }

    const updateUser = () => {
        axios.patch(`https://jsonplaceholder.typicode.com/users/${location.state}` ,{
        name: name })
        .then(
        history.push("/")
        )
        .catch(error => console.log(error))

    }
    return (
        <>
        <h1>{users.name}</h1>
        <input value={name} onChange={handleChange}>{users.name}</input>
        <button onClick={updateUser}>編集</button>

        </>
    )
}