import { Component } from '@angular/core';
import { ProjectsListComponent } from '../projects-list/projects-list.component';

@Component({
    templateUrl: 'app/projects-component/projects.component.html',
	directives: [ProjectsListComponent]
})
export class ProjectsComponent { }
