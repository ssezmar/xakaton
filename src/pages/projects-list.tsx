import { Navigation } from "@/components/navigation"

import { ProjectsTable } from "@/components/projects-list"

import { Card } from "@/components/ui/card"

import { Button } from "@/components/ui/button"
 
export function ProjectsListPage() {
  return (
    <>
      <div className="w-full h-[80em]">
        <Navigation/>
        <div className="flex justify-end pt-[10%] pr-[10%] w-full">
          <h4 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl   pb-[5%] text-right">
            Хотите создать новый прокт?
          </h4>
          <div className="justify-end ml-[2%]">
            <Button className="">Создать новый проект</Button>

          </div>
          
        </div>
        <h4 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-3xl pr-[10%] pb-[2%] text-right">
          Или поработать уже с существующими?
        </h4>
        <div className="flex justify-center">
          <Card className="w-[90%] p-5">
            <ProjectsTable/>
          </Card>
        </div> 
      </div>  
    </>
    
  )
}
