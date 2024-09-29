import { Navigation } from "@/components/navigation"

import { CreateProject } from "@/components/create-project"

import { Card } from "@/components/ui/card"

export function CreateProjectPage() {
  return (
    <>
      <div className="w-full h-[80em]">
        <Navigation/>
        <div className="m-[10%] w-[90%]">
          <CreateProject/>
        </div>
        
      </div>  
    </>
    
  )
}
