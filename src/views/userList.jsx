import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Redirect, redirect, Link } from 'react-router-dom'

export function UserList(props) {
  const navigate = useNavigate()

  const [Users,setUsers]= useState([])
  const getUsers = async()=>{
      const {data} = await axios.get("http://10.65.10.7/lasrraImageReportAPI/api/Users/Users")
      setUsers(data)
  }
  
  function viewUsersRegistration(id) {
    // redirect(`/users/${id}`)
  }
  useEffect(() =>{
      getUsers()
  },[])
  return (
    <div>
      {Users.map((item) => (
        <div key={item.id}>
          <p> Name: {item.name}</p>
          <p> Username: {item.username}</p>
          <p> Email: {item.email}</p>
          <Link to={`/users/${item.id}`}>
            View registration by users
          </Link>
        </div>
      ))}
    </div>
  )
}
