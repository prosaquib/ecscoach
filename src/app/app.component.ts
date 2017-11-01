import { Component ,OnInit} from '@angular/core';
import {EscCoachingService} from './ecscoaching.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ecs Coaching Details';
  ecscoachigData:any = []
  ecsDatas:any
  constructor(private ecscoachservice:EscCoachingService){}
  ngOnInit(){
    this.ecscoachservice.getEcsCoaching().subscribe(data=>{
      this.ecscoachigData = data.response_list      
      console.log(this.ecscoachigData);
    })
  }

}
