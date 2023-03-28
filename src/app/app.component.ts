import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(){
     this.activatedRoute.fragment.subscribe((val) => {
      console.log(val);
      this.jumpTo(val ??" ");
     });
   }

   jumpTo(section:string){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
   }
}
