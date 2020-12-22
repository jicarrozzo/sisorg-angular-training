export class Ticket {
  numero: number;
  constructor(public asunto: string = '', public descripcion: string = '', public fecha: Date = new Date()) {
    this.numero = Math.floor(Math.random() * Math.floor(10000));
  }
}