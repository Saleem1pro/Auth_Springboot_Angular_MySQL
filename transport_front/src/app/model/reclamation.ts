export class Reclamation {
  constructor(
    public id: number,
    public date: Date,
    public client_info: string,
    public state: string,
    public title: string,
    public description: string,
   // public user_id: number
  ) {}
}