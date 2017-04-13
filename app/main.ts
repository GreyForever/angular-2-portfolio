import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app-component/app.component';
import { myRouterProviders } from './app-component/app.routes';

bootstrap(AppComponent, [myRouterProviders]);

