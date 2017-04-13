import { Component, OnDestroy } from '@angular/core';
import { Response} from '@angular/http';
import { HttpService} from '../resources/http.service';
import { Project } from '../resources/project';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'proj-detail',
  templateUrl: 'app/proj-details-component/details.component.html',
   providers: [HttpService]
})
export class DetailsComponent implements OnDestroy{ 
	projects: Project[]=[];
    private id: number;
    private routeSubscription: Subscription;
     
    constructor(private route: ActivatedRoute,private httpService: HttpService){
         
        this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
    }
    ngOnDestroy(){
        this.routeSubscription.unsubscribe();
    }
	 
    ngOnInit(){
         
        this.httpService.getData().subscribe((data: Response) => this.projects=data.json());
		
    }
}
