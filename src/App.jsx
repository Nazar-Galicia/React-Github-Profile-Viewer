import Viewer from "@/components/Viewer/Viewer.jsx";
import { Routes, Route } from 'react-router-dom'
import User from "@/pages/User/User.jsx";
import Repo from "@/pages/Repo/Repo.jsx";
import RepoProvider from '@/context/RepoContext.jsx'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Viewer />} />
        <Route path='/users/:id' element={<User />} />
        <Route path='/repos/:userId/:repoId' element={
            <RepoProvider>
                <Repo />
            </RepoProvider>
        } />
      </Routes>
  )
}

export default App
