import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-pilot',
  templateUrl: './router-pilot.component.html',
  styles: []
})
export class RouterPilotComponent implements OnInit {

  id: string;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params
        .subscribe( params => {
         this.id = params['id'];
    });
  }

  savePilot() {
    this.router.navigate(['pilot', '123']);
  }

}
