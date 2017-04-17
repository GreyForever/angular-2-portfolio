import { Component, OnInit,Input } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from '../resources/http.service';
import { Project } from '../resources/project';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'projects-list',
    templateUrl: 'app/projects-list/projects-list.component.html',
	styles: [`.portfolio-item {margin-bottom: 25px;} .img-responsive {max-height: 300px; margin: auto;padding:5px;}
	.portfolio-item:hover{
	-moz-box-shadow: 0 0 10px #ccc; -webkit-box-shadow: 0 0 10px #ccc; box-shadow: 0 0 10px #ccc;
	}`],
    providers: [HttpService],
	directives: [ROUTER_DIRECTIVES]
})
export class ProjectsListComponent implements OnInit { 
	@Input() projNumb: number;	
	catName:string = '';
	projects: Project[]=[];
	
 constructor(private httpService: HttpService){}
     
    ngOnInit(){
         
        this.httpService.getData().subscribe((data: Response) => this.projects=data.json());
    }
	
	toggle(cat){
	this.catName = cat;
	}
	
}
