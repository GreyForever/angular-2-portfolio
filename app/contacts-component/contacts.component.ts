import { Component } from '@angular/core';

@Component({
  templateUrl: 'app/contacts-component/contacts.component.html',
  styles: [`
.red{
    color:red;
    }
.form-area
{
    background-color: #FAFAFA;
	padding: 10px 40px 60px;
	margin: 10px 0px 60px;
	border: 1px solid GREY;
	}`]
})
export class ContactsComponent { }
