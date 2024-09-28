import { NavigationCenter } from "@/components/navigation-center"
import { NavigationRight } from "@/components/navigation-right"

import { Handshake } from "lucide-react"
 
export function Navigation() {
  return (
    <>
    <div className=" fixed top-0 z-50 bg-white dark:bg-black w-full opacity-95 blur-none">
      <div className="grid grid-cols-3 gray">
        <Handshake size={48} strokeWidth={3} absoluteStrokeWidth className="m-[30px]"/>
        <NavigationCenter/>
        <NavigationRight/>
      </div>  
    </div>
       
    </>  
  )
}
