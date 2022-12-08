import { Component, OnInit } from '@angular/core';
import { concatAll,endWith,of } from 'rxjs';
@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.scss']
})
export class ConcatALLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.callConcatAll()

  }
  
  callConcatAll(){
    const source$=of('hello','vasi')

    source$.pipe(endWith('bye','vasi'))
    .subscribe(console.log)
  }

}
