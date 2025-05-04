// bustracking.model.ts
export class Bustracking {
    constructor(
        public id: number,
        public bus_state: number,
        public bus_on: number,
        public bus_off: number,
        public bus_on_time: number,
        public bus_late: number,
        public bus_on_accident: number,
        public change_of_line: number,
        public date:Date,
        //public user_id: number
      ) {}
  }