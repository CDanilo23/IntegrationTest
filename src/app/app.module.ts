import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PilotComponent } from './it/pilot/pilot.component';
import { PilotService } from './it/pilot/pilot.service';
import { FlyComponent } from './it/fly/fly.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotComponent,
    FlyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PilotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
