import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterPilotComponent } from './router-pilot.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/observable/empty';

class FakeRouter {
  navigate( params ) { }
}

class FakeActivatedRoute {
  params: Observable<any> = Observable.empty();
}

describe('RouterPilotComponent', () => {
  let component: RouterPilotComponent;
  let fixture: ComponentFixture<RouterPilotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterPilotComponent ],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterPilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(' Should to redirect to Pilot when it save', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.savePilot();
    expect( spy ).toHaveBeenCalledWith( ['pilot', '123'] );
  });
});
