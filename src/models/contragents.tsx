export type ContrAgents = {
  id: string // id агента
  type: "Физ" | "Юр"
  firstName: string
  secondName: string
  lastName: string
  team: string //Команда 
  teamId: string 
  dateBirth: string 
  nameLegalEntiti: string
  countActiveDocs: number
  countCompleteDocs: number
  profit: string //Прибыль
  agentsDocs: [{
    agentDocId: string
    name: string
    description: string // Условие типо хз))
    team: string
    rate: string // Ставка коммисии
  }]
  INN: number
}