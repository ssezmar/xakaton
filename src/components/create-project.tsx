import * as React from "react"
import { cn } from "@/lib/utils"

import MultipleSelector, { Option } from '@/components/ui/multiple-selector';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {
  ChartArea,
  Calculator,
  ClipboardMinus,
  Presentation,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AutosizeTextarea } from '@/components/ui/autosize-textarea';
import { CalendarForm, CalendarFormEnd } from "@/components/data-picker-cp"

import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select";

const OPTIONS: Option[] = [
  { label: 'риск1', value: 'риск1' },
  { label: 'риск2', value: 'риск2' },
  { label: 'риск3', value: 'риск3' },
  { label: 'риск4', value: 'риск4' },
  { label: 'риск5', value: 'риск5' },
  { label: 'риск6', value: 'риск6' },
  { label: 'риск7', value: 'риск7' },
  { label: 'риск8', value: 'риск8' },
  { label: 'риск9', value: 'риск9', disable: true },
  { label: 'риск10', value: 'риск10', disable: true },
  { label: 'риск11', value: 'риск11' },
];



export function CreateProject() {
  return (
    <>

      <Card className="w-[90%]">
      <CardHeader>
        <CardTitle>Хотите скопировать проект?</CardTitle>
        <CardDescription>Можете выбрать проект из списка и скопировать его в один клик!</CardDescription>
      </CardHeader>
      <CardContent>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Выберите проект, который хотите скопировать..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Молодежные ипотеки">Молодежные ипотеки</SelectItem>
          <SelectItem value="ОСАГО для программистов">ОСАГО для программистов</SelectItem>
          <SelectItem value="Страховки для домашних животных">Страховки для домашних животных</SelectItem>
          <SelectItem value="Спортивные страховки">Спортивные страховки</SelectItem>
        </SelectContent>
      </Select>
        </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Скопировать</Button>
      </CardFooter>
      </Card>
      <Card className="w-[90%]  mt-10 ">
        <CardHeader>
          <CardTitle>Хотите создать проект с нуля?</CardTitle>
          <CardDescription>Можете создать его здесь!!!</CardDescription>
        </CardHeader>
        <CardContent className="">
          <div className="grid grid-cols-3 gap-3 w-[90%] items-center ml-[5%] ">
            <div className="h-[200px]">
              <Label htmlFor="nameProject">Название</Label>
              <Input type="nameProject" id="nameProject" placeholder="Название проекта..." />
            </div>
            <div className="pt-[3%]">
              <Label htmlFor="discription">Описание</Label>
              <div className="h-[200px]">
                <AutosizeTextarea
                  placeholder="Введите описание вашего проекта..."
                  maxHeight={200}
                />
              </div>
              </div>
            <div className="pt-[3%] h-[200px]">
              <Label htmlFor="discription">Риски</Label>
                <div className="">
                  <MultipleSelector
                    defaultOptions={OPTIONS}
                    placeholder="Выберите нужные риски..."
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        нет результатов.
                      </p>
                    }
                    />
                </div>
            </div>
            <div className="pt-5">
              <Label htmlFor="nameProject">Тип прокта</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите тип проекта..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ОСАГО">ОСАГО</SelectItem>
                  <SelectItem value="КАСКО">КАСКО</SelectItem>
                  <SelectItem value="Страхование путешествий">Страхование путешествий</SelectItem>
                  <SelectItem value="Страхование от несчастных случаев">Страхование от несчастных случаев</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div></div>
            <div className="pt-5">
              <Label htmlFor="nameProject">Команда проекта</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите команду проекта..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Новгу">Новгу</SelectItem>
                  <SelectItem value="Sirkovo_sqd">Sirkovo_sqd</SelectItem>
                  <SelectItem value="Согласие">Согласие</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="pt-10">
              <CalendarForm/>
            </div>
            <div className="pt-10">
              <CalendarFormEnd/>
            </div>
          </div>
        </CardContent>
        
      </Card>
    </>
    
  )
}

