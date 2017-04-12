 import { Injectable } from '@angular/core';
 import { Project } from 'app/resources/proj-interface';
 import { ourProjects } from './projects';
 
    @Injectable()
    export class ProjectService {
	 getProjects() {
      return ourProjects;
	  }
    }
