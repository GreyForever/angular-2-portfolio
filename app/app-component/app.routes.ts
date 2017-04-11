import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from '../home-component/home.component';
import { ProjectsComponent } from '../projects-component/projects.component';
import { AboutComponent } from '../about-component/about.component';
import { ErrorComponent } from '../error-component/error.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects',  component: ProjectsComponent },
    { path: 'about',  component: AboutComponent },
    { path: '**', component: ErrorComponent }
];

export const myRouterProviders = [
    provideRouter(routes)
];   