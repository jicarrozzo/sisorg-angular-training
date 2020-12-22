import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators'
import { Ticket } from "../models/tickets.model";

const apiEndpoing = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(apiEndpoing).pipe(
      map((xs: any[]) => xs.map((x) => new Ticket(x.title, x.body, new Date())))
    );

  }
}