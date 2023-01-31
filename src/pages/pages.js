import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import { Banner, MainDiv, NavBar } from '../components/styles'
import { Main } from '../views/main'
import { UserList } from '../views/userList'
// import { NoMatch } from './NoMatch'

export function Pages(props) {
  return (
    <MainDiv>
      <Header />

      <NavBar>
        <Link to="/users"> Users</Link>
        <Link to="/">Home</Link>
      </NavBar>
      <Outlet />
    </MainDiv>
  )
}
