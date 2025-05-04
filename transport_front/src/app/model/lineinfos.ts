// Si votre backend serialize les noms en snake_case
export class LineInfos {
    constructor(
      public id: number,
      public line_number: number,
      public number_of_buses: number,
      public working: number,
      public not_working: number,
      public date: Date,
      //public user_id: number
    ) {}
  }  