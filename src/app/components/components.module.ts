import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { HeaderComponent } from './header/header.component';
import { ResaltarDirective } from './resaltar.directive';
import { TicketItemComponent } from './ticket-item/ticket-item.component';

const components = [HeaderComponent, TicketItemComponent];

@NgModule({
  declarations: [...components, ResaltarDirective],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule, MaterialModule],
  exports: [...components, ResaltarDirective]
})
export class ComponentsModule { }
