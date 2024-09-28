import { Navigation } from "@/components/navigation"

import { Main } from "@/components/main"
 
export function MainPage() {
  return (
    <>
      <div className="backdrop-blur-sm bg-white/5 ...">
        <Navigation/>
        <Main/>
      </div>
      
    </>
    
  )
}
