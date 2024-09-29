export type Products = {
  id: string //возможно не надо заполнять
  name: string //название
  countDocs: number //Количество договоров
  LOBid: "ОСАГО" | "КАСКО" | "Страхование путешественников" | "Страхование от несчастных случаев" //линия бизнесса
  risks: [{
    name: string, 
    percentageExpenses: number, 
    discription: string,
  }]
  // Какие-то мета данные по продукту
  metaData: [{
    name: string, 
    dicription: number,
    data: string,
  }]
  // Пока просто типо формула, потом надо улучшить до jsx формата, хз как:)
  formula: string // Формула рассчета
  // TODO: как то продумать калькулятор

  // Агентские договора по этому проекту
  agentsDocs: [{
    agentDocId: string
    name: string
    description: string // Условие типо хз))
    team: string
    rate: string // Ставка коммисии
  }]
}

