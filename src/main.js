import axios from "axios";
import React, {useEffect, useState} from "react";
import {  Link }from "react-router-dom";

export const Main = () => {
  const [name, setName] = useState('')
  const [datas, setData] = useState([])
  useEffect(() => {
    axios.get('/api/v1/memos/')
      .then(response => setData(response.data.data))
      .catch(error => console.log(error))
  }, [datas])
 
  const handleChange = (e) => {
    setName(e.target.value)
  }
  

  const createNewUser = () => {
    axios.post('/api/v1/memos/', {
      title: name
    })
    .then(response => {
      setUsers([...users, response.data])
    })
    .catch(error => {
      console.log(error);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`/api/v1/memos/${id}`)
    .then(response => {
      console.log(response)
      setData([])
    })
    .catch(error => console.log(error))
  }


  return (
  <div>
    <input value={title} onChange={handleChange} />
    <button onClick={createNewUser}>作成</button>
      <ul>
    {datas.map((data, index) => (
      <li key={index}>{data.title}:
        <button onClick={() => deleteUser(data.id)}>削除</button>
        <Link to={{pathname: "/edit", state: data.id}}>編集</Link>
      </li>
    ))}
  </ul>
  </div>
  )
}


