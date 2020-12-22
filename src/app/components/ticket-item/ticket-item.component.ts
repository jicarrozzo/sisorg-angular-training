import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/models/tickets.model';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {
  @Input() ticket: Ticket;
  @Output() onSelect: EventEmitter<Ticket> = new EventEmitter();
  @Output() onEdit: EventEmitter<Ticket> = new EventEmitter();
  @Output() onDelete: EventEmitter<Ticket> = new EventEmitter();
  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  select() {
    this.selected = !this.selected;
  }
  edit() {
    this.onEdit.emit(this.ticket);
  }
  delete() {
    this.onDelete.emit(this.ticket);
  }

}
