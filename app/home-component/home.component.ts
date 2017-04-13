import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProjectsListComponent } from '../projects-list/projects-list.component';

@Component({
  templateUrl: 'app/home-component/home.component.html',
  directives: [ROUTER_DIRECTIVES,ProjectsListComponent]
})
export class HomeComponent { }
