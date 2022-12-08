import { Component,OnInit } from "@angular/core";
import { combineLatest,retry,timer } from "rxjs";

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})

export class CombineLatestComponent implements OnInit{
   timer1:any
  ngOnInit(): void {
      this.timer()
  }
  
  timer(){
    const timer1$= timer(1000,4000)
    const timer2$= timer(2000,5000)
    const timer3$= timer(3000,6000)

    return combineLatest(timer1$,timer2$,timer3$).subscribe
   ( ([timerValOne, timerValTwo, timerValThree]) => {
   
    console.log(
    `Timer One Latest: ${timerValOne},
     Timer Two Latest: ${timerValTwo},
     Timer Three Latest: ${timerValThree}`
    );
    timerValOne=this.timer1
  })
  }
  
}