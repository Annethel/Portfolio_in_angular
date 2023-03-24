import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactName:string = "";
  contactEmail:string ="";
  contactMessage:string = '';
  onclickDone = ()=>{
    this.contactName = " ";
    this.contactEmail=" ";
    this.contactMessage=" ";
  }

}
