import { Component, OnInit,Input } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from '../resources/http.service';
import { Project } from '../resources/project';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'projects-list',
    templateUrl: 'app/projects-list/projects-list.component.html',
	styles: [`
.img-responsive
{
    max-width: 100%;
	max-height: 200px;
}
`],
    providers: [HttpService],
	directives: [ROUTER_DIRECTIVES]
})
export class ProjectsListComponent implements OnInit { 
	@Input() projNumb: number;	
	
	projects: Project[]=[];
	
 constructor(private httpService: HttpService){}
     
    ngOnInit(){
         
        this.httpService.getData().subscribe((data: Response) => this.projects=data.json());
    }
	
}
