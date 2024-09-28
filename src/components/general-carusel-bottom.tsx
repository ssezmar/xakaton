import * as React from "react"

import { Card, CardContent, CardTitle, CardHeader, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"

import { DollarSign, User, Activity } from "lucide-react"


import whiteCar from "../assets/car-white.jpg"
import darkCar from "../assets/car-black.jpg"

export function BottomCarousel() {
  return (
    <Carousel className="w-full max-w-[80%]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex h-[30em] p-10">
                  <Card className="flex aspect-square p-6 items-stretch">
                    <img src={whiteCar} alt="Car" className="block dark:hidden" />
                    <img src={darkCar} alt="Car" className="hidden dark:block" />
                  </Card>
                  <div className="w-full">
                    <CardTitle className="p-4 text-center text-4xl">Проекты по страхованию машин</CardTitle>
                    <div className="flex">
                      <Card x-chunk="dashboard-01-chunk-0" className="w-[33%] m-10 p-2">
                          <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
                          <CardTitle className="text-sm font-medium">
                              Прибыль
                          </CardTitle>
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                          <div className="text-2xl font-bold">₽45,231.89</div>
                          <p className="text-xs text-muted-foreground">
                              +20.1% в последнем месяце
                          </p>
                          </CardContent>
                      </Card>
                      <Card x-chunk="dashboard-01-chunk-0" className="w-[33%] m-10 p-2">
                          <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
                          <CardTitle className="text-sm font-medium">
                              Клиенты
                          </CardTitle>
                          <User className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                          <div className="text-2xl font-bold">2,405,809</div>
                          <p className="text-xs text-muted-foreground">
                              +23,560 в последнем месяце
                          </p>
                          </CardContent>
                      </Card>
                      <Card x-chunk="dashboard-01-chunk-0" className="w-[33%] m-10 p-5">
                          <CardHeader className="flex flex-row items-center justify-between space-y-2 pb-2">
                          <CardTitle className="text-sm font-medium">
                              Активных страховок
                          </CardTitle>
                          <Activity className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                          <div className="text-2xl font-bold">203,405</div>
                          <p className="text-xs text-muted-foreground">
                              +9,005 в послежнем месяце
                          </p>
                          </CardContent>
                      </Card>
                      
                    </div>
                    <div className="w-full flex justify-end">
                      <Button className="flex justify-end">Перейти к управлению проектам</Button>
                    </div>
                    
                  </div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
