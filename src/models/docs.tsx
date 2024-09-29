export type Docs = {
  id: string
  name: string
  dateCreating: string
  dateSign: string
  productType: string
  dateBegin: string
  dateEnd: string
  premium: number
  insuranceSum: number
  agent: string
  rate: number
  commision: number
  commisionSum: number
  status: "Проект" | "Подписан" | "Расторгнут"
  polisHolderId: string
  insuredPersonId: string
  OwnerId: string
}