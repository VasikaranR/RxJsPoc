import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const customObservable$ = new Observable((observer)=>{
      for(let i=0;i<5;i++){
        observer.next(i);
      }
      observer.complete();
    });

    let observer ={
      next:(data:any)=>{
        console.log(data);
      },
      error:(err:any)=>{
        console.log(err)
      },
      complete:()=>{
        console.log('complete all done')
      }

    }
    customObservable$.subscribe(observer)
  }
  

}
