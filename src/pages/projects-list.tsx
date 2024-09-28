import { Navigation } from "@/components/navigation"

import { ProjectsTable } from "@/components/projects-list"

import { Card } from "@/components/ui/card"
 
export function ProjectsListPage() {
  return (
    <>
      <div>
        <Navigation/>
        <div className="flex justify-center pt-[10%]">
          <Card className="w-[70%] p-5 ">
            <ProjectsTable/>
          </Card>
        </div> 
      </div>  
    </>
    
  )
}
