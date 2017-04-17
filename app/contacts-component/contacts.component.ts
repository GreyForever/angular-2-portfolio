import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from "@angular/forms";

class Mail{
    name: string; 
    email: string;
    phone: string;
	subject: string;
	message: string;
}

@Component({
  templateUrl: 'app/contacts-component/contacts.component.html',
  directives: [FORM_DIRECTIVES],
 styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
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
export class ContactsComponent {

mail: Mail = new Mail();
    sendMail(){
        console.log(this.mail);
    }

 }
