import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from '../home-component/home.component';
import { ProjectsComponent } from '../projects-component/projects.component';
import { AboutComponent } from '../about-component/about.component';
import { ContactsComponent } from '../contacts-component/contacts.component';
import { ErrorComponent } from '../error-component/error.component';
import { DetailsComponent } from '../proj-details-component/details.component';

const routes: RouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects',  component: ProjectsComponent },
    { path: 'about',  component: AboutComponent },
	{ path: 'contacts',  component: ContactsComponent },
	{ path: 'projects/:id', component: DetailsComponent},
    { path: '**', component: ErrorComponent }
];

export const myRouterProviders = [
    provideRouter(routes)
];   