import * as React from "react"
import { GeneralGraph} from "@/components/general-graph"
import { GeneralGraph2} from "@/components/general-graph2"
import { Calendar } from "@/components/ui/calendar"
import { GeneralCard } from "@/components/general-card"
import { GeneralCarousel } from "@/components/general-carusel"

import logo from '../assets/согласие.jpg'





export function Main() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
      <div className="background-image">
        <div className="content">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Добрый день! Удачных гипотез!
          </h1>
        </div>
      </div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center mt-[50px]">
        Общая сводка по статистике:
      </h3>
      <GeneralGraph/>
      <div className="grid gap-3 p-10 grid-cols-3">
        <GeneralGraph2/>
        <GeneralCard/>
        <GeneralCarousel/>

      </div>
      
    </>
    
  )
}
