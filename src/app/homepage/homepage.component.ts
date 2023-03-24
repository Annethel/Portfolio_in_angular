import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
 classImg:string="./assets/anna.jpeg";
 
 @Input() fromContainer:string = "";
}
