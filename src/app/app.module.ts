import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PilotComponent } from './it/pilot/pilot.component';
import { PilotService } from './it/pilot/pilot.service';

import { TripComponent } from './it/trip/trip.component';
import { IncrementadorComponent } from './it/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './it/routes/app.routes';
import { NavbarComponent } from './it/navbar/navbar.component';
import { RouterPilotComponent } from './it/router-pilot/router-pilot.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotComponent,
    TripComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterPilotComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [PilotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
