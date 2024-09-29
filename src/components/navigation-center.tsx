import * as React from "react"
//import Link from "next/link"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
    ChartArea,
    Calculator,
    ClipboardMinus,
    Presentation,
  } from "lucide-react"

export function NavigationCenter() {
  return (
    <>
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-l order-last">
            <ChartArea className="h-5 w-5" />
                <p className="ml-[10px]">
                  Аналитика
                </p>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/projects/list" title="Все проекты">
                  Список всех проектов
                </ListItem>
                <ListItem href="/projects/information" title="Панель аналитики">
                  Общая информация по текущим продуктам
                </ListItem>
                <ListItem href="/agents/list" title="Агенты">
                  Информация по всем агентам
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Presentation className="h-5 w-5"/>
                <p className="ml-[10px]">
                  Проекты
                </p>
              </NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] ">
                <ListItem href="/projects/list" title="Все проекты">
                  Список всех проектов
                </ListItem>
                <ListItem href="/projects/create" title="Создать новый проект">
                  Страница создания новых гипотез
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" text-l order-last">
            <ClipboardMinus className="h-5 w-5" />
                <p className="ml-[10px]">
                  Договоры
                </p>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs/list" title="Все договоры">
                  Список всех договоров
                </ListItem>
                <ListItem href="/docs/create" title="Новый договор">
                  Создать новый договор
                </ListItem>
                <ListItem href="/agents/list" title="Агенты">
                  Информация по всем агентам
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/calculator">
              <Calculator className="h-5 w-5" />
              <p className="ml-[10px]">
                Калькулятор 
              </p>
            </NavigationMenuLink>

          </NavigationMenuItem>

        </NavigationMenuList >
      </NavigationMenu>
      
    </>
  )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"