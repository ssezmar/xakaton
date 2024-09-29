import { BrowserRouter, Routes, Route } from 'react-router-dom';
 
import { MainPage } from "@/pages/main-page"
import { ProjectsListPage } from "@/pages/projects-list"
import { AgentsListPage } from "@/pages/agents-list"
import { DocsListPage } from "@/pages/docs-list"
import { CreateProjectPage } from "@/pages/create-project"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/projects/list" element={<ProjectsListPage />}></Route>
          <Route path="/projects/create" element={<CreateProjectPage />}></Route>  
          <Route path="/agents/list" element={<AgentsListPage />}></Route>   
          <Route path="/docs/list" element={<DocsListPage />}></Route>  
        </Routes>
      </BrowserRouter>
    </>
    
  )
}
 
export default App