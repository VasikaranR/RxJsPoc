import { Component, Injectable,NgModule, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of ,delay, forkJoin} from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],
  providers: [ myService ]
})

@Injectable()

  export class myService{
    constructor(private http:HttpClient) { }

    makeRequest(value:string,duration:number){
        return of(`Complete: ${value}`).pipe(
          delay(duration)
        );
       
        
    }

  }


@Component({
  selector: 'app-fork-join',
  template: `<div>
  <h2>forkJoin Example</h2>
  <ul>
    <li> {{propOne}} </li>
    <li> {{propTwo}} </li>
    <li> {{propThree}} </li>
  </ul>
</div>`,
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {
  public propOne!: string;
  public propTwo!: string;
  public propThree!: string;
  constructor(private _myService: myService) {}
  
  ngOnInit(): void {
    forkJoin(
      this._myService.makeRequest('Request One', 2000),
      this._myService.makeRequest('Request Two', 1000) ,
      this._myService.makeRequest('Request Three', 3000) 


    )
    .subscribe(([res1, res2, res3]) => {
      this.propOne = res1;
      this.propTwo = res2;
      this.propThree = res3;
    });
  }


  }

  



