import Viewer from "@/components/Viewer/Viewer.jsx";
import { Routes, Route } from 'react-router-dom'
import User from "@/pages/User/User.jsx";
import Repository from "@/components/Repository/Repository.jsx";
import Repo from "@/pages/Repo/Repo.jsx";

function App() {

  return (
      <Routes>
        <Route path='/' element={<Viewer />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/repos/:userId/:repoId' element={<Repo />} />
      </Routes>
  )
}

export default App
