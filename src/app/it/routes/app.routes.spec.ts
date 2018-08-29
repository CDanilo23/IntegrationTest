import { RUTAS } from './app.routes';
import { PilotComponent } from '../pilot/pilot.component';

describe( 'Main routes ', () => {
    it('Should to exist the route /pilot/:id', () => {
        expect(RUTAS).toContain({
            path: 'pilot/:id',
            component: PilotComponent
        });
    });
});
