// bustracking.model.ts
export class Bustracking {
    constructor(
        public id: number,
        public busState: number,
        public busOn: number,
        public busOff: number,
        public busOnTime: number,
        public busLate: number,
        public busOnAccident: number,
        public changeofLine: number,
        public date:Date,
        //public user_id: number
      ) {}
  }