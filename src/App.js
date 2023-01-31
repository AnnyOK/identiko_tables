import { Main } from './views/main'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { Header } from './components/header';
import { UserList } from './views/userList'
import { NoMatch } from './pages/NoMatch'
import { Pages } from './pages/pages'
import { UserReg } from './views/userreg'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pages />}>
            <Route index element={<Main />} />
            <Route path="/users" element={<UserList />} >
            </Route>
            <Route path = "/users/:id" element ={<UserReg/>} />

            <Route path ="*" element={<NoMatch/>} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>

      {/* <Main/> */}
    </div>
  )
}

export default App
