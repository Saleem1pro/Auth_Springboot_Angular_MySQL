// Si votre backend serialize les noms en snake_case
export class LineInfos {
    constructor(
      public id: number,
      public lineNumber: number,
      public numberOfBuses: number,
      public working: number,
      public notWorking: number,
      public date: Date,
      //public user_id: number
    ) {}
  }  