import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/models/tickets.model';
import { DummyService } from "../../services/dummy.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Lista de tickets
  tickets: Ticket[] = [
    new Ticket('Latin', '  Ut est ipsum culpa ut sit incididunt officia ullamco. Qui occaecat incididunt eu aliquip id qui proident quis Lorem incididunt amet. Fugiat consequat consectetur nostrud culpa fugiat. Esse in fugiat magna dolor officia labore est dolore non nulla. Eu cupidatat ullamco pariatur est et consectetur officia ut fugiat exercitation in culpa nostrud. Velit magna enim excepteur tempor id tempor ipsum enim quis ipsum.    ', new Date)
  ];

  // ticket para data (template-driven)
  ticket: Ticket;

  // Campos para crear sin template-driven
  addAsunto: string;
  addDescripcion: string;

  // Boolear para mostrar o no el data
  showAdd: boolean = false;

  //Operacion
  oper: string;

  // Observable de dummyService
  dummyData$: Observable<any>;

  constructor(private dummyService: DummyService) {
    this.dummyData$ = this.dummyService.getPeople();
  }

  ngOnInit(): void {
  }

  showData(ticket: Ticket = new Ticket(), op: 'ALTA' | 'BAJA' | 'MOD' = 'ALTA') {
    this.oper = op;
    if (this.showAdd) { this.showAdd = false; return; }
    this.ticket = ticket;
    this.showAdd = true;
  }

  process() {
    switch (this.oper) {
      case 'ALTA': this.tickets.push(this.ticket); break;
      case 'BAJA': this.tickets.splice(this.tickets.findIndex(x => x === this.ticket), 1); break;
      default:
        break;
    }

    this.showAdd = false;
  }

  onItemSelected(ticket: Ticket) {
    this.showData(ticket, 'MOD');
  }


}
