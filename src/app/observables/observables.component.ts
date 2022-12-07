import { AfterViewInit, Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-combine-all',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class CombineAllComponent implements AfterViewInit{

  data:any=[];
  description:any
  

  personalityArray=[
    {title:'vasikaran',description:'angular developer'},
    {title:'alpha',description:'singer and rapper'},
    {title:'theta',description:'business mogul'}
  ]

  personalityObservable$=from(this.personalityArray)

  constructor() { 
    this.personalityObservable$.subscribe({
      
      next:(data:any)=>{
        console.log(data.title)
        console.log(data.description)
        this.data= Array.of(data); 
      },
      error:(err:any)=>console.log(err),
      complete:()=> console.log("completed")
    })

    this.promiseObservable$.subscribe({
      next:(data:any)=>{
        console.log(data)
      
      },
      error:(err:any)=>{
       console.log(err)
      },
      complete:()=>console.log("completed")
    })
  }
  

  promise=new Promise((resolve:any,reject:any)=>{
   setTimeout(()=>{
    resolve('Resolve the promise .sending data');
   },3000)
  })

  promiseObservable$=from(this.promise)


  ngAfterViewInit(){
    fromEvent(document.getElementById('clickButton')!,'click').subscribe({
      next:(data:any)=>{
        console.log(data)
      },
      error:(err:any)=>{
       console.log(err)
      },
      complete:()=>console.log("completed")
    })

    
  }

}
