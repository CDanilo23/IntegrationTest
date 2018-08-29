import { Routes } from '@angular/router';
import {PilotComponent} from '../pilot/pilot.component';
import { TripComponent } from '../trip/trip.component';
import { IncrementadorComponent } from '../incrementador/incrementador.component';

export const RUTAS: Routes = [
    {path: 'trip', component: TripComponent},
    {path: 'pilot/:id', component: PilotComponent},
    {path: '**', component: IncrementadorComponent}
];
