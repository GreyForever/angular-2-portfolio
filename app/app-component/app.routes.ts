import { provideRouter, RouterConfig }  from '@angular/router';
import { HomeComponent } from '../home-component/home.component';
import { ProjectsComponent } from '../projects-component/projects.component';
import { AboutComponent } from '../about-component/about.component';
import { ContactsComponent } from '../contacts-component/contacts.component';
import { ErrorComponent } from '../error-component/error.component';
import { DetailsComponent } from '../proj-details-component/details.component';

const routes: RouterConfig = [
    { path: 'portfolio',  component: ProjectsComponent },
    { path: 'about',  component: AboutComponent },
	{ path: 'contacts',  component: ContactsComponent },
	{ path: 'portfolio/:id', component: DetailsComponent},
	{ path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];

export const myRouterProviders = [
    provideRouter(routes)
];   