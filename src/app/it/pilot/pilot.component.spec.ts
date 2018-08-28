import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PilotComponent } from './pilot.component';
import { PilotService } from './pilot.service';
import { HttpClientModule } from '@angular/common/http';

describe('Pilot component', () => {

    let component: PilotComponent;
    let fixture: ComponentFixture<PilotComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ PilotComponent ],
            providers: [PilotService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent( PilotComponent );
        component = fixture.componentInstance;
    });

    it('Must to create the component', () => {
        expect(  component ).toBeTruthy();
    });

    it('Must to return the pilot name', () => {
        const name = 'Juan';
        const res = component.sayHelloPilot(name);
        expect( res ).toContain(name);
    });

});
