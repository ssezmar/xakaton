"use client"
 
import * as React from "react"
 
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
 
export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  return (
    <Card className="w-[300px] m-[100px]">
        <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        />
    </Card>
  )
}
