"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../home-component/home.component');
var projects_component_1 = require('../projects-component/projects.component');
var about_component_1 = require('../about-component/about.component');
var contacts_component_1 = require('../contacts-component/contacts.component');
var error_component_1 = require('../error-component/error.component');
var details_component_1 = require('../proj-details-component/details.component');
var routes = [
    { path: 'portfolio', component: projects_component_1.ProjectsComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contacts', component: contacts_component_1.ContactsComponent },
    { path: 'portfolio/:id', component: details_component_1.DetailsComponent },
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: '**', component: error_component_1.ErrorComponent }
];
exports.myRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map