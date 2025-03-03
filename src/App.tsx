import { BrowserRouter, Route, Routes } from "react-router"
import { Layout } from "./layout/Layout"
import { Login } from "./pages/Login"
import { RegisterUser } from "./pages/RegisterUser"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App