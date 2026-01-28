import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Layout from "@/pages/Layout";
import HeaderScreen from "./pages/HeaderScreen";
import ProjectsScreen from "./pages/ProjectsScreen";
import AboutScreen from "./pages/AboutScreen";
import StackScreen from "./pages/StackScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/es" replace />} />

        <Route path="/:lang" element={<Layout />} >

          <Route index element={<HeaderScreen />} />
          <Route path="projects" element={<ProjectsScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="stack" element={<StackScreen />} />

        </Route>

        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
