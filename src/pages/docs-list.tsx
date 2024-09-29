import { Navigation } from "@/components/navigation"

import { DocsTable } from "@/components/docs-list"

import { Card } from "@/components/ui/card"

export function DocsListPage() {
  return (
    <>
      <div className="w-full h-[80em]">
        <Navigation/>
        <div className="flex justify-center ">
          <Card className="w-[90%] p-5 mt-[10%]">
            <DocsTable/>
          </Card>
        </div> 
      </div>  
    </>
    
  )
}
