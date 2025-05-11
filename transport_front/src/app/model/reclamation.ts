export class Reclamation {
  constructor(
    public id: number,
    public date: Date,
    public fullName: string,
    public cin: string,
    public phoneNumber: string,
    public ticketNumber:string,
    public state: string,
    public description: string,
   // public user_id: number
  ) {}
}