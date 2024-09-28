import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "./components/mode-toggle"
//import { LoginForm } from "./components/registration"
import { Navigation } from "./components/navigation"
 
function App() {
  return (
    <>

      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle/>
      </ThemeProvider>
      <Navigation/>
      
    </>
    
  )
}
 
export default App