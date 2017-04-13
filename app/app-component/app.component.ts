import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS }   from '@angular/http';

@Component({
  selector: 'my-app',
  providers: [HTTP_PROVIDERS],
  templateUrl: 'app/app-component/app.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
