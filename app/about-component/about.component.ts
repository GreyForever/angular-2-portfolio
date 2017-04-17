import { Component } from '@angular/core';

class Mail{
    name: string; 
    email: string;
    phone: string;
	subject: string;
	message: string;
}

@Component({
  templateUrl: 'app/about-component/about.component.html'
})
export class AboutComponent { 

 mail: Mail = new Mail();
    sendMail(){
        console.log(this.mail);
    }

}
