import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
import { MainPage } from "@/pages/main-page"
import { ProjectsListPage } from "@/pages/projects-list"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/projects/list" element={<ProjectsListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  )
}
 
export default App