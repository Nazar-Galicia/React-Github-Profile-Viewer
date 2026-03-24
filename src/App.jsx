import Viewer from "@/components/Viewer/Viewer.jsx";
import { Routes, Route } from 'react-router-dom'
import User from "@/pages/User/User.jsx";

function App() {

  return (
      <Routes>
        <Route path='/' element={<Viewer />} />
        <Route path='/users/:id' element={<User />} />
      </Routes>
  )
}

export default App
