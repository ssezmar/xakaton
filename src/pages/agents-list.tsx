import { Navigation } from "@/components/navigation"

import { AgentsTable } from "@/components/agents-list"

import { Card } from "@/components/ui/card"

export function AgentsListPage() {
  return (
    <>
      <div className="w-full h-[80em]">
        <Navigation/>
        <div className="flex justify-center ">
          <Card className="w-[90%] p-5 mt-[10%]">
            <AgentsTable/>
          </Card>
        </div> 
      </div>  
    </>
    
  )
}
