import { Component, OnInit } from '@angular/core';
import { PilotService } from './pilot.service';

@Component({
  selector: 'app-pilot',
  templateUrl: './pilot.component.html'
})
export class PilotComponent implements OnInit {

  pilots: any[] = [];

  constructor(public _pilotservice: PilotService) { }

  ngOnInit() {
  }

  sayHelloPilot(nombre: string) {
    return `Hello ${nombre}`;
  }

  getPilots() {
    this._pilotservice.getPilots().subscribe( (pilots: any[] ) => this.pilots = pilots);
  }
}
