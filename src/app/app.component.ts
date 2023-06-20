import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isPhoneviewed = false;

  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(){
     this.activatedRoute.fragment.subscribe((val) => {
      console.log(val);
      this.jumpTo(val ??" ");
     });

    
    }
   

   jumpTo(section:string){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
   };


   
}
