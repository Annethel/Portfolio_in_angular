import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
 classImg:string="./assets/anna.jpeg";
 
 @Input() fromContainer:string = "";
 greetings:string="Hello,"
 subname:string ="Mengjo"
 name:string ="Anna Thelma";
 occupation:string="Software Engineering Student";
 path:string ="#Full Stack Developer";

}
