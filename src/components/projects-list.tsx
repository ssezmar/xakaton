"use client"

import { toast } from "sonner"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    profit: 5000,
    status: "Завершен",
    name: "Молодежная ипотека",
    LOBid: "Ипотека",
    countRisks: 10,
  },
  {
    id: "3u1reuv4",
    profit: 242,
    status: "Завершен",
    name: "ОСАГО для программистов",
    LOBid: "ОСАГО",
    countRisks: 1,
  },
  {
    id: "derv1ws0",
    profit: 837,
    status: "В процессе",
    name: "Путешествия для фрилансеров",
    LOBid: "Страхование путешественников",
    countRisks: 2,
  },
  {
    id: "5kma53ae",
    profit: 874,
    status: "Завершен",
    name: "Страхование домашних животных",
    LOBid: "Страхование от несчастных случаев",
    countRisks: 5,
  },
  {
    id: "bhqecj4p",
    profit: 721,
    status: "Провален",
    name: "Спортивные страховки",
    LOBid: "Страхование от несчастных случаев",
    countRisks: 3,
  },
  {
    id: "m5gr84i9",
    profit: 5000,
    status: "Завершен",
    name: "Молодежная ипотека",
    LOBid: "Ипотека",
    countRisks: 10,
  },
  {
    id: "3u1reuv4",
    profit: 242,
    status: "Завершен",
    name: "ОСАГО для программистов",
    LOBid: "ОСАГО",
    countRisks: 1,
  },
  {
    id: "derv1ws0",
    profit: 837,
    status: "В процессе",
    name: "Путешествия для фрилансеров",
    LOBid: "Страхование путешественников",
    countRisks: 2,
  },
  {
    id: "5kma53ae",
    profit: 874,
    status: "Завершен",
    name: "Страхование домашних животных",
    LOBid: "Страхование от несчастных случаев",
    countRisks: 5,
  },
  {
    id: "bhqecj4p",
    profit: 721,
    status: "Провален",
    name: "Спортивные страховки",
    LOBid: "Страхование от несчастных случаев",
    countRisks: 3,
  },
  {
    id: "m5gr84i9",
    profit: 5000,
    status: "Завершен",
    name: "Молодежная ипотека",
    LOBid: "Ипотека",
    countRisks: 10,
  },
  {
    id: "3u1reuv4",
    profit: 242,
    status: "Завершен",
    name: "ОСАГО для программистов",
    LOBid: "ОСАГО",
    countRisks: 1,
  },
  {
    id: "derv1ws0",
    profit: 837,
    status: "В процессе",
    name: "Путешествия для фрилансеров",
    LOBid: "Страхование путешественников",
    countRisks: 2,
  },
  {
    id: "5kma53ae",
    profit: 874,
    status: "Завершен",
    name: "Страхование домашних животных",
    LOBid: "Страхование от несчастных случаев",
    countRisks: 5,
  },
  {
    id: "bhqecj4p",
    profit: 721,
    status: "Провален",
    name: "Спортивные страховки",
    LOBid: "Страхование от несчастных случаев",
    countRisks: 3,
  },
]

export type Payment = {
  id: string
  profit: number
  status: "pending" | "processing" | "success" | "failed"
  name: string
  countRisks: number
  LOBid: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Название
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div  className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Статус
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "LOBid",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Линия бизнеса
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("LOBid")}</div>
    ),
  },
  {
    accessorKey: "countRisks",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Количество рисков
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("countRisks")}</div>
    ),
  },
  {
    accessorKey: "profit",
     header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Прибыль
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
        </div>
        
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("profit"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Действия</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id)
              }}
            > 
              Скопировать ID проекта
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Посмотреть команду</DropdownMenuItem>
            <DropdownMenuItem>Перейти на страницу проекта</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function ProjectsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Поиск по названию..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Столбцы <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Нет результатов.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Предыдущая
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Следующая
          </Button>
        </div>
      </div>
    </div>
  )
}
