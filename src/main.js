import axios from "axios";
import React, {useEffect, useState} from "react";
import {  Link }from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Main = () => {
  const [name, setName] = useState('')
  const [datas, setData] = useState([])
  useEffect(() => {
    axios.get('https://calm-hollows-60042.herokuapp.com/api/v1/memos/')
      .then(response => setData(response.data.data))
      .catch(error => console.log(error))
  }, [datas])
 
  const handleChange = (e) => {
    setName(e.target.value)
  }
  

  const createNewUser = () => {
    axios.post('https://calm-hollows-60042.herokuapp.com/api/v1/memos/', {
      title: name
    })
    .then(response => {
        setName([...name, response.data])
    })
    .catch(error => {
      console.log(error);
    });
  }

  const deleteUser = (id) => {
    axios.delete(`https://calm-hollows-60042.herokuapp.com/api/v1/memos/${id}`)
    .then(response => {
      console.log(response)
      setData([])
    })
    .catch(error => console.log(error))
  }


  return (
  <div>
    <input value={name} onChange={handleChange} />
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


