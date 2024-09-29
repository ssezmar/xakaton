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
    type: "Физ",
    name: "Романов Дмитрий Александрович",
    team: "Sirkovo Company", 
    countActiveDocs: 10,
    countCompleteDocs: 5,
    INN: 123123123,
  },
  {
    id: "m5gr84i9",
    type: "Юр",
    name: "Варухин Николай Аркадьевич",
    team: "Согласие", 
    countActiveDocs: 7,
    countCompleteDocs: 3,
    INN: 123412341,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Карпухин Глеб Денисович",
    team: "Колмово", 
    countActiveDocs: 4,
    countCompleteDocs: 1,
    INN: 523412321,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Мосягин Никита Дмитриевич",
    team: "Новгу", 
    countActiveDocs: 4,
    countCompleteDocs: 1,
    INN: 523412376,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Кулаков Игорь Юрьевич",
    team: "Новгу", 
    countActiveDocs: 6,
    countCompleteDocs: 12,
    INN: 1010331112,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Романов Дмитрий Александрович",
    team: "Sirkovo Company", 
    countActiveDocs: 10,
    countCompleteDocs: 5,
    INN: 123123123,
  },
  {
    id: "m5gr84i9",
    type: "Юр",
    name: "Варухин Николай Аркадьевич",
    team: "Согласие", 
    countActiveDocs: 7,
    countCompleteDocs: 3,
    INN: 123412341,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Карпухин Глеб Денисович",
    team: "Колмово", 
    countActiveDocs: 4,
    countCompleteDocs: 1,
    INN: 523412321,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Мосягин Никита Дмитриевич",
    team: "Новгу", 
    countActiveDocs: 4,
    countCompleteDocs: 1,
    INN: 523412376,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Кулаков Игорь Юрьевич",
    team: "Новгу", 
    countActiveDocs: 6,
    countCompleteDocs: 12,
    INN: 1010331112,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Романов Дмитрий Александрович",
    team: "Sirkovo Company", 
    countActiveDocs: 10,
    countCompleteDocs: 5,
    INN: 123123123,
  },
  {
    id: "m5gr84i9",
    type: "Юр",
    name: "Варухин Николай Аркадьевич",
    team: "Согласие", 
    countActiveDocs: 7,
    countCompleteDocs: 3,
    INN: 123412341,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Карпухин Глеб Денисович",
    team: "Колмово", 
    countActiveDocs: 4,
    countCompleteDocs: 1,
    INN: 523412321,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Мосягин Никита Дмитриевич",
    team: "Новгу", 
    countActiveDocs: 4,
    countCompleteDocs: 1,
    INN: 523412376,
  },
  {
    id: "m5gr84i9",
    type: "Физ",
    name: "Кулаков Игорь Юрьевич",
    team: "Новгу", 
    countActiveDocs: 6,
    countCompleteDocs: 12,
    INN: 1010331112,
  },
  
]

export type Payment = {
  id: string
  type: string
  name: string
  team: string
  countActiveDocs: number
  countCompleteDocs: number
  INN: number
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
          ФИО
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div  className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Тип контрагента
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "team",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Команда
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("team")}</div>
    ),
  },
  {
    accessorKey: "countActiveDocs",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Количество активных дел
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("countActiveDocs")}</div>
    ),
  },
  {
    accessorKey: "countCompleteDocs",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            Количество закрытых дел
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize text-center">{row.getValue("countCompleteDocs")}</div>
    ),
  },
  {
    accessorKey: "INN",
     header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
            ИНН
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
        </div>
        
      )
    },
    cell: ({ row }) => {

      return <div className="capitalize text-center">{row.getValue("INN")}</div>
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
                navigator.clipboard.writeText(payment.INN)
              }}
            > 
              Скопировать ИНН
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Посмотреть команду</DropdownMenuItem>
            <DropdownMenuItem>Посмотреть профиль</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function AgentsTable() {
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
          placeholder="Поиск по ФИО..."
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
